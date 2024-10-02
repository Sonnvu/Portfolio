import ProjectCard from "../../utils/animation/card/ProjectCard";
import jobscope from "./jobscope.png"
import gameConsole from "./game.jpg"
import timular from "./timular.png"
import physicsSim from "./ProjectileMotion.png"
import cpu from "./cpu.png"
import portfolio from "./portfolio.png"
import gms from "./gms.png"
import SkillTag from "../../utils/animation/card/SkillTag";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function ShowcaseSection() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'})
            }
        }
    }, [location])

    return (
        <div className="relative flex lg:flex-row md:flex-wrap sm:flex-col justify-center bg-slate-50">
            <ProjectCard
                id="jobscope"
                bgColor="bg-blue-50"
                ProjectTitle="JobScope"
                ProjectDescription="Platform that helps student gain insights into the job market 
                                    to trajectorize career paths and maximize employability"
                imgUrl={jobscope}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>Java</SkillTag>
                    <SkillTag>Spring Boot</SkillTag>
                    <SkillTag>Spring Security</SkillTag>
                    <SkillTag>JavaScript</SkillTag>
                    <SkillTag>React.js</SkillTag>
                    <SkillTag>MUI</SkillTag>
                    <SkillTag>Tailwind</SkillTag>
                    <SkillTag>GitHub</SkillTag>
                    <SkillTag>AWS EC2</SkillTag>
                    <SkillTag>Nginx</SkillTag>
                    <SkillTag>PostgreSQL</SkillTag>
                    <SkillTag>Git</SkillTag>
                </div>
            </ProjectCard>
            <ProjectCard
                id="timular"
                bgColor="bg-amber-50"
                ProjectTitle="DIY Timular"
                ProjectDescription="A productivity device that track time for each task depending
                                    on which face is up. Kind of like the Timular block, but cheaper 
                                    and no subscription tier list"
                imgUrl={timular}
                github={"https://github.com/Sonnvu/Time_Block"}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>C++</SkillTag>
                    <SkillTag>ESP-WROOM-32</SkillTag>
                    <SkillTag>MPU-6050</SkillTag>
                    <SkillTag>Altium</SkillTag>
                    <SkillTag>JavaScripts</SkillTag>
                    <SkillTag>React.js</SkillTag>
                    <SkillTag>AWS IoT Core</SkillTag>
                    <SkillTag>AWS API Gateway</SkillTag>
                    <SkillTag>AWS S3 Bucket</SkillTag>
                    <SkillTag>Git</SkillTag>
                    
                </div>
            </ProjectCard>

            <ProjectCard
                id="timular"
                bgColor="bg-green-50"
                ProjectTitle="BPMI Sponsored: GMS"
                ProjectDescription="A productivity device that track time for each task depending
                                    on which face is up. Kind of like the Timular block, but cheaper 
                                    and no subscription tier list"
                imgUrl={gms}
                github={"https://sonnvu.github.io/gms-ui-v1/"}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>Java</SkillTag>
                    <SkillTag>Spring Boot</SkillTag>
                    <SkillTag>JavaScripts</SkillTag>
                    <SkillTag>React.js</SkillTag>
                    <SkillTag>Altium</SkillTag>
                    <SkillTag>ESP32</SkillTag>
                    <SkillTag>Arduino</SkillTag>
                    <SkillTag>Git</SkillTag>
                    <SkillTag>GitHub</SkillTag>
                </div>
            </ProjectCard>

            <ProjectCard
                id="portfolio"
                bgColor="bg-purple-50"
                ProjectTitle="Digital Portfolio"
                ProjectDescription="A productivity device that track time for each task depending
                                    on which face is up. Kind of like the Timular block, but cheaper 
                                    and no subscription tier list"
                imgUrl={portfolio}
                github={"https://github.com/Sonnvu/Time_Block"}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>JavaScript</SkillTag>
                    <SkillTag>React.js</SkillTag>
                    <SkillTag>Tailwind</SkillTag>
                    <SkillTag>Git</SkillTag>
                    <SkillTag>GitHub Action</SkillTag>
                    
                </div>
            </ProjectCard>
            <ProjectCard
                id="gameConsole"
                bgColor="bg-red-50"
                ProjectTitle="Simple Game Console"
                ProjectDescription="Simple Game Console with just one programmed soccer game with
                                    our main character: our lovely ECE Head Department Professor"
                imgUrl={gameConsole}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>C++</SkillTag>
                    <SkillTag>Altium</SkillTag>
                    <SkillTag>Soldering</SkillTag>
                    <SkillTag>Git</SkillTag>
                    
                </div>
            </ProjectCard>
            <ProjectCard
                id="cpu"
                bgColor="bg-green-50"
                ProjectTitle="32-bits MIPS CPU"
                ProjectDescription="A 32-bit multi-cycled CPU based on MIPS32 instruction set architecture connected from 
                                    individually desinged IP block which includes ALU, ALU Control, Register File, Sign-extends,
                                    Multiplier, Control unit and many registers "
                imgUrl={cpu}
                github={"https://github.com/Sonnvu/Time_Block"}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>C/C++</SkillTag>
                    <SkillTag>VHDL</SkillTag>
                    <SkillTag>Xilinx Vivado</SkillTag>
                    <SkillTag>Git</SkillTag>
                    
                </div>
            </ProjectCard>
            <ProjectCard
                id="physicsSim"
                bgColor="bg-red-50"
                ProjectTitle="Computational Physics Simulation"
                ProjectDescription="Jupyter Notebook collection contains many physics models and simulation
                                    that visualize physical behavior and theories"
                imgUrl={physicsSim}
                github={"https://github.com/Sonnvu/Vpython_Simulation"}
            >
                <div className="pt-1 pb-3 -ml-2">
                    <SkillTag>Python</SkillTag>
                    <SkillTag>Vpython</SkillTag>
                    <SkillTag>Jupyter Notebook</SkillTag>
                    <SkillTag>Anaconda</SkillTag>
                    <SkillTag>Git</SkillTag>         
                </div>
            </ProjectCard>
        </div>
    )
}