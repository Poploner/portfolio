import Card from "./Card";
import Data from "./Data"
export default function Portfolio(){

    const ports =[...Data];
    const finalPorts = ports.map((project, index) => (
        <Card 
            key={project.index}
            image={project.image}
            title={project.title}
            link={project.link}

        />
    ))

    return(
        <>
            <h2 className="title">Portfolio</h2>
            <p className="p-inputs">These are some projects I've layed my hands on for learning and fun sake</p>
            <div className="portfolio-box">
                {finalPorts.length > 0 ? finalPorts : <p>No Projects Yet.</p>}
            </div>
        </>
    )
}