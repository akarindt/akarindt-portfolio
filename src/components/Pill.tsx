type PillProps = {
    name: string;
    color: string;
    url: string;
};

export default function Pill(props: PillProps) {    return (
        <a
            href={props.url}
            target="_blank"
            className="bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-1 rounded-2xl flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
        >
            <span style={{ backgroundColor: props.color }} className="block w-3 h-3 sm:w-4 sm:h-4 rounded-full"></span>
            <span>{props.name}</span>
        </a>
    );
}
