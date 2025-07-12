import parse from 'html-react-parser';

type ProgressionExperienceProps = {
    duration: string;
    position: string;
    company: string;
    companyWebsite: string;
    description: string;
};

type ProgressionEducationProps = {
    duration: string;
    degree: string;
    school: string;
    schoolWebsite: string;
};

type ProgressionProps = {
    type: "experience" | "education";
    data: ProgressionExperienceProps | ProgressionEducationProps;
};

export default function Progression(props: ProgressionProps) {
    const { type, data } = props;    return (
        <div className="relative flex flex-col pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-blue-950 ml-3 sm:ml-4">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full left-[-0.375rem] sm:left-[-0.5rem] top-[1rem] bg-blue-950"></div>
            <span className="text-xs sm:text-sm text-gray-600 mb-1">{data.duration}</span>
            {type === "education" ? (                <div className="mb-2">
                    <h3 className="text-base sm:text-lg font-medium">{(data as ProgressionEducationProps).degree}</h3>
                    <a 
                        href={(data as ProgressionEducationProps).schoolWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm sm:text-base"
                    >
                        {(data as ProgressionEducationProps).school}
                    </a>
                </div>
            ) : (
                <div className="mb-2">
                    <h3 className="text-base sm:text-lg font-medium">{(data as ProgressionExperienceProps).position}</h3>
                    <a 
                        href={(data as ProgressionExperienceProps).companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm sm:text-base"
                    >
                        {(data as ProgressionExperienceProps).company}
                    </a>
                </div>
            )}
            {type === "experience" && (
                <div className="text-xs sm:text-sm text-gray-700">{parse((data as ProgressionExperienceProps).description)}</div>
            )}
        </div>
    );
}
