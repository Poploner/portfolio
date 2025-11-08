

export default function ContactForm() {
    return(
        <>
            <div className="contact-form">
                <form>
                    <div className="name-mail">
                        <input type="text" placeholder="Your Name" className="Name" />
                        <input type="text" placeholder="Your Mail" className="Mail" />
                    </div>
                    <div className="subject-box">
                    <input type="text" placeholder="Subject" className="Subject" />
                    </div>
                    <div className="message-box">
                    <input type="text" placeholder="Message" className="Message"/>
                    </div>
                    <button className="submit">send message</button>
                </form>
            </div>
        </>
    )
}