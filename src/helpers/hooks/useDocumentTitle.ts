import { useEffect, useState } from "react";

/**
 * Hook to update the document title as user scrolls through different sections
 * This improves SEO by making the title more descriptive of the current content in view
 */
export function useDocumentTitle() {
    const [title, setTitle] = useState<string>("Akari | Web Developer Portfolio");

    useEffect(() => {
        // Function to determine which section is most visible in the viewport
        const updateTitleBasedOnScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollPosition = window.scrollY + 300; // Offset to trigger earlier

            let currentSection = "";
            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id") || "";
                }
            });

            // Set the title based on the current section
            switch (currentSection) {
                case "about":
                    setTitle("About Me | Akari - Web Developer");
                    break;
                case "education":
                    setTitle("Education | Akari - Web Developer");
                    break;
                case "experience":
                    setTitle("Experience | Akari - Web Developer");
                    break;
                case "projects":
                    setTitle("Projects | Akari - Web Developer");
                    break;
                case "skills":
                    setTitle("Skills | Akari - Web Developer");
                    break;
                case "languages":
                    setTitle("Languages | Akari - Web Developer");
                    break;
                case "contact":
                    setTitle("Contact | Akari - Web Developer");
                    break;
                default:
                    setTitle("Akari | Web Developer Portfolio");
                    break;
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", updateTitleBasedOnScroll);

        // Initialize title
        updateTitleBasedOnScroll();

        // Clean up event listener
        return () => {
            window.removeEventListener("scroll", updateTitleBasedOnScroll);
        };
    }, []);

    return title;
}
