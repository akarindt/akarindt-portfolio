type CardProps = {
    title: string;
    description: string;
    link?: string;
}

export default function Card(props: CardProps) {    return (
        <div className="p-3 sm:p-4 bg-gray-200 rounded flex flex-col h-full">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{props.title}</h2>
            <p className="text-gray-700 text-sm sm:text-base flex-grow">{props.description}</p>
            {props.link && (
                <div className="mt-auto pt-2 w-full flex justify-end">
                    <a href={props.link} className="text-blue-900 hover:underline text-sm sm:text-base">
                        Learn more
                    </a>
                </div>
            )}
        </div>
    );

}