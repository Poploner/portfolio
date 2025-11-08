export default function Skill(){
const skillsData = [
    {name:"HTML" ,level: 100},
    {name:"CSS" , level: 70},
    {name:"JAVA SCRIPT" , level: 70},
    {name:"REACT" , level: 60}
]

    return(
        <>
            <h2 className="title">Skills</h2>
            {/* <h2 className="title">Skills</h2> */}
            <p className="p-inputs">Web development knowledge rating</p>
            <div className="skills-box">
                {skillsData.map((ISkill, index) => {
                    return(
                    <div key={index} className="skill">
                        <div className="skill-header">
                            <span className="skill-name">{ISkill.name}</span>
                            <span className="skill-percent">{ISkill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: `${ISkill.level}%`}}></div>
                            
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </>
    )
}