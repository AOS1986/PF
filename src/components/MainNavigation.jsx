import ContactButton from './contactButton';
import { NavLink } from 'react-router-dom';



function MainNavigation(){
let linkNotActive = "bg-left-bottom bg-gradient-to-r from-[#55ff4e] to-[#55ff4e] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-2";
let linkActive = "underline decoration-[#55ff4e] decoration-2 underline-offset-[0.6em]";

return(
    <div className="flex flex-row bg-[#9400D3]" style={{position: 'sticky', top: 0, zIndex:50}}>
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
            <header>
                <nav>
                    <ul className="flex justify-around h-28 items-center font-helvetica font-bold text-[#FFFAFA]">
                        <li className='group transition-all duration-300 ease-in-out from-stone-100'>
                            <NavLink to="/" className={({isActive}) => (isActive ? (linkActive) : linkNotActive)} end>Wer bin ich?</NavLink></li>
                        <li className='group transition-all duration-300 ease-in-out'>
                            <NavLink to="/previously" className={({isActive}) => (isActive ? (linkActive) : linkNotActive)}>Was bisher geschah..</NavLink> </li>
                        <li className='group transition-all duration-300 ease-in-out'>
                            <NavLink to="/skills" className={({isActive}) => (isActive ? (linkActive) : linkNotActive)}>TechStack</NavLink> </li>
                        <li className='group transition-all duration-300 ease-in-out'>
                            <NavLink to="/pf" className={({isActive}) => (isActive ? (linkActive) : linkNotActive)}>Portfolio</NavLink> </li>
                    </ul>
                </nav>
            </header>
        </div>
        <div className="basis-1/4 flex ml-20 items-center">
            <ContactButton/>
        </div>
    </div>    
);
}
export default MainNavigation;
