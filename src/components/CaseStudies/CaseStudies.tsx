import { projects } from "../../data/projects";
import "./projects.css";

const CaseStudies = () => {
    return (
        <section className="projects">
            <div className="section-header">
                <span>CASE STUDY</span>
                <p>Explore recent product, web, and app design works.</p>
            </div>

            <div className="project-grid">
                {projects.map((proj, i) => (
                    <article key={i} className={`project-card ${i === 0 ? "hero" : ""}`}>
                        <img src={proj.image} alt={proj.title} />
                        <div className="meta">
                            <span>Web Design</span>
                            <h3>{proj.title}</h3>
                            <a href="#">See Details →</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;