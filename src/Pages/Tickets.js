import Header from "../Components/Header/Header"
import TicketDetails from "../Components/TableItem/TableItem"

function Tickets() {
    return (
        <div>
            <Header title="Tickets" />
            <TicketDetails
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

export default Tickets