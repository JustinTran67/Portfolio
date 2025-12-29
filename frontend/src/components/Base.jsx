// assets
import Portrait from "../assets/portrait.jpg";
import Github from "../assets/Github.jsx";
import LinkedIn from "../assets/LinkedIn.jsx";
import Instagram from "../assets/Instagram.jsx";
import Gmail from "../assets/Gmail.jsx";
// components
import Experience from "./Experience.jsx";
import Project from "./Project.jsx";

export default function Base() {
    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-left font-medium text-4xl font-heading">Justin Tran</h1>
                        <h2 className="text-left text-xl mt-2 text-gray-700 font-light">Fullstack developer.</h2>
                        <div className="absolute md:relative flex flex-row gap-2 md:gap-4 mt-28 md:mt-0 text-sm md:text-lg fill-gray-400 text-gray-400 font-light">
                            <a className="flex flex-row gap-2  hover:fill-gray-700 hover:text-gray-700 transition duration-200 ease-in-out" href="https://www.linkedin.com/in/justin-tran-902938355/" target="_blank"><LinkedIn className="w-4"></LinkedIn>LinkedIn</a>
                            <p>/</p>
                            <a className="flex flex-row gap-2  hover:fill-gray-700 hover:text-gray-700 transition duration-200 ease-in-out" href="https://github.com/JustinTran67" target="_blank"><Github className="w-4"></Github>GitHub</a>
                            <p>/</p>
                            <a className="flex flex-row gap-2  hover:fill-gray-700 hover:text-gray-700 transition duration-200 ease-in-out" href="https://www.instagram.com/justin.t.tran/" target="_blank"><Instagram className="w-4"></Instagram>Instagram</a>
                            <p>/</p>
                            <a className="flex flex-row gap-2  hover:fill-gray-700 hover:text-gray-700 transition duration-200 ease-in-out" href="mailto:justinttran06@gmail.com" target="_blank"><Gmail className="w-4"></Gmail>Email</a>
                        </div>
                    </div>
                    <div className="relative shrink-0 w-[90px] md:w-[130px] h-[90px] md:h-[130px]">
                        <div className="absolute inset-0 overflow-hidden rounded-full shadow-xl">
                            <img className="w-full h-full object-cover" src={Portrait} alt="Justin Tran's portrait" />
                        </div>
                    </div>
                </div>
                <div className="h-24 md:h-12"></div>
                <div className="opacity-0 animate-fade-in [animation-delay:0.5s]">
                    <Experience />
                </div>
                <div className="h-12"></div>
                <div className="opacity-0 animate-fade-in [animation-delay:0.5s]">
                    <Project />
                </div>
                <div className="h-24"></div>
                <div className="text-center">
                    <a href="https://github.com/JustinTran67/justin-tran-portfolio" target="_blank" className="text-xs text-gray-400 font-light">Version 2.1 / December 2025</a>
                </div>
            </div>
        </div>
    )
}