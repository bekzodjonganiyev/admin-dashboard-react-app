import "./tableitem.scss"
import Rasm from "../../Assets/Images/Images/photo.png"


function TicketDetails({userTitle, userDefenition, customerName, customerDate, day, time, status,}){
    return(
        <div className="ticket-wrapper">
            {/* //////////////// USER///////////////// */}
            <div className="user">
                <div className="user-avatar"> 
                {/* <Avatar /> */}
                <img src={Rasm} alt="hhshsshs" />
                </div>
                <div className="user-info">
                    <p>{userTitle}</p>
                    <p>{userDefenition}</p>
                </div>
            </div>

            {/* ////////////// CUSTOMER ////////////// */}
            <div className="customer">
                <p>{customerName}</p>
                <p>{customerDate}</p>
            </div>

            {/* ///////////// DATE /////////////////// */}
            <div className="date">
                <p>{day}</p>
                <p>{time}</p>
            </div>

            {/* ///////////// PRIORITY /////////////// */}
            <div className="priority">
                <span>{status}</span>
            </div>
        </div>
    )
}

export default TicketDetails