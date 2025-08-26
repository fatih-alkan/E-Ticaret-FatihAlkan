import aboutVideo from '../images/aboutPage-img/about-video.mp4'

export default function AboutVideo() {
  return (
    <div className="w-[688px] h-[363px] overflow-hidden rounded-2xl m-auto mt-16 max-[768px]:w-[300px] max-[768px]:h-[200px]">
      <video
        src={aboutVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover max-[768px]:w-[300px] max-[768px]:h-[200px] m-auto"
      />
    </div>
  );
}
