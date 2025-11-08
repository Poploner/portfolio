


export default function ContactCard({ icon: Icon, title, details }) {
    return(
        <>
            <div className="each-add-line">
                <div className="each-icon">
                    <Icon className="cont-icon"/>
                </div>
                <div className="add-details">
                    <h3 className="add-title">
                        {title}
                    </h3>
                    <p className="add-description">
                        {details}
                    </p>
                </div>
            </div>
        </>
    )
}