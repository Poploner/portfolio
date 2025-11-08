import ContactData from "./ContactData";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
export default function Contact(){

    const contacts = [...ContactData]
    const finalContacts = contacts.map((con,index) => (
        <ContactCard 
        key = {con.index}
        title = {con.title}
        details = {con.details}
        icon = {con.icon}
        />
    ))

    return(
        <>
            <h2 className="title">Contact</h2>
            <p className="p-inputs">For enquries or patnership you can reach me through my contact provided below:</p>
            <div className="contact-box">
                <div className="contact-log">
                  {finalContacts.length > 0 ? finalContacts : <p>No Contact Available At The Moment</p>}
                </div>
                <div className="form-box">
                    <ContactForm />
                </div>
            </div>
        </>
    )
}