import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Security from "./pages/Security";
import { PopupItemProvider } from "./components/PopupItem";
import { PopupContactsProvider, usePopupContacts } from "./components/PopupContacts";

const initialNavigation = [
  { name: "Главная", icon: "uil uil-estate", href: "#home", current: true },
  { name: "Правила", icon: "uil uil-file-info-alt", href: "#rules", current: false },
  { name: "Безопасность", icon: "uil uil-shield-exclamation", href: "#security", current: false },
  { name: "Контакты", icon: "uil uil-users-alt" },
];

function App() {
  const [navigation, setNavigation] = useState(initialNavigation);
  const { showPopupContacts } = usePopupContacts();

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#home";
      
      // Проверка на пустой хэш и перенаправление
      if (!window.location.hash) {
        window.location.hash = initialNavigation[0].href;
      }

      const updatedNavigation = initialNavigation.map((item) => ({
        ...item,
        current: item.href === currentHash,
      }));
      setNavigation(updatedNavigation);
    };

    const setVh = () => {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();

    window.addEventListener("resize", setVh);
    window.addEventListener("hashchange", handleHashChange);

    // Первичная проверка хэша
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <PopupContactsProvider>
      <PopupItemProvider>
        <div className="App flex max-h-screen min-h-screen flex-col bg-slate-900">
          <Navbar
            props={navigation.map((item) =>
              item.name === "Контакты"
                ? { ...item, onClick: showPopupContacts }
                : item
            )}
          />
          <div className="flex min-h-0 flex-1 justify-center bg-slate-700">
            <main className="flex w-full max-w-7xl flex-1 flex-col">
              {window.location.hash === "#home" && <Home />}
              {window.location.hash === "#rules" && <Rules />}
              {window.location.hash === "#security" && <Security />}
            </main>
          </div>
          <div className="flex w-screen flex-row justify-center bg-slate-800 p-1 align-middle">
            <footer className="text-center text-sm font-normal text-white">
              2024 © PixVerse. Мы никак не относимся к Mojang или Microsoft
            </footer>
          </div>
        </div>
      </PopupItemProvider>
    </PopupContactsProvider>
  );
}

export default App;
