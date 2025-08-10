import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/reducers/clientSlice";

// Regex tanımları
const phoneRegex = /^(\+90|0)?5\d{9}$/;
const taxRegex = /^T\d{4}V\d{6}$/;
const ibanRegex = /^TR\d{24}$/;

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("İsim zorunlu").min(3, "En az 3 karakter olmalı"),
  email: yup.string().required("Email zorunlu").email("Geçerli bir email girin"),
  password: yup
    .string()
    .required("Şifre zorunlu")
    .min(8, "En az 8 karakter olmalı")
    .matches(/[a-z]/, "En az bir küçük harf içermeli")
    .matches(/[A-Z]/, "En az bir büyük harf içermeli")
    .matches(/\d/, "En az bir rakam içermeli")
    .matches(/[@$!%*?&]/, "En az bir özel karakter içermeli"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrar zorunlu"),
  role_id: yup.string().required("Rol seçiniz"),
  store: yup.object().when("role_id", {
    is: (val) => val && val !== "1", // 1 => Customer
    then: () =>
      yup.object().shape({
        name: yup.string().required("Mağaza adı zorunlu").min(3),
        phone: yup
          .string()
          .required("Telefon zorunlu")
          .matches(phoneRegex, "Geçerli bir Türkiye telefon numarası girin"),
        tax_no: yup
          .string()
          .required("Vergi numarası zorunlu")
          .matches(taxRegex, "Format TXXXXVXXXXXX olmalı"),
        bank_account: yup
          .string()
          .required("IBAN zorunlu")
          .matches(ibanRegex, "Geçerli bir IBAN girin"),
      }),
    otherwise: () => yup.object().notRequired(),
  }),
});

export default function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.client.roles);
  const rolesFetchState = useSelector((state) => state.client.rolesFetchState);
  const rolesError = useSelector((state) => state.client.rolesError);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role_id: "1", // Customer default
    },
  });

  const selectedRole = watch("role_id");

  // Roles'ları sadece gerektiğinde getir
  useEffect(() => {
    if ((!roles || roles.length === 0) && rolesFetchState === "NOT_FETCHED") {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles, rolesFetchState]);

  // Hata durumunda toast göster
  useEffect(() => {
    if (rolesFetchState === "FAILED" && rolesError) {
      toast.error(rolesError);
    }
  }, [rolesFetchState, rolesError]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload =
        data.role_id === "1" || "3"
          ? {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
          }
          : {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
            store: {
              name: data.store.name,
              phone: data.store.phone,
              tax_no: data.store.tax_no,
              bank_account: data.store.bank_account,
            },
          };

      await axiosInstance.post("/signup", payload);
      toast.success("Kayıt başarılı! E-postanıza gelen onay linkine tıklayın...");
      navigate("/login", { replace: true }); // login sayfasına yönlendir
    } catch (err) {
      toast.error(err.response?.data?.message || "Kayıt sırasında bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto mt-16">
        <h1 className="text-5xl text-center font-bold mb-8 text-gray-800">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>

          {/* Role */}
          <div>
            <select {...register("role_id")} className="border p-2 w-full">
              {rolesFetchState === "FETCHING" && (
                <option>Yükleniyor...</option>
              )}
              {roles &&
                roles.map((role) => (
                  <option key={role.id} value={String(role.id)}>
                    {role.name}
                  </option>
                ))}
            </select>
            <p className="text-red-500">{errors.role_id?.message}</p>
          </div>

          {/* Store Fields */}
          {selectedRole === "2" && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Store Name"
                  {...register("store.name")}
                  className="border p-2 w-full"
                />
                <p className="text-red-500">{errors.store?.name?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Store Phone"
                  {...register("store.phone")}
                  className="border p-2 w-full"
                />
                <p className="text-red-500">{errors.store?.phone?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Store Tax ID (TXXXXVXXXXXX)"
                  {...register("store.tax_no")}
                  className="border p-2 w-full"
                />
                <p className="text-red-500">{errors.store?.tax_no?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Store Bank Account (IBAN)"
                  {...register("store.bank_account")}
                  className="border p-2 w-full"
                />
                <p className="text-red-500">
                  {errors.store?.bank_account?.message}
                </p>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 w-full disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
