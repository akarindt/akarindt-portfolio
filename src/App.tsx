import AboutMe from "@sections/AboutMe";
import Education from "@sections/Education";
import Languages from "@sections/Languages";
import Main from "@sections/Main";
import PersonalProjects from "@sections/PersonalProjects";
import Skills from "@sections/Skills";
import WorkingExperience from "@sections/WorkingExperience";
import Divider from "@components/Divider";
import Header from "@components/Header";
import Footer from "@components/Footer";
import themeStore from "@stores/themeStore";
import { useEffect } from "react";
import GetInTouch from "@sections/GetInTouch";

export default function App() {
    const { theme } = themeStore();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="bg-white dark:bg-gray-900 flex flex-col items-center">
            <Header />
            <div className="w-full max-w-2xl flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 py-6 sm:py-10 mt-16 text-blue-950 dark:text-white">
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
                <GetInTouch />
            </div>
            <Footer />
        </div>
    );
}
