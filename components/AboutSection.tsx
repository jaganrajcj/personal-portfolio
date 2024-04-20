import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML", bg: "bg-sky-500/50", color: "text-white" },
  { skill: "CSS", bg: "bg-emerald-500/50", color: "text-white" },
  { skill: "JavaScript", bg: "bg-amber-500/50", color: "text-white-500" },
  { skill: "TypeScript", bg: "bg-blue-500/50", color: "text-white-500" },
  { skill: "React", bg: "bg-violet-500/50", color: "text-white-500" },
  { skill: "Next.js", bg: "bg-cyan-500/50", color: "text-white-500" },
  { skill: "Python", bg: "bg-purple-500/50", color: "text-white-500" },
  { skill: "Node JS", bg: "bg-indigo-500/50", color: "text-white-500" },
  { skill: "TRPC", bg: "bg-pink-500/50", color: "text-white-500" },
  { skill: "MongoDB", bg: "bg-fuchsia-500/50", color: "text-white-500" },
  { skill: "Prisma", bg: "bg-red-500/50", color: "text-white-500" },
  { skill: "Next Auth", bg: "bg-orange-500/50", color: "text-white-500" },
  { skill: "Shadcn UI", bg: "bg-zinc-900", color: "text-white" },
  { skill: "Tailwind CSS", bg: "bg-yellow-500/50", color: "text-white-500" },
  { skill: "Rest API", bg: "bg-green-500/50", color: "text-white-500" },
  { skill: "GraphQL", bg: "bg-teal-500/50", color: "text-white-500" },
  { skill: "Git", bg: "bg-cyan-600/50", color: "text-white-500" },
  { skill: "GitHub", bg: "bg-gray-800/50", color: "text-white-500" },
  { skill: "Docker", bg: "bg-gray-600/50", color: "text-white-500" },
  { skill: "Express JS", bg: "bg-gray-700/50", color: "text-white-500" },
  { skill: "MySQL", bg: "bg-gray-800/50", color: "text-white-500" },
  { skill: "Firebase", bg: "bg-yellow-500/50", color: "text-white-500" },
];


const tools = [
  { name: "Burp Suite", bg: 'bg-orange-500/50', color: 'text-white-500' },
  { name: "OWASP ZAP", bg: 'bg-cyan-700/50', color: 'text-white-500' },
  { name: "Nmap", bg: 'bg-gray-800/50', color: 'text-white-500' },
  { name: "Wireshark", bg: 'bg-purple-500/50', color: 'text-white-500' },
  { name: "Metasploit Framework", bg: 'bg-red-500/50', color: 'text-white-500' },
  { name: "SQLMap", bg: 'bg-green-500/50', color: 'text-white-500' },
  { name: "Aircrack-ng", bg: 'bg-blue-600/50', color: 'text-white-500' },
  { name: "Nikto", bg: 'bg-gray-700/50', color: 'text-white-500' },
  { name: "Hydra", bg: 'bg-emerald-600/50', color: 'text-white-500' },
];
const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jagan Raj C J and I am a{" "}
              <span className="font-bold">{"Web Developer"}</span> and
              <span className="font-bold">{" Web Pentester"}</span> based in
              Kerala, India.
            </p>
            <br />
            <p>
              Currently I&apos;m pursuing my master&apos;s in computer applications at
              Amal Jyothi College of Engineering, I&apos;m deeply engrossed in the
              world of technology and cybersecurity.
            </p>
            <br />
            <p>
              Beyond that, I immerse myself in the world of cybersecurity and
              financial markets. Cybersecurity has always captivated me; it was
              my gateway into the world of Information Technology, and now, with
              over four years of experience in trading financial markets, I&apos;m
              equally immersed in the dynamic worlds of technology and finance.
            </p>
            <br />
            <p>
              I believe in constant evolution and thrive on pushing boundaries
              in the digital realm. Eagerly embracing new challenges and
              opportunities, I&apos;m charting a course to redefine possibilities in
              technology, one line of code at a time.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-4">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className={`${item.bg} px-4 py-2 mr-2 mt-2 ${item.color} rounded font-semibold`}
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <span className="text-lg font-bold">Penetration Testing Tools</span>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {tools.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className={`${item.bg} px-4 py-2 mr-2 mt-2 ${item.color} rounded font-semibold`}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
