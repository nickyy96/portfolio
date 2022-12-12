import styles from "../styles/SkillsUnit.module.css"

interface skillsUnit {
    name: string
    skills: string[]
}

const SkillsUnit = ({name, skills}: skillsUnit) => {
    return (
        <div className={styles.container}>
            {name.toLocaleUpperCase()}
            <div className={styles.skillGrid}>
                {
                    skills.map((skill: string, index: number) => 
                        <div className={styles.cell} key={index}>
                            {skill}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SkillsUnit