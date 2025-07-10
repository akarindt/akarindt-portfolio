import AboutMe from "@sections/AboutMe";
import Education from "@sections/Education";
import Languages from "@sections/Languages";
import Main from "@sections/Main";
import PersonalProjects from "@sections/PersonalProjects";
import Tools from "@sections/Tools";
import WorkingExperience from "@sections/WorkingExperience";

export default function App() {
    return (
        <div className="app-container">
            <Main />
            <AboutMe />
            <Education />
            <WorkingExperience />
            <PersonalProjects />
            <Tools />
            <Languages />
        </div>
    );
}
