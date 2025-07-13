import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeState = {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
};

const themeStore = create<ThemeState>()(
    persist(
        set => ({
            theme: "light",
            setTheme: theme => set({ theme }),
        }),
        {
            name: "theme-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default themeStore;
