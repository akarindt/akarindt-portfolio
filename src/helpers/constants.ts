import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

export const GITHUB_AVT_URL: string = "https://avatars.githubusercontent.com/u/78296824?v=4";

export const SOCIALS: Array<{ name: string; url: string; icon: IconType }> = [
  {
    name: "GitHub",
    url: "https://github.com/akarindt",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thangnd3103/",
    icon: FaLinkedin,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/823036192467058699",
    icon: FaDiscord,
  },
  {
    name: "Chat with me",
    url: "mailto:thang.nd3103@gmail.com?subject=Hi Thang, I'd like to hire you",
    icon: FaEnvelope,
  },
];

export const SKILLS: Map<string, Array<{ name: string; color: string; url: string }>> = new Map([
  [
    "Languages",
    [
      {
        name: "JavaScript",
        color: "#F7DF1E",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        color: "#3178C6",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "CSharp",
        color: "#239120",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
    ],
  ],
  [
    "Frameworks",
    [
      {
        name: "React",
        color: "#61DAFB",
        url: "https://reactjs.org/",
      },
      {
        name: "Node.js",
        color: "#339933",
        url: "https://nodejs.org/",
      },
      {
        name: "ExpressJS",
        color: "#000000",
        url: "https://expressjs.com/",
      },
      {
        name: "ASP.NET Core",
        color: "#512BD4",
        url: "https://learn.microsoft.com/en-us/aspnet/core",
      },
      {
        name: "Windows Forms",
        color: "#FF8C00",
        url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/",
      },
    ],
  ],
  [
    "Databases",
    [
      {
        name: "MongoDB",
        color: "#47A248",
        url: "https://www.mongodb.com/",
      },
      {
        name: "MySQL",
        color: "#4479A1",
        url: "https://www.mysql.com/",
      },
      {
        name: "PostgreSQL",
        color: "#336791",
        url: "https://www.postgresql.org/",
      },
    ],
  ],
  [
    "Tools",
    [
      {
        name: "Docker",
        color: "#2496ED",
        url: "https://www.docker.com/",
      },
      {
        name: "Kubernetes",
        color: "#326CE5",
        url: "https://kubernetes.io/",
      },
      {
        name: "Git",
        color: "#F05032",
        url: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        color: "#181717",
        url: "https://github.com/",
      },
      {
        name: "Visual Studio Code",
        color: "#007ACC",
        url: "https://code.visualstudio.com/",
      },
      {
        name: "Visual Studio",
        color: "#5C2D91",
        url: "https://visualstudio.microsoft.com/",
      },
      {
        name: "Postman",
        color: "#FF6C37",
        url: "https://www.postman.com/",
      },
    ],
  ],
  [
    "Operating Systems",
    [
      {
        name: "Windows",
        color: "#0078D6",
        url: "https://www.microsoft.com/en-us/windows",
      },
      {
        name: "Linux",
        color: "#FCC624",
        url: "https://www.linux.org/",
      },
    ],
  ],
]);

export const GITHUB_REPOS: Array<{ name: string; url: string; description: string }> = [
  {
    name: "KafkaBOT",
    url: "https://github.com/akarindt/KafkaBOT",
    description: "A multi-purpose Discord bot that I made for fun",
  },
  {
    name: "linkedin-auto-connect",
    url: "https://github.com/akarindt/linkedin-auto-connect",
    description: "A simple cli tool to automate sending connection requests & connect peoples on LinkedIn",
  },
];
