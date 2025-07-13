import { SOCIALS } from "@helpers/constants";

export default function GetInTouch() {
    return (
        <div className="w-full flex flex-row gap-4 sm:gap-5 mt-8">
            {SOCIALS.map(social => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <social.icon className="w-6 h-6 text-blue-950 dark:text-white" />
                    <span className="text-blue-950 dark:text-white">{social.name}</span>
                </a>
            ))}
        </div>
    );
}
