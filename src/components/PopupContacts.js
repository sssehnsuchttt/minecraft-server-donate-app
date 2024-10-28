import React, { useState, createContext, useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PopupContactsContext = createContext();

const contactsData = [
  { type: "Email", value: "support@pixverse.org" },
  { type: "Telegram", value: "https://t.me/pix_verse" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PopupContactsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState("Контакты");
  const [contacts, setContacts] = useState(contactsData);

  
  const showPopupContacts = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const formatLink = (value) => {
    if (value.includes("@")) {
      return `mailto:${value}`;
    } else if (value.startsWith("http")) {
      return value;
    }
    return `https://${value}`;
  };

  return (
    <PopupContactsContext.Provider value={{ showPopupContacts }}>
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
            "relative flex min-h-40 w-full flex-col rounded-2xl border-t border-white/20 bg-slate-800 p-6 sm:max-w-2xl",
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

          <div className="mt-9 overflow-y-auto">
            <p className="mb-3 text-left text-base text-white">
              Вы можете связаться с нами по указанным контактам ниже в случае
              возникновения каких-либо вопросов или проблем:
            </p>
            <ul className="ml-5 flex list-disc flex-col gap-3 text-gray-300">
              {contacts.map((contact, index) => (
                <li key={index}>
                  {contact.type}:{" "}
                  <a
                    href={formatLink(contact.value)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PopupContactsContext.Provider>
  );
};

const usePopupContacts = () => {
  const context = useContext(PopupContactsContext);
  if (!context) {
    throw new Error(
      "usePopupContacts must be used within a PopupContactsProvider",
    );
  }
  return context;
};

export { PopupContactsProvider, usePopupContacts };
