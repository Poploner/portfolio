import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


export default function Footer() {
    return(
        <>
            <div className="footer">
                <h3 className="name-footer">ADAM FOLORUNSHO</h3>
                <p className="quote">Success favors those who think with their hands and work with their minds.</p>
                <div className="social-row">
                    <a className="ig-footer-button" href="https://www.instagram.com/dark.ayo?igsh=Nnl1bDgwMnY5ajkx&utm_source=qr" target="-_blank"><Instagram /></a>
                   <a className="fb-footer-button" href="https://www.facebook.com/share/1DQrZ5iKmE/?mibextid=wwXIfr" target="-_blank"> <Facebook /></a>
                    <a className="ln-footer-button" href="https://www.linkedin.com/in/adam-folorunsho-aa8aa1229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="-_blank"><Linkedin /></a>
                    <a className="twt-footer-button" href="https://x.com/loner1065?s=21" target="-_blank"><Twitter /></a>
                </div>
                <p className="">copyright <span className="span-copy">Adam Folorunsho</span> All rights reserved</p>
            </div>
        </>
    )
}