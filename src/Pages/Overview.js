import Header from "../Components/Header/Header"
import Card from "../Components/Card/Card"

function Overview() {
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

export default Overview