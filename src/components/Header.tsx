import { FaRegSun, FaRegMoon } from "react-icons/fa";
import themeStore from "@stores/themeStore";

export default function Header() {
    const { theme, setTheme } = themeStore();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
                <div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <FaRegMoon className="w-5 h-5 text-blue-950 dark:text-white" />
                        ) : (
                            <FaRegSun className="w-5 h-5 text-blue-950 dark:text-white" />
                        )}
                    </button>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={scrollToTop}
                        className="text-xl font-bold text-blue-950 dark:text-white py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        Akari
                    </button>
                </div>
                <div className="w-10"></div>
            </div>
        </header>
    );
}
