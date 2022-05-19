import Header from "../../Components/Header/Header"
import Card from "../../Components/Card/Card"

import "./overwiew.scss"
import SectionRight from "../../Components/right/SectionRight"
import FooterHeader from "../../Components/FooterHeader/FooterHeader"

function Overwiew() {
    return (
        <div>
            <Header title="Overview" />

            <div className="cards">
                <Card title="Unsolved" content="50" />
                <Card title="Unsolved" content="50" />
                <Card title="Unsolved" content="50" />
                <Card title="Unsolved" content="50" />
            </div>

            <div className="section">
                <div className="section-header">
                    <div className="header-left">
                        <h3>Today’s trends</h3>
                        <p>as of 25 May 2019, 09:41 PM</p>
                    </div>
                    <div className="header-right">
                        <p><span><i></i></span>Today</p>
                        <p><span><i></i></span>Yesterday</p>
                    </div>
                </div>

                <div className="section-right">
                    <SectionRight text="Resolved" value="33m" />
                    <SectionRight text="Received" value="426" />
                    <SectionRight text="Average first response time" value="33m" />
                    <SectionRight text="Average response time" value="3h 8m " />
                    <SectionRight text="Resolution within SLA" value="94%" />
                </div>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <FooterHeader foterTitle="Unresolved tickets" foterTitleDefinition="Group: Support"  link="View details"/>
                </div>
                <div className="footer-right">
                <FooterHeader foterTitle="Tasks" foterTitleDefinition="Today" link="View all" />
                </div>
            </div>
        </div>
    )
}

export default Overwiew