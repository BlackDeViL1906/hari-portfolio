import "./Contact.css";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

const Contact = () => {
    const topics = ["Mobile App", "Website Design", "Branding", "Webflow development", "App design", "Graphic design", "Wordpress"];
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    const toggleTopic = (topic: string) => {
        setSelectedTopics(prev =>
            prev.includes(topic)
                ? prev.filter(t => t !== topic)
                : [...prev, topic]
        );
    };

    return (
        <section className="contact">
            <div className="contact-header">
                <h2><span style={{ color: "#b8b8b8" }}>I'd !</span> love to hear from </h2>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={arrow} style={{ maxHeight: "15%", maxWidth: "25%", padding:"3rem"}} />
                    <h2>you</h2>
                </div>
                <p>Feel Free to Contact.</p>
            </div>
            <form style={{padding:"4rem 8rem"}}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name:*</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email:*</label>
                        <input type="email" placeholder="your.email@example.com" required />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label>Subject</label>
                    <input type="text" placeholder="What is this regarding?" />
                </div>

                <div className="form-group full-width">
                    <label>Message*</label>
                    <textarea placeholder="Your message here..." rows={5} required />
                </div>
                <button type="submit" className="submit-btn">Send Me</button>
            </form>
        </section>
    );
};

export default Contact;