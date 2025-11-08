import AdamImage from "../images/Adam.jpeg"

export default function About(){
    return(
        <>
            <h2 className="title">About</h2>
            <p className="p-inputs">I’m Adam Folorunsho, a student at Al-Hikmah University with a strong passion for technology and design. I aspire to become a web developer, dedicated to creating functional, responsive, and visually appealing websites. I’m constantly learning new tools and frameworks to improve my skills and bring creative ideas to life through code.</p>
            <div className="description">
                <div className="profile-image">
                    <img 
                    className="image"
                    src={AdamImage}
                    alt="profile picture"
                    />
                </div>
                <div className="details-list">
                    <h3 className="ui-ux">UI/UX DESIGNER & WEB DEVELOPER</h3>
                    <ul className="list-style">
                        <li className="list"><span className="list-title">Birthday:</span> 14th December,2001</li>
                        <li className="list"><span className="list-title">Website:</span>None</li>
                        <li className="list"><span className="list-title">Phone:</span> +234 905 8978 627</li>
                        <li className="list"><span className="list-title">City:</span> Ibadan</li>
                        <li className="list"><span className="list-title">Age:</span> 23</li>
                        <li className="list"><span className="list-title">Degree:</span> Undergraduate</li>
                        <li className="list"><span className="list-title">Email:</span> @loner1065@gmail.com</li>
                        <li className="list"><span className="list-title">Freelance:</span> Available</li>
                    </ul>
                    <p className="closing-text">I first layed my hand on the keyboard to learn web develpment in 2022. Then I watched couple of videos on Youtube I started with HTML, after some weeks I quit cause I was gettin bored. Then later in 2024, it was time for my SIWESS exerrcise in school, so in search of what to enage myself with during that period. My brother introduced me to a software company in Kano State <span className="brainstorm">BRAINSTORM IT SOLUTIONS</span> and here I started my web development jouney again and with the effort of evryone in the company I've grown the skills I have today about Web Development </p>
                </div>
            </div>
        </>
    )
}