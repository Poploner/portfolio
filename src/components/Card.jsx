
export default function Card(props) {


function hanleClick (e){
    console.log("ygsdjkhgdfdgj")
    window.open(props.link, "_blank","noopener" )
}

    return(
        <>
            <div className="card" onClick={hanleClick}>
                <div 
                className="card-image-box">
                      <img 
                    className="card-image"
                    src={props.image}
                    alt={props.title}
                    />
                </div>
                <div className="card-title-box">
                    <h2 className="card-title">{props.title}</h2>
                </div>
            </div>
        </>
    )
}