import { WORK_EXPERIENCE } from "../helpers/constants/experience";
import Progression from "../components/Progression";
import { v4 as uuidv4 } from "uuid";
import { FaRocket } from "react-icons/fa";

export default function WorkingExperience() {    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5">
            <div className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-4">
                <FaRocket className="inline-block" />
                <span>Working Experience</span>
            </div>
            <div>
                {WORK_EXPERIENCE.map(experience => (
                    <Progression key={uuidv4()} type="experience" data={experience} />
                ))}
            </div>
        </div>
    );
}
