import { GITHUB_REPOS } from "@helpers/constants";
import Card from "@components/Card";
import { FaGear } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function PersonalProjects() {
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="text-2xl flex items-center gap-4">
                <FaGear className="inline-block" />
                <span>Personal Projects</span>
            </div>            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {GITHUB_REPOS.map(repo => (
                    <Card
                        key={uuidv4()}
                        title={repo.name}
                        description={repo.description}
                        link={repo.url}
                    />
                ))}
            </div>
        </div>
    );
}
