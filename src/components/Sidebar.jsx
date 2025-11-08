import { Award, BriefcaseBusiness, Contact, House, User } from "lucide-react"
import { NavLink } from "react-router"

export default function Sidebar(){
    return(
        <>
            <div className="side-nav">
                <a href="#home" className="nav-items " data-label="Home" to="/">
                    <House />
                </a>
                <a href="#about" className="nav-items" data-label="About" to="/About">
                    <User />
                </a>
                <a href="#skill" className="nav-items" data-label="Skills" to="/Skills">
                    <Award />
                </a>
                <a href="#portfolio" className="nav-items" data-label="Portfolio" to="/Portfolio">
                    <BriefcaseBusiness />
                </a>
                <a href="#contact" className="nav-items" data-label="Contact" to="/contact">
                    <Contact />
                </a>
            </div>
        </>
    )
}