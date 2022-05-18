import Header from "../../Components/Header/Header"
import Card from "../../Components/Card/Card"

import "./overwiew.scss"

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

        </div>
    )
}

export default Overwiew