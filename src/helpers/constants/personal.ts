import {
    FaGithub,
    FaLinkedin,
    FaDiscord,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart,
    FaUserGraduate,
    FaBirthdayCake,
} from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import dayjs from "dayjs";

export const DAY_OF_BIRTH = "2001-03-31";

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

export const GENERAL_INFO: Array<{ value: string; icon: IconType }> = [
    {
        value: "Tay Ninh, Vietnam",
        icon: FaMapMarkerAlt,
    },
    {
        value: `${Math.floor(dayjs().diff(DAY_OF_BIRTH, "year"))} years old`,
        icon: FaBirthdayCake,
    },
    {
        value: "College Diploma in IT",
        icon: FaUserGraduate,
    },
    {
        value: "Coding, gaming and reading books",
        icon: FaHeart,
    },
];

export const ABOUT_ME: string = `
    <p>Hi! I'm Thang, also known as <strong>Akari</strong> — just another web developer trying to build cool things on the internet.</p>
    <p>I enjoy <strong>creating applications</strong> and <strong>hands-on projects</strong>, even if they're not always practical.</p>
    <p>When I'm not coding, you'll probably find me gaming, reading, or just hanging out with friends.</p>
    <p>I love exploring <strong>new technologies</strong> and picking up <strong>new skills</strong>. If you want to <strong>chat</strong> or <strong>collaborate</strong/> on something fun, <strong>don't hesitate to reach out!</strong></p>
`;
