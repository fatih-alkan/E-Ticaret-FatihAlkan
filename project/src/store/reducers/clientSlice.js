// src/store/reducers/clientSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// --- Login Thunk ---
export const loginUser = createAsyncThunk(
  "client/loginUser",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/login", { email, password });

      // rememberMe seçiliyse token'ı localStorage'a kaydet
      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
      }

      return res.data; // user + token
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const fetchRoles = createAsyncThunk(
  "client/fetchRoles",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/roles");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- LocalStorage'dan kullanıcı bilgisi yükle ---
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  addressList: [],
  creditCards: [],
  roles: [],
  rolesFetchState: "NOT_FETCHED",
  rolesError: null,
  theme: "light",
  language: "tr",
  loginStatus: "idle",
  loginError: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Roles
      .addCase(fetchRoles.pending, (state) => {
        state.rolesFetchState = "FETCHING";
        state.rolesError = null;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
        state.rolesFetchState = "FETCHED";
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.rolesFetchState = "FAILED";
        state.rolesError = action.payload || action.error.message;
      })
      // Login User
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
        state.loginError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        
        const userData = {
          name: action.payload.name,
          email: action.payload.email,
          role_id: action.payload.role_id,
        };
        
        state.user = userData;

        // LocalStorage'a kaydet
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.loginError = action.payload || action.error.message;
      });
  },
});

export const { setUser, setRoles, setTheme, setLanguage, logout } = clientSlice.actions;
export default clientSlice.reducer;
