import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Home () {

     const titles = ["Developer", "Data Analyst", "Sales Person", "UI/UX Designer"]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = titles[index];
    let typingSpeed = isDeleting ? 100 : 150 
    const handleTyping = () => {
      if (!isDeleting) {
       
        setText(current.substring(0, text.length + 1))
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000) 
        }
      } else {
        
        setText(current.substring(0, text.length - 1))
        if (text === "") {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer);
  }, [text, isDeleting, index])


    return (
        
        <>      
            <section className="Hero" id="home">
                <div className="Hero-content">
                <h1>ADAM FOLORUNSHO</h1>
                <p>I'm a  {""}<span className="developer">{text}<span className="cursor">|</span></span></p>
                <div className="socials">
                  <a className="ig-button" href="https://www.instagram.com/dark.ayo?igsh=Nnl1bDgwMnY5ajkx&utm_source=qr" target="_blank"><Instagram /></a>
                   <a className="fb-button" href="https://www.facebook.com/share/1DQrZ5iKmE/?mibextid=wwXIfr" target="_blank"> <Facebook /></a>
                    <a className="ln-button" href="https://www.linkedin.com/in/adam-folorunsho-aa8aa1229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><Linkedin /></a>
                    <a className="twt-button" href="https://x.com/loner1065?s=21" target="_blank"><Twitter /></a>
                </div>
                </div>
            </section>
            <section className="about" id="about">
                <About />
            </section>
           <section className="skills" id="skill">
                <Skill />
           </section>
           <section className="portfolio" id="portfolio">
                <Portfolio />
           </section>
           <section className="contact" id="contact">
                <Contact />
           </section>
           <section className="Footer">
                <Footer />
           </section>
        </>
    )
}