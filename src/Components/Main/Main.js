import Header from "../Header/Header"
import TicketDetails from "../TableItem/TableItem"

// import Avatar from "../../Assets/Images/Images/1.png"
import "./main.scss"


function Main() {
    return (
        <div className="main">
            <Header title="Tickets" />
            <TicketDetails
                //  Avatar={Avatar} 
                userTitle="Contact Email not Linked" userDefenition="Updated 1 day ago"
                customerName="Tom Cruise"
                customerDate="on 24.05.2019"
                day="May 26, 2019"
                time="6:30 PM"
                status="hight"
            />

            <TicketDetails
                //  Avatar={Avatar} 
                userTitle="Contact Email not Linked" userDefenition="Updated 1 day ago"
                customerName="Tom Cruise"
                customerDate="on 24.05.2019"
                day="May 26, 2019"
                time="6:30 PM"
                status="hight"
            />

            <TicketDetails
                //  Avatar={Avatar} 
                userTitle="Contact Email not Linked" userDefenition="Updated 1 day ago"
                customerName="Tom Cruise"
                customerDate="on 24.05.2019"
                day="May 26, 2019"
                time="6:30 PM"
                status="hight"
            />

            <TicketDetails
                //  Avatar={Avatar} 
                userTitle="Contact Email not Linked" userDefenition="Updated 1 day ago"
                customerName="Tom Cruise"
                customerDate="on 24.05.2019"
                day="May 26, 2019"
                time="6:30 PM"
                status="hight"
            />

            <TicketDetails
                //  Avatar={Avatar} 
                userTitle="Contact Email not Linked" userDefenition="Updated 1 day ago"
                customerName="Tom Cruise"
                customerDate="on 24.05.2019"
                day="May 26, 2019"
                time="6:30 PM"
                status="hight"
            />

        </div>
    )
}

export default Main