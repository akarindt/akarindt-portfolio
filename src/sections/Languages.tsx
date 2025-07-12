import Card from "@components/Card";
import { LANGUAGUES } from "@helpers/constants";
import { IoLanguage } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

export default function Languages() {    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5">
            <div className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-5">
                <IoLanguage className="inline-block" />
                <span>Languages</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {LANGUAGUES.map(language => (
                    <Card key={uuidv4()} title={language.name} description={language.level} />
                ))}
            </div>
        </div>
    );
}
