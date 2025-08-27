import { useSelector, useDispatch } from "react-redux";
import { removeLike } from "../store/reducers/likedSlice";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CartLikeDropdown() {
  const { likedItems } = useSelector(state => state.liked);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!likedItems.length) return <div className="p-4 text-center">Beğenilen ürün yok</div>;

  return (
    <div className="bg-white shadow-md p-4 w-70 mx-auto max-[768px]:w-80">
      <h3 className="text-[#252B42] font-bold">My Likes ({likedItems.length})</h3>
      {likedItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <img
              src={item.thumbnail || item.images?.[0]}
              alt={item.title}
              className="w-10 h-12 object-cover rounded"
            />
            <div>
              <p className="font-semibold text-[14px]">{item.title}</p>
              <p className="text-[12px]">${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeLike(item.id))}
            className="text-red-500 font-bold bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center p-1 hover:bg-gray-300 cursor-pointer"
          >
            <FiTrash />
          </button>
        </div>
      ))}

      <div className="flex justify-center mt-2">
        <button
          className="p-2 border rounded-xl hover:bg-gray-800 hover:text-white cursor-pointer"
        >
          Go to Likes
        </button>
      </div>
    </div>
  );
}
