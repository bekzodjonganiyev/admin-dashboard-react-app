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
            <Overview />
            <Tickets />
            <Ideas />
            <Contacts />
            <Agents />
            <Articles />
            <Settings />
            <Subscription />
        </div>
    )
}

export default Sidebar