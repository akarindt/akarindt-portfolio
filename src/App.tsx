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
import { useDocumentTitle } from "./helpers/hooks/useDocumentTitle";

export default function App() {
    const { theme } = themeStore();
    const title = useDocumentTitle();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <div className="w-full bg-white dark:bg-gray-900 flex flex-col items-center">
            <Header />
            <main className="w-full max-w-2xl flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 py-6 sm:py-10 mt-16 text-blue-950 dark:text-white">
                <section id="home" aria-label="Home">
                    <Main />
                </section>
                <section id="about" aria-label="About me">
                    <AboutMe />
                </section>
                <Divider />
                <section id="education" aria-label="Education">
                    <Education />
                </section>
                <Divider />
                <section id="experience" aria-label="Experience">
                    <WorkingExperience />
                </section>
                <Divider />
                <section id="projects" aria-label="Projects">
                    <PersonalProjects />
                </section>
                <Divider />
                <section id="skills" aria-label="Skills">
                    <Skills />
                </section>
                <Divider />
                <section id="languages" aria-label="Languages">
                    <Languages />
                </section>
                <section id="contact" aria-label="Contact">
                    <GetInTouch />
                </section>
            </main>
            <Footer />
        </div>
    );
}
