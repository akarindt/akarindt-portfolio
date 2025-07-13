import { SOCIALS } from "@helpers/constants";

export default function GetInTouch() {
    return (
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIALS.map(social => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[auto_1fr] items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <social.icon className="w-6 h-6 text-blue-950 dark:text-white" />
                    <span className="text-blue-950 dark:text-white">{social.name}</span>
                </a>
            ))}
        </div>
    );
}
