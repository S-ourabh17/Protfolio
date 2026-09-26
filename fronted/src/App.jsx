import { useEffect, useState } from "react";
import "./App.css";

const projects = [
    {
        title: "FinTech Banking Platform",
        category: "Backend",
        description:
            "A scalable banking backend with authentication, transactions, accounts and secure REST APIs.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
        github: "#",
        demo: "#",
    },
    {
        title: "E-Commerce Platform",
        category: "Full Stack",
        description:
            "Dynamic shopping platform with products, categories, cart, orders and payment workflow.",
        tech: ["React", "Spring Boot", "MySQL", "REST API"],
        github: "#",
        demo: "#",
    },
    {
        title: "Student Management System",
        category: "Full Stack",
        description:
            "Complete college management platform for students, teachers, classes, timetable and fees.",
        tech: ["React", "Java", "Spring Boot", "JPA"],
        github: "#",
        demo: "#",
    },
    {
        title: "Real-Time Chat Application",
        category: "Full Stack",
        description:
            "Real-time messaging application with private conversations and online presence.",
        tech: ["React", "Spring Boot", "WebSocket", "MongoDB"],
        github: "#",
        demo: "#",
    },
];

const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "React", level: 82 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 85 },
    { name: "DSA", level: 80 },
    { name: "System Design", level: 72 },
    { name: "Git & GitHub", level: 88 },
];

function App() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [typedText, setTypedText] = useState("");

    const roles = [
        "Java Backend Developer",
        "Full Stack Developer",
        "Spring Boot Developer",
        "Problem Solver",
    ];

    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timer = setTimeout(() => {
            if (charIndex < currentRole.length) {
                setTypedText(currentRole.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(() => {
                    setCharIndex(0);
                    setTypedText("");
                    setRoleIndex((roleIndex + 1) % roles.length);
                }, 1500);
            }
        }, charIndex === currentRole.length ? 100 : 80);

        return () => clearTimeout(timer);
    }, [charIndex, roleIndex]);

    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setMenuOpen(false);
    };

    return (
        <div className={darkMode ? "app dark" : "app light"}>
            {/* Background */}
            <div className="background">
                <div className="orb orb1"></div>
                <div className="orb orb2"></div>
                <div className="orb orb3"></div>
            </div>

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="logo">
                    S<span>.</span>
                </div>

                <div className={`navLinks ${menuOpen ? "show" : ""}`}>
                    <button onClick={() => scrollTo("home")}>Home</button>
                    <button onClick={() => scrollTo("about")}>About</button>
                    <button onClick={() => scrollTo("skills")}>Skills</button>
                    <button onClick={() => scrollTo("projects")}>Projects</button>
                    <button onClick={() => scrollTo("experience")}>Experience</button>
                    <button onClick={() => scrollTo("contact")}>Contact</button>
                </div>

                <div className="navActions">
                    <button
                        className="themeButton"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? "☀" : "☾"}
                    </button>

                    <button
                        className="menuButton"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <section id="home" className="hero section">
                <div className="heroContent reveal">
                    <div className="available">
                        <span></span>
                        Available for opportunities
                    </div>

                    <p className="hello">Hello, I'm</p>

                    <h1>
                        Sourabh
                        <span className="gradientText">.</span>
                    </h1>

                    <h2>
                        I'm a <span className="typing">{typedText}</span>
                        <span className="cursor">|</span>
                    </h2>

                    <p className="heroDescription">
                        I build scalable backend systems, beautiful interfaces and
                        production-ready applications that solve real-world problems.
                    </p>

                    <div className="heroButtons">
                        <button
                            className="primaryButton"
                            onClick={() => scrollTo("projects")}
                        >
                            View My Work →
                        </button>

                        <button
                            className="secondaryButton"
                            onClick={() => scrollTo("contact")}
                        >
                            Let's Talk
                        </button>
                    </div>

                    <div className="socials">
                        <a href="https://github.com/S-ourabh17" target="_blank">
                            GitHub
                        </a>
                        <a href= "https://www.linkedin.com/in/sourabh-7223a3362/" target="_blank">
                            LinkedIn
                        </a>
                        <a href="#" target="_blank">
                            Resume
                        </a>
                        <a href = "https://leetcode.com/u/Sharma_Srbh/" target="_blank">
                            LeetCode
                        </a>
                    </div>
                </div>

                {/* Developer card */}
                <div className="codeCard reveal">
                    <div className="windowHeader">
                        <div className="windowDots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>developer.java</p>
                    </div>

                    <pre>
            <code>
              <span className="purple">public class</span>{" "}
                <span className="yellow">Developer</span> {"{"}
                {"\n\n"}
                {"  "}String name ={" "}
                <span className="green">"Sourabh"</span>;
                {"\n"}
                {"  "}String role ={" "}
                <span className="green">"Backend Developer"</span>;
                {"\n"}
                {"  "}String passion ={" "}
                <span className="green">"Building"</span>;
                {"\n\n"}
                {"  "}
                <span className="purple">void</span> code() {"{"}
                {"\n"}
                {"    "}build();
                {"\n"}
                {"    "}learn();
                {"\n"}
                {"    "}repeat();
                {"\n"}
                {"  "}
                {"}"}
                {"\n"}
                {"}"}
            </code>
          </pre>

                    <div className="codeStatus">
                        <span>●</span> System.out.println("Hello World!");
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="stats">
                <div>
                    <strong>20+</strong>
                    <span>Projects Built</span>
                </div>

                <div>
                    <strong>250+</strong>
                    <span>DSA Problems</span>
                </div>

                <div>
                    <strong>10+</strong>
                    <span>Technologies</span>
                </div>

                <div>
                    <strong>∞</strong>
                    <span>Curiosity</span>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="section about">
                <div className="sectionHeading reveal">
                    <span>01 — ABOUT ME</span>
                    <h2>Building things that matter.</h2>
                </div>

                <div className="aboutGrid">
                    <div className="aboutText reveal">
                        <p>
                            I'm a software developer passionate about creating reliable,
                            scalable and elegant software.
                        </p>

                        <p>
                            My primary focus is backend development using Java and Spring
                            Boot, while I also enjoy building modern interfaces using React.
                        </p>

                        <p>
                            I love solving difficult problems, understanding how systems
                            work internally and continuously improving my engineering skills.
                        </p>

                        <div className="quote">
                            <span>"</span>
                            First make it work. Then make it right. Then make it fast.
                            <small>— Engineering mindset</small>
                        </div>
                    </div>

                    <div className="aboutCards reveal">
                        <div className="miniCard">
                            <span className="icon">⚙</span>
                            <h3>Backend</h3>
                            <p>APIs, microservices & scalable systems</p>
                        </div>

                        <div className="miniCard">
                            <span className="icon">⚛</span>
                            <h3>Frontend</h3>
                            <p>Modern responsive React applications</p>
                        </div>

                        <div className="miniCard">
                            <span className="icon">🧠</span>
                            <h3>Problem Solving</h3>
                            <p>DSA, algorithms & optimization</p>
                        </div>

                        <div className="miniCard">
                            <span className="icon">🚀</span>
                            <h3>Deployment</h3>
                            <p>Git, Docker, cloud & CI/CD</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="section">
                <div className="sectionHeading reveal">
                    <span>02 — SKILLS</span>
                    <h2>My technical toolkit.</h2>
                </div>

                <div className="skillsGrid reveal">
                    {skills.map((skill) => (
                        <div className="skill" key={skill.name}>
                            <div className="skillHeader">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>

                            <div className="skillBar">
                                <div
                                    className="skillProgress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="technologyCloud reveal">
                    {[
                        "Java",
                        "Spring Boot",
                        "React",
                        "JavaScript",
                        "PostgreSQL",
                        "MySQL",
                        "MongoDB",
                        "Docker",
                        "Git",
                        "GitHub",
                        "REST API",
                        "JPA",
                        "Hibernate",
                        "JWT",
                        "Redis",
                        "AWS",
                    ].map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="section projects">
                <div className="sectionHeading reveal">
                    <span>03 — PROJECTS</span>
                    <h2>Things I've built.</h2>
                </div>

                <div className="filters reveal">
                    {["All", "Backend", "Full Stack"].map((filter) => (
                        <button
                            className={activeFilter === filter ? "selected" : ""}
                            onClick={() => setActiveFilter(filter)}
                            key={filter}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projectGrid">
                    {filteredProjects.map((project, index) => (
                        <div className="projectCard reveal" key={project.title}>
                            <div className="projectNumber">
                                0{index + 1}
                            </div>

                            <div className="projectTop">
                <span className="projectCategory">
                  {project.category}
                </span>

                                <div>
                                    <a href={project.github}>↗</a>
                                </div>
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="techList">
                                {project.tech.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>

                            <a className="viewProject" href={project.demo}>
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="section">
                <div className="sectionHeading reveal">
                    <span>04 — EXPERIENCE</span>
                    <h2>My journey so far.</h2>
                </div>

                <div className="timeline">
                    <div className="timelineItem reveal">
                        <div className="timelineDot"></div>

                        <div className="timelineDate">2026 — PRESENT</div>

                        <div className="timelineContent">
                            <h3>Software Developer</h3>
                            <h4>Building scalable applications</h4>
                            <p>
                                Developing backend services, REST APIs and full-stack
                                applications using Java, Spring Boot and React.
                            </p>

                            <div className="tagContainer">
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>React</span>
                            </div>
                        </div>
                    </div>

                    <div className="timelineItem reveal">
                        <div className="timelineDot"></div>

                        <div className="timelineDate">2025 — 2026</div>

                        <div className="timelineContent">
                            <h3>Full Stack Developer</h3>
                            <h4>Personal & Academic Projects</h4>
                            <p>
                                Built multiple real-world applications while strengthening
                                knowledge of DSA, databases, backend architecture and system
                                design.
                            </p>

                            <div className="tagContainer">
                                <span>DSA</span>
                                <span>SQL</span>
                                <span>System Design</span>
                            </div>
                        </div>
                    </div>

                    <div className="timelineItem reveal">
                        <div className="timelineDot"></div>

                        <div className="timelineDate">2024 — 2025</div>

                        <div className="timelineContent">
                            <h3>Started Coding</h3>
                            <h4>Computer Science Journey</h4>
                            <p>
                                Started exploring programming, Java, data structures and
                                software development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GITHUB */}
            <section className="section githubSection">
                <div className="sectionHeading reveal">
                    <span>05 — ACTIVITY</span>
                    <h2>Always building. Always learning.</h2>
                </div>

                <div className="githubCard reveal">
                    <div className="githubHeader">
                        <div>
                            <span className="githubIcon">◉</span>
                            <h3>GitHub Activity</h3>
                        </div>

                        <span>2026</span>
                    </div>

                    <div className="contributionGrid">
                        {Array.from({ length: 140 }).map((_, index) => (
                            <span
                                key={index}
                                className={`contribution contribution-${index % 5}`}
                            ></span>
                        ))}
                    </div>

                    <div className="githubFooter">
                        <span>Less</span>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <span>More</span>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="section contact">
                <div className="contactBox reveal">
                    <span className="contactSmall">06 — CONTACT</span>

                    <h2>
                        Have an idea?
                        <br />
                        <span>Let's build it.</span>
                    </h2>

                    <p>
                        I'm always interested in hearing about new projects, ideas and
                        opportunities.
                    </p>

                    <a className="emailButton" href="mailto:srbh9920@gmail.com">
                        Start a conversation ↗
                    </a>

                    <div className="contactLinks">
                        <a href="https://github.com/S-ourabh17">GitHub</a>
                        <a href="https://www.linkedin.com/in/sourabh-7223a3362/">LinkedIn</a>
                        <a href="mailto:srbh9920@gmail.com">Email</a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="logo">
                    Sourabh<span>.</span>
                </div>

                <p>Designed & built with React.</p>

                <p>© 2026 Sourabh</p>
            </footer>
        </div>
    );
}

export default App;