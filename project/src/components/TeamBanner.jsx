import teamleft from "../images/teamPage-img/teamleft.jpg"
import teamright1 from "../images/teamPage-img/teamright1.jpg"
import teamright2 from "../images/teamPage-img/teamright2.jpg"
import teamright3 from "../images/teamPage-img/teamright3.jpg"
import teamright4 from "../images/teamPage-img/teamright4.jpg"

export default function TeamBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-32 px-40">
  {/* Sol büyük görsel */}
  <div className="md:col-span-2">
    <img
      src={teamleft}
      alt="team-left"
      className="w-full h-[300px] md:h-[550px] object-cover object-top rounded"
    />
  </div>

  {/* Sağdaki 4 küçük görsel */}
  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[300px] md:h-[550px]">
    <img src={teamright1} alt="team-right-1" className="w-full h-full object-cover rounded" />
    <img src={teamright2} alt="team-right-2" className="w-full h-full object-cover rounded" />
    <img src={teamright3} alt="team-right-3" className="w-full h-full object-cover rounded" />
    <img src={teamright4} alt="team-right-4" className="w-full h-full object-cover rounded" />
  </div>
</div>

  );
}
