import React from 'react'
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
                    <SkillTag>JavaScript</SkillTag>
                    <SkillTag>TypeScript</SkillTag>
                    <SkillTag>HTML</SkillTag>
                    <SkillTag>CSS</SkillTag>
                    <SkillTag>React.js</SkillTag>
                    <SkillTag>Angular.js</SkillTag>
                    <SkillTag>MUI</SkillTag>
                    <SkillTag>Tailwind</SkillTag>
                </div>
            </div>
            
            <div className="flex flex-col">
                <div className="text-gray-500 font-poppin pl-2 py-2">
                    Backend
                </div>
                <div className="pb-5">
                    <SkillTag>Java</SkillTag>
                    <SkillTag>Python</SkillTag>
                    <SkillTag>Spring Boot</SkillTag>
                    <SkillTag>Spring Security</SkillTag>
                    <SkillTag>JUnit</SkillTag>
                    <SkillTag>Mockito</SkillTag>
                    <SkillTag>Gradle</SkillTag>
                    <SkillTag>Maven</SkillTag>
                    <SkillTag>SLF4J</SkillTag>
                </div>
            </div>
            
            <div className="flex flex-col">
                <div className="text-gray-500 font-poppin pl-2 py-2">
                    Database
                </div>
                <div className="pb-5">
                    <SkillTag>PostgreSQL</SkillTag>
                    <SkillTag>MongoDB</SkillTag>
                    <SkillTag>h2</SkillTag>
                    <SkillTag>AWS S3</SkillTag>
                    <SkillTag>AWS RDS</SkillTag>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-gray-500 font-poppin pl-2 py-2">
                    Tools & Services
                </div>
                <div>
                    <SkillTag>GitHub</SkillTag>
                    <SkillTag>Docker</SkillTag>
                    <SkillTag>Elasticsearch</SkillTag>
                    <SkillTag>Nginx</SkillTag>
                    <SkillTag>AWS EC2</SkillTag>
                    <SkillTag>AWS 53</SkillTag>
                    <SkillTag>ProxyCurl</SkillTag>
                </div>
            </div>
            
            
        </TechCard>
        <TechCard title="Embedded Development">
            <div className="flex flex-col">
                <div className="text-gray-500 font-poppin pl-2 py-2">
                    Skill
                </div>
                <div className="pb-5">
                    <SkillTag>C/C++</SkillTag>
                    <SkillTag>Assembly</SkillTag>
                    <SkillTag>Python</SkillTag>
                    <SkillTag>VHDL</SkillTag>
                    <SkillTag>MATLAB</SkillTag>
                    <SkillTag>Soldering</SkillTag>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-gray-500 font-poppin pl-2 py-2">
                    Hardware
                </div>
                <div className="pb-5">
                    <SkillTag>Terasic DE10-Lite</SkillTag>
                    <SkillTag>STM32 Nuclo-L476RG</SkillTag>
                    <SkillTag>ESP-WROOM-32</SkillTag>
                    <SkillTag>Arduino Uno</SkillTag>
                    <SkillTag>MPU-6050 Accelerometer</SkillTag>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-gray-500 font-poppin pl-2 py-2">
                    Software & Service
                </div>
                <div className="pb-5">
                    <SkillTag>MATLAB</SkillTag>
                    <SkillTag>Altium</SkillTag>
                    <SkillTag>Xilinx Vivado</SkillTag>
                    <SkillTag>Xilinx Vitis</SkillTag>
                    <SkillTag>LtSpice</SkillTag>
                    <SkillTag>AWS S3</SkillTag>
                    <SkillTag>AWS Lambda</SkillTag>
                    <SkillTag>AWS API Gateway</SkillTag>
                </div>
            </div>
        </TechCard>
    </div>
  )
}
