import AboutMe from "@sections/AboutMe";
import Education from "@sections/Education";
import Languages from "@sections/Languages";
import Main from "@sections/Main";
import PersonalProjects from "@sections/PersonalProjects";
import Skills from "@sections/Skills";
import WorkingExperience from "@sections/WorkingExperience";
import Divider from "@components/Divider";

export default function App() {
    return (
        <div className="bg-white flex flex-col items-center">
            <div className="w-full max-w-2xl flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 py-6 sm:py-10 text-blue-950">
                <Main />
                <AboutMe />
                <Divider />
                <Education />
                <Divider />
                <WorkingExperience />
                <Divider />
                <PersonalProjects />
                <Divider />
                <Skills />
                <Divider />
                <Languages />
            </div>
        </div>
    );
}
