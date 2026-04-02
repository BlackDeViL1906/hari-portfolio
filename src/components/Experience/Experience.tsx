import { experience } from "../../data/experience";
import RadialBurst from "../RadialBurst/RadialBurst";
import "./experience.css";

const Experience = () => {
    return (
        <section className="experience">
            <div className="section-header">
                <div>
                <RadialBurst />
                <span>EXPERIENCE</span>
                <p>Some of the impactful design roles from my career.</p>
                </div>
            </div>

            <div className="exp-list">
                {experience.map((item, index) => (
                    <div key={index} className="exp-card">
                        <div className="exp-left">
                            <span className="index">{index + 1}</span>
                            <div>
                                <h3>{item.role}</h3>
                                <p>{item.company}</p>
                            </div>
                        </div>
                        <span className="duration">{item.duration}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;