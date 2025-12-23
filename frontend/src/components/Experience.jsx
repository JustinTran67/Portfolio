// assets
import ucsc from "../assets/ucsc.png";
import bgclub from "../assets/boysandgirlsclub.png";

export default function Experience() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between text-lg text-gray-400 font-light">
                <h1>BACKGROUND</h1>
                <h1>TYPE</h1>
            </div>
            <div className="flex flex-col gap-2">
                <Row image={ucsc} institution="UC Santa Cruz" styles="w-6 h-6" role="Student" title="Computer Science (B.S.)" date="2024-Present" />
                <Row image={bgclub} institution="Boys and Girls Club" styles="w-6 h-4" role="Intern" title="Volunteer" date="2023-2023" />
            </div>
        </div>
    )
}

function Row({ image, styles, institution, role, title, date }) {
    return (
        <div className="flex flex-col gap-1 group font-light">
            <div className="flex flex-row justify-between text-xl text-gray-700">
                <div className="flex flex-row gap-2 items-center">
                    <img className={styles} src={image} alt="row-image"></img>
                    <p>{institution}</p>
                </div>
                <p>{role}</p>
            </div>
            <div className="flex flex-row justify-between text-sm text-gray-400 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p>{title}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}