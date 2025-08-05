import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import homeBanner from '../images/header-img/home-banner.jpg';
import homeBanner1 from '../images/header-img/home-banner1.png';
import homeBanner2 from '../images/header-img/home-banner2.png';

const banners = [homeBanner, homeBanner1, homeBanner2];

export default function HomeBanner() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleScroll = () => {
    const scroll = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const index = Math.round(scroll / width);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: (currentIndex - 1 + banners.length) % banners.length * width,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: (currentIndex + 1) % banners.length * width,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ref = containerRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-full h-[788px] overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
      >
        {banners.map((img, idx) => (
          <div
            key={idx}
            className="min-w-full h-[770px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center gap-4 snap-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p className="font-bold uppercase tracking-wide">Summer 2020</p>
            <div>
              <h2 className="text-4xl font-bold mt-2">NEW</h2>
              <h2 className="text-4xl font-bold">COLLECTION</h2>
            </div>
            <p className="mt-4 text-m max-w-[280px] text-white">
              We know how large objects will act, but things on a small scale.
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-green-500 text-white font-bold mt-4 px-14 py-3 rounded hover:bg-green-600 transition cursor-pointer"
            >
              SHOP NOW
            </button>
          </div>
        ))}
      </div>

      <div onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-7xl text-white cursor-pointer select-none">
        &lt;
      </div>
      <div onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-7xl text-white cursor-pointer select-none">
        &gt;
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
