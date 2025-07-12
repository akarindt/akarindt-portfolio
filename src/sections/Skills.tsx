import Pill from "@/components/Pill";
import { SKILLS } from "@/helpers/constants";
import { FaTools } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5">
            <div className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-4">
                <FaTools className="inline-block" />
                <span>Skills</span>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {SKILLS.map(skill => (
                    <Pill name={skill.name} color={skill.color} url={skill.url} key={uuidv4()} />
                ))}
            </div>
        </div>
    );
}
