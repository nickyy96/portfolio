import Link from 'next/link';

const projects = [
  {
    img: "/images/wordle.png",
    name: "Wordle",
    desc: "A modernized Wordle clone with some neat upgrades"
  }
]

interface WorkProps {
  handleClick: () => void
}

interface CardProps {
  num: number
  handleClick: () => void
}

const Card = ({num, handleClick}: CardProps) => {
  
  return (
      <div
        className="projectCard"
        id={num.toString()}
        onClick={handleClick}
      >
        <div className="h-full overflow-hidden flex">
          <img src={projects[num].img} className="max-w-full max-h-full"/>
        </div>
        <div className="projectCover">
          <p>{projects[num].name}</p>
          <p>{projects[num].desc}</p>
        </div>
      </div>
    );
}

const Work = ({handleClick}: WorkProps) => {
    return (
        <div className="flex justify-center w-screen relative pt-[11vh] flex-col items-center gap-12 pb-[11vh]" id="projects">
            <div className="moduleHeader">
                Projects
            </div>
            <div className="projectGrid">
              <Link href="/wordle">
                <Card num={0} handleClick={handleClick}></Card>
              </Link>
              {/* <Link href="/redesign">
                <Card num={1} handleClick={handleClick}></Card>
              </Link>
              <Link href="/development">
                <Card num={2} handleClick={handleClick}></Card>
              </Link>
              <Link href="/personas">
                <Card num={3} handleClick={handleClick}></Card>
              </Link> */}
            </div>
        </div>
    )
}

export default Work