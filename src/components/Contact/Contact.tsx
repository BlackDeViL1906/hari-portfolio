import "./Contact.css";

const Contact = () => {
    const topics = ["Mobile App", "Website Design", "Branding", "Webflow Development", "App Design", "Graphic Design", "Wordpress"];

    return (
        <section className="contact">
            <div className="contact-header">
                <h2><span style={{color:"#8e8e8e"}}>Say Hi!</span> and tell me about </h2>
                {/* <img src="/assets/hi.png" alt="hi" /> */}
                <h2>your idea</h2>
                <p>Have a nice work? Reach out and let’s chat.</p>
            </div>
            <form>
                <input placeholder="Name*" required />
                <input type="email" placeholder="Email*" required />
                <input placeholder="Company name" />
                <textarea placeholder="What’s in your mind?" rows={5} />

                <div className="tags">
                    {topics.map(tag => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <button type="submit">Send Me</button>
                <small>I must get back to you within 24 hrs.</small>
            </form>
        </section>
    );
};

export default Contact;