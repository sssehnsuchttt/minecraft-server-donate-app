import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ props }) {
  return (
    <Disclosure as="nav" className="sticky top-0 bg-slate-800" style={{ zIndex: 100 }}>
      {({ open }) => (
        <>
          <DisclosureButton className={open ? "bg active sm:hidden" : "bg"}></DisclosureButton>
          <div className="relative mx-auto max-w-7xl bg-slate-800 px-2 sm:px-6 lg:px-8">
            <div className="relative z-50 flex h-16 items-center justify-between bg-slate-800">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-200 ease-in-out hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img alt="PixVerse" src="/img/logo.png" className="h-10 w-auto" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {props.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={item.onClick || null} // Используем onClick, если он определен
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out"
                        )}
                      >
                        <i className={`mx-1 p-0 text-base ${item.icon}`}></i>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              open ? "translate-y-0 transform" : "-translate-y-full transform",
              "absolute left-0 top-16 z-40 w-full rounded-b-xl bg-slate-800 transition-transform duration-300 ease-out sm:hidden"
            )}
          >
            <div className="space-y-2 px-2 pb-3 pt-2">
              {props.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={item.onClick || null} 
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current ? "bg-gray-900 bg-opacity-60 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out"
                  )}
                >
                  <i className={`mx-1 p-0 text-base ${item.icon}`}></i>
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
