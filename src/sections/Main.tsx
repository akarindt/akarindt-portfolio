import { GITHUB_AVT_URL, GENERAL_INFO } from "@helpers/constants";
import { v4 as uuidv4 } from "uuid";
import { FaRegComment, FaDownload } from "react-icons/fa";

export default function Main() {    return (
        <div className="w-full min-h-[90vh] sm:h-screen flex flex-col items-center justify-center gap-4 sm:gap-5 py-8">
            <img
                alt="github-avatar"
                src={GITHUB_AVT_URL}
                className="max-w-[280px] sm:max-w-[320px] md:max-w-[360px] w-full h-auto rounded-[50%]"
            />
            <div className="text-center flex flex-col items-center gap-1 sm:gap-2">
                <h1 className="text-xl sm:text-2xl">Hi, I'm Nong Duc Thang</h1>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">Web Developer</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
                {GENERAL_INFO.map(info => (
                    <div key={uuidv4()} className="flex items-center gap-2 mx-2 sm:mx-3 my-1 text-base sm:text-lg">
                        <info.icon />
                        <span>{info.value}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-2 sm:gap-3">
                <a
                    className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-3 rounded-[5px] flex flex-row items-center gap-2"
                    href="mailto:thang.nd3103@gmail.com?subject=Hi Thang, I'd like to hire you"
                >
                    Hire me! <FaRegComment className="inline-block" />
                </a>
                <a
                    download={true}
                    className="bg-zinc-100 hover:bg-zinc-200 text-black px-4 py-3 rounded-[5px] flex flex-row items-center gap-2"
                    href=""
                >
                    Download CV <FaDownload className="inline-block" />
                </a>
            </div>
        </div>
    );
}
