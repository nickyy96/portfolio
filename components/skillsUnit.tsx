interface skillsUnit {
    name: string
    skills: string[]
}

const SkillsUnit = ({name, skills}: skillsUnit) => {
    return (
        <div className="flex flex-col mr-[15%] ml-[15%] text-[2rem] gap-4">
            {name.toLocaleUpperCase()}
            <div className="flex flex-row flex-wrap gap-4">
                {
                    skills.map((skill: string, index: number) => 
                        <div className="cell" key={index}>
                            {skill}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SkillsUnit