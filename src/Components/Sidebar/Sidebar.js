import { NavLink } from "react-router-dom"
import {
    DashboardLogo,
    Overview,
    Tickets,
    Ideas,
    Contacts,
    Agents,
    Articles,
    Settings,
    Subscription
} from "../../Assets/Images/Icons/Icons"

import "./saidbar.scss"


function Sidebar() {
    return (
        <div className="sidebar">
            < DashboardLogo />
            <NavLink className={`link`} to="/" ><Overview /></NavLink>
            <NavLink className={`link`} to="/tickets" > <Tickets /></NavLink>
            <NavLink className={`link`} to="/ideas" > <Ideas /></NavLink>
            <NavLink className={`link`} to="/contacts" > <Contacts /></NavLink>
            <NavLink className={`link`} to="/agents" ><Agents /></NavLink>
            <NavLink className={`link`} to="/articles" > <Articles /></NavLink>
            <NavLink className={`link`} to="/settings" > <Settings /></NavLink>
            <NavLink className={`link`} to="/subscription" > <Subscription /></NavLink>

        </div>
    )
}

export default Sidebar