import { ABOUT_ME } from "@/helpers/constants";
import parse from "html-react-parser";
import { FaUser } from "react-icons/fa";

export default function AboutMe() {    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5">
            <div className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-4">
                <FaUser className="inline-block" />
                <span>About me</span>
            </div>
            <article className="text-justify text-sm sm:text-base">{parse(ABOUT_ME)}</article>
        </div>
    );
}
