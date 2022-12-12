import styles from "../styles/Skills.module.css"
import SkillsUnit from "./skillsUnit"

interface SkillsProps {

}

const lang = {
    name: "languages",
    skills: ['Java', 'Python', 'HTML', 'C', 'Javascript', 'Pyret', 'Racket', 'CSS', 'Typescript', 'SQL']
}

const frontend = {
    name: "frontend",
    skills: ['ReactJS', 'AngularJS', 'SASS', 'Material UI', 'Tailwind CSS', 'JQuery', 'Next.js', 'Netlify', 'Vercel', 'Three.JS']
}

const backend = {
    name: "backend",
    skills: ['Express', 'REST', 'Node.js', 'MongoDB']
}

const tools = {
    name: "tools",
    skills: ['Git', 'Selenium', 'Firebase', 'Windows', 'Github']
}

const Skills = ({}: SkillsProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Skills
            </div>
            <div className={styles.unitContainer}>
                <SkillsUnit name={lang.name} skills={lang.skills}/>
                <SkillsUnit name={frontend.name} skills={frontend.skills}/>
                <SkillsUnit name={backend.name} skills={backend.skills}/>
                <SkillsUnit name={tools.name} skills={tools.skills}/>
            </div>
        </div>
    )
}

export default Skills