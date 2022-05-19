import "./sectionRight.css"

const SectionRight = ({text, value}) => {
    return(
        <div className="right">
            <p className="text">{text}</p>
            <p className="value">{value}</p>
        </div>
    )
}

export default SectionRight