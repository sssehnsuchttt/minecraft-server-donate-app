import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PopupItemContext = React.createContext();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PopupItemProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(null);

  const showPopup = (popupHeader, popupText, id) => {
    setHeader(popupHeader);
    setItems(popupText.split("\n"));
    setItemId(id);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupItemContext.Provider value={{ showPopup }}>
      {children}
      <div
        className={classNames(
          isOpen ? "bg active" : "bg",
          "absolute flex h-screen w-screen flex-col items-center justify-center p-6 py-20",
        )}
        style={{ zIndex: 1000 }}
        onClick={closePopup}
      >
        <div
          className={classNames(
            isOpen ? "popup active" : "popup",
            "relative flex h-full w-full flex-col rounded-2xl border-t border-white/20 bg-slate-800 p-6 sm:max-w-2xl",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <h1 className="minecraft-five m-0 p-0 text-xl leading-none text-white text-outline">
              {header}
            </h1>
            <button
              className="group relative inline-flex items-center justify-center rounded-md text-gray-400 outline-none transition-all duration-200 ease-in-out hover:bg-gray-700 hover:text-white"
              onClick={closePopup}
            >
              <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
            </button>
          </div>

          <button
            className="relative mt-9 h-14 overflow-hidden rounded-2xl border-t border-white/20 bg-indigo-500 text-base font-medium text-white transition-transform duration-200 ease-in-out active:scale-95"
            onClick={() => (window.location.href = `/purchase/${itemId}`)}
          >
            <span className="relative z-10">Купить</span>
            <span className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-400 opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
          </button>

          <div className="mt-10 overflow-y-auto">
            <ul className="ml-5 flex list-disc flex-col gap-3 text-gray-300">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PopupItemContext.Provider>
  );
};

const usePopupItem = () => {
  const context = React.useContext(PopupItemContext);
  if (!context) {
    throw new Error("usePopupItem must be used within a PopupItemProvider");
  }
  return context;
};

export { PopupItemProvider, usePopupItem };
