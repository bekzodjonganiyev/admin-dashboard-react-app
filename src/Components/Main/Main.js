import Overview from "../../Pages/Overwiew/Overwiew"
import Tickets from "../../Pages/Tickets"
import Ideas from "../../Pages/Ideas"
import Contacts from "../../Pages/Contacts"
import Agents from "../../Pages/Agents"
import Articles from "../../Pages/Articles"
import Settings from "../../Pages/Settings"
import Subscription from "../../Pages/Subscription"
import {Routes, Route} from "react-router-dom"
import "./main.scss"


function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/ideas" element={<Ideas />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/subscription" element={<Subscription />} />
            </Routes>
        </div>
    )
}

export default Main