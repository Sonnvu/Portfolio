import TechCard from '../../utils/animation/card/TechCard'
import SkillTag from '../../utils/animation/card/SkillTag'
export default function TechSection() {
    return (
        <div className="bg-slate-50 relative flex justify-center px-52">
            <TechCard title="Software Development">
                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Frontend
                    </div>
                    <div className="pb-5">
                        <SkillTag linkTo="/Project#portfolio">JavaScript</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">TypeScript</SkillTag>
                        <SkillTag linkTo="/Project#portfolio">HTML</SkillTag>
                        <SkillTag linkTo="/Project#portfolio">CSS</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">React.js</SkillTag>
                        <SkillTag linkTo="/Project#portfolio">Angular.js</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">MUI</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Tailwind</SkillTag>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Backend
                    </div>
                    <div className="pb-5">
                        <SkillTag linkTo="/Project#jobscope">Java</SkillTag>
                        <SkillTag linkTo="/Project#simulation">Python</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Spring Boot</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Spring Security</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">JUnit</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Mockito</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Gradle</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Maven</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">SLF4J</SkillTag>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Database
                    </div>
                    <div className="pb-5">
                        <SkillTag linkTo="/Project#jobscope">PostgreSQL</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">MongoDB</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">h2</SkillTag>
                        <SkillTag linkTo="/Project#timular">AWS S3</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">AWS RDS</SkillTag>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Tools & Services
                    </div>
                    <div>
                        <SkillTag linkTo="/Portfolio#philips">GitHub</SkillTag>
                        <SkillTag linkTo="/Portfolio#philips">Docker</SkillTag>
                        <SkillTag linkTo="/Portfolio#philips">Elasticsearch</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">Nginx</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">AWS EC2</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">AWS 53</SkillTag>
                        <SkillTag linkTo="/Project#jobscope">ProxyCurl</SkillTag>
                    </div>
                </div>


            </TechCard>
            <TechCard title="Embedded Development">
                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Skill
                    </div>
                    <div className="pb-5">
                        <SkillTag linkTo="/Portfolio#shrec">C/C++</SkillTag>
                        <SkillTag>Assembly</SkillTag>
                        <SkillTag linkTo="/Project#physicsSim">Python</SkillTag>
                        <SkillTag linkTo="/Project#cpu">VHDL</SkillTag>
                        <SkillTag>MATLAB</SkillTag>
                        <SkillTag linkTo="/Project#gameConsole">Soldering</SkillTag>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Hardware
                    </div>
                    <div className="pb-5">
                        <SkillTag>Terasic DE10-Lite</SkillTag>
                        <SkillTag>STM32 Nuclo-L476RG</SkillTag>
                        <SkillTag linkTo="/Project#timular">ESP-WROOM-32</SkillTag>
                        <SkillTag>Arduino Uno</SkillTag>
                        <SkillTag linkTo="/Project#timular">MPU-6050 Accelerometer</SkillTag>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-500 font-poppin pl-2 py-2">
                        Software & Service
                    </div>
                    <div className="pb-5">
                        <SkillTag>MATLAB</SkillTag>
                        <SkillTag linkTo="/Project#gameConsole">Altium</SkillTag>
                        <SkillTag linkTo="/Project#cpu">Xilinx Vivado</SkillTag>
                        <SkillTag linkTo="/Project#cpu">Xilinx Vitis</SkillTag>
                        <SkillTag linkTo="/Project#cpu">LtSpice</SkillTag>
                        <SkillTag linkTo="/Project#timular">AWS S3</SkillTag>
                        <SkillTag linkTo="/Project#timular">AWS Lambda</SkillTag>
                        <SkillTag linkTo="/Project#timular">AWS API Gateway</SkillTag>
                    </div>
                </div>
            </TechCard>
        </div>
    )
}
