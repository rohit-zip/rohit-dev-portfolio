import {TracingBeam} from "@/components/aceternity/TracingBeam";
import WordPullUp from "@/components/aceternity/WordPullUp";
import {backendSkillsData, courseworkData, frontendSkillsData, otherData} from "@/constants/skillsData";
import BorderedButton from "@/components/custom/BorderedButton";

export default function SkillsSection() {
    return (
        <TracingBeam className="px-0 md:px-6 mb-20">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {skillsContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-16">
                        <WordPullUp
                            className="font-bold tracking-[-0.02em] text-black dark:text-white text-xl md:text-5xl md:leading-[5rem] text-left"
                            words={item.title}
                        />

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const skillsContent = [
    {
        title: "Backend Skills",
        description: (
            <>
                <p>
                    I have extensive experience in developing scalable and robust backend applications. My technical
                    expertise includes using Java and Spring Boot to create reliable and efficient services. I am
                    proficient in implementing event-driven architecture with Kafka and managing relational databases
                    such as PostgreSQL and MySQL. Additionally, I have significant experience working with NoSQL
                    databases like MongoDB and Elasticsearch, ensuring optimal data storage and retrieval for
                    high-performance applications.
                </p>
                <div className={"flex gap-2 flex-wrap mt-4"}>
                    {backendSkillsData.map((item, index) => (
                        <BorderedButton data={item} key={index}/>
                    ))}
                </div>
            </>
        )
    },
    {
        title: "Frontend Skills",
        description: (
            <>
                <p>
                    I possess extensive experience in frontend development, with a strong proficiency in React JS and
                    Next JS for creating dynamic and responsive web applications. My expertise includes state management
                    using Redux, efficient data fetching with Axios and React Query, and rich text editing with Quill.
                    Additionally, I have a solid background in developing cross-platform mobile applications using
                    Flutter.
                </p>
                <div className={"flex gap-2 flex-wrap mt-4"}>
                    {frontendSkillsData.map((item, index) => (
                        <BorderedButton data={item} border={"emerald"} key={index}/>
                    ))}
                </div>
            </>
        )
    },
    {
        title: "Devops and Other Tools",
        description: (
            <>
                <p>
                    I have hands-on experience with a diverse set of technologies crucial for modern software
                    development and infrastructure management. This includes Azure and AWS for cloud computing, CI/CD
                    pipelines for automated deployment, Docker and Docker Compose for containerization, and basic
                    knowledge of Kubernetes for container orchestration. I'm proficient in VPS Hosting setup, Automated
                    Build processes, and configuring Nginx for web server management. Additionally, I have experience
                    with DNS configuration, monitoring and analytics tools like Prometheus, Grafana, Kibana, Logstash,
                    and Metric Beats, as well as process managers like PM2. I have used Github Actions and Jenkins for
                    continuous integration and continuous deployment (CI/CD) workflows.
                </p>

                <div className={"flex gap-2 flex-wrap mt-4"}>
                    {otherData.map((item, index) => (
                        <BorderedButton data={item} border={"emerald"} key={index}/>
                    ))}
                </div>
            </>
        )
    },
    {
        title: "Coursework",
        description: (
            <>
                <p>
                    In my coursework, I've focused on key areas of computer science and software development:
                    Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems (OS),
                    System Design, Web Development, Mobile Application Development, and Data Structures and Algorithms.
                    These studies have equipped me with essential skills in software design, database management, system
                    scalability, web and mobile application development, and efficient algorithm design.
                </p>

                <div className={"flex gap-2 flex-wrap mt-4"}>
                    {courseworkData.map((item, index) => (
                        <BorderedButton data={item} key={index}/>
                    ))}
                </div>
            </>
        )
    }
];