import { EDUCATION_INFO } from "@helpers/constants/education";
import Progression from "@components/Progression";
import { v4 as uuidv4 } from "uuid";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5">
            <div className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-4">
                <FaUserGraduate className="inline-block" />
                <span>Education</span>
            </div>
            <div>
                {EDUCATION_INFO.map(education => (
                    <Progression key={uuidv4()} type="education" data={education} />
                ))}
            </div>
        </div>
    );
}
