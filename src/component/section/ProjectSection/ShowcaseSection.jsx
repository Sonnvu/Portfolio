import ProjectCard from "../../utils/animation/card/ProjectCard";
import jobscope from "./jobscope.png"
import gameConsole from "./game.jpg"
import timular from "./timular.png"
import physicsSim from "./ProjectileMotion.png"
import cpu from "./cpu.png"
import portfolio from "./portfolio.png"

export default function ShowcaseSection() {
    return (
        <div className="px-10 relative flex lg:flex-row md:flex-wrap sm:flex-col justify-center bg-slate-50">
            <ProjectCard 
                bgColor="bg-blue-50"
                ProjectTitle="JobScope"
                ProjectDescription="Platform that helps student gain insights into the job market 
                                    to trajectorize career paths and maximize employability"
                imgUrl={jobscope}
            />
            <ProjectCard
                bgColor="bg-amber-50"
                ProjectTitle="DIY Timular"
                ProjectDescription="A productivity device that track time for each task depending
                                    on which face is up. Kind of like the Timular block, but cheaper 
                                    and no subscription tier list"
                imgUrl={timular}
                github={"https://github.com/Sonnvu/Time_Block"}
            />
            <ProjectCard
                bgColor="bg-purple-50"
                ProjectTitle="Digital Portfolio"
                ProjectDescription="A productivity device that track time for each task depending
                                    on which face is up. Kind of like the Timular block, but cheaper 
                                    and no subscription tier list"
                imgUrl={portfolio}
                github={"https://github.com/Sonnvu/Time_Block"}
            />
            <ProjectCard
                bgColor="bg-red-50"
                ProjectTitle="Simple Game Console"
                ProjectDescription="Simple Game Console with just one programmed soccer game with
                                    our main character: our lovely ECE Head Department Professor"
                imgUrl={gameConsole}
            />
            <ProjectCard
                bgColor="bg-green-50"
                ProjectTitle="32-bits MIPS CPU"
                ProjectDescription="A 32-bit multi-cycled CPU based on MIPS32 instruction set architecture connected from 
                                    individually desinged IP block which includes ALU, ALU Control, Register File, Sign-extends,
                                    Multiplier, Control unit and many registers "
                imgUrl={cpu}
                github={"https://github.com/Sonnvu/Time_Block"}
            />
            <ProjectCard
                bgColor="bg-red-50"
                ProjectTitle="Computational Physics Simulation"
                ProjectDescription="Jupyter Notebook collection contains many physics models and simulation
                                    that visualize physical behavior and theories"
                imgUrl={physicsSim}
                github={"https://github.com/Sonnvu/Vpython_Simulation"}
            />
        </div>
    )
}