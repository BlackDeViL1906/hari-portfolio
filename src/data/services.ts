import pennib from "../assets/icons8-vector-64.png";
import compbrush from "../assets/comp-brush-icon.png";
import ineract from "../assets/interactive.png";

export const services = [
    { 
        title: "FRONTEND DEVELOPMENT", 
        category: "Building responsive, high-performance and well structured UIs with React.", 
        description: "I create pixel-perfect, responsive interfaces using React and modern CSS. Focused on smooth animations, intuitive interactions, and optimal performance for seamless user experiences.",
        img: pennib,
        style: { width: "50px", height: "55px", transform: "rotate(-45deg)" }
    },
    { 
        title: "BACKEND SYSTEMS & API's", 
        category: "Designing scalable APIs and robust backend services using Java.", 
        description: "Building robust, scalable server-side solutions with Java and Node.js. I design RESTful APIs, optimize databases, and implement secure authentication systems for production-grade applications.",
        img: compbrush,
        style: { width: "50px", height: "55px" }
    },
    { 
        title: "AI & INTELLIGENT SYSTEMS", 
        category: "Exploring AI, ML, and blockchain to build smarter systems.", 
        description: "Leveraging machine learning and AI to create intelligent solutions. From data analysis to predictive models, I develop systems that learn and adapt to solve real-world problems.",
        img: ineract,
        style: { width: "50px", height: "55px" }
    },
];