//Assets
import resume from "../assets/justin_tran_resume.pdf";

export default function Resume() {

    return(
        <div className="">
            <iframe className="w-full h-screen" src={resume} title="Resume"></iframe>
        </div>
    )
}