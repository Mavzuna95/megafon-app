/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import { useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";

const navigation = [
  { name: "Пользователи", href: "/", current: true },
  { name: "Добавить +", href: "/adduser", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ favorite }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const handleScroll = () => {
    if (window.scrollY > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY <= 100 && isScrolled) {
      setIsScrolled(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "bottom-shadow" : ""}`}>
      <Disclosure as="nav" className="bg-gray-800">
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-evenly">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full relative bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <div className="flex">
                    <span className="absolute -top-2 right-0 text-white">
                      {favorite.length}
                    </span>
                    <Link to="/favorite">
                      <BsStar fontSize={25} />
                    </Link>
                  </div>
                </button>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/img/me.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </>
      </Disclosure>
    </header>
  );
}
