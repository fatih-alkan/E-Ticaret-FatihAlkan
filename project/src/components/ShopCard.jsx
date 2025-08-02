import men from '../images/shopping-img/men.jpg';
import women from '../images/shopping-img/women.jpg';
import kids from '../images/shopping-img/kids.jpg';
import accessories from '../images/shopping-img/accessories.jpg';
export default function ShopCard() {
  return (
    <div className="px-8 py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-bold text-2xl text-[#252B42]">EDITOR'S PICK</h3>
        <p className="text-[#737373] max-w-48 text-center mb-6">
          Problem trying to resolve the conflict between
        </p>
      </div>

      <div className="hidden md:flex w-full max-w-[1124px] h-[500px] mx-auto gap-4">
        <div className="relative w-1/2 h-full">
          <img src={men} alt="Men" className="w-full h-full object-cover" />
          <a href="#" className="absolute bottom-6 left-6 bg-white px-6 py-2 text-sm font-bold text-black">
            MEN
          </a>
        </div>

        <div className="relative w-1/4 h-full">
          <img src={women} alt="Women" className="w-full h-full object-cover" />
          <a href="#" className="absolute bottom-6 left-6 bg-white px-6 py-2 text-sm font-bold text-black">
            WOMEN
          </a>
        </div>

        <div className="flex flex-col w-1/4 h-full gap-4">
          <div className="relative h-[242px]">
            <img src={accessories} alt="Accessories" className="w-full h-full object-cover" />
            <a href="#" className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-bold text-black">
              ACCESSORIES
            </a>
          </div>

          <div className="relative h-[242px]">
            <img src={kids} alt="Kids" className="w-full h-full object-cover" />
            <a href="#" className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-bold text-black">
              KIDS
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-4 mt-6">
        {[{ src: men, label: 'MEN' }, { src: women, label: 'WOMEN' }, { src: accessories, label: 'ACCESSORIES' }, { src: kids, label: 'KIDS' }].map((item, i) => (
          <div key={i} className="relative w-full h-[400px]">
            <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
            <a href="#" className="absolute bottom-4 left-4 bg-white px-6 py-2 text-sm font-bold text-black">
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
