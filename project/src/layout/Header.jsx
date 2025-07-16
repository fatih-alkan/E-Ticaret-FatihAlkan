import profile from '../images/header-img/profile.png'
import search from '../images/header-img/search.png'
import shoppingCard from '../images/header-img/shopping-card.png'
import menu from '../images/header-img/menu.png'
export default function Header() {
    return(
        <>
        <header>
            <div className='flex justify-around'>
            <h3 className='font-bold text-2xl'>Bandage</h3>
            <div className='flex items-center gap-6'>
                <a href=""><img src={profile} alt="" /></a>
                <a href=""><img src={search} alt="" /></a>
                <a href=""><img src={shoppingCard} alt="" /></a>
                <a href=""><img src={menu} alt="" /></a>
            </div>
            </div>
            <div>
                
            </div>
            
        </header>
        </>
    );
}