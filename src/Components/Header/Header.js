import { SearchIcon, NotificationIcon, Devider } from "../../Assets/Images/Icons/Icons"

import ProfileImg from "../../Assets/Images/Images/photo.png"
import "./header.scss"


function Header({title}){
    return(
        <div className="header">
            <h1>{title}</h1>

            <div className="right-side">
                <SearchIcon />
                <NotificationIcon />
                <Devider />
                <p>Jones Ferdinand</p>
                <img src={ProfileImg} alt="Profil img"/>
            </div>
        </div>
    )
}

export default Header