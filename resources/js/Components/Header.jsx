import React from "react";
import Footer from "./Footer";

const Header = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const menu = [
        { key: 0, value: "الرئيسية", href: "/" },
        { key: 1, value: "المقالات", href: "/articles" },
        { key: 2, value: "الانشطة", href: "/activities" },
        { key: 3, value: "من أنا", href: "/whoami" },
        { key: 4, value: "تواصل معي", href: `#contact` },
    ];

    return (
        <nav className="bg-theme-500 h-16  text-white">
            <div className="container flex items-center justify-between ">
                <h3 className="text-xl font-bold py-4">د. حسين الملعسي</h3>
                <ul className="lg:flex hidden justify-self-end">
                    {menu.map((m, key) => (
                        <a href={m.href} key={key} >
                            <li
                                key={key}
                                className="px-5 py-5 text-white hover:bg-theme-100 hover:text-theme-500"
                            >
                                {m.value}
                            </li>
                        </a>
                    ))}
                </ul>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="transition-all lg:hidden md:relative"
                >
                    <div
                        className={`${
                            openMenu
                                ? " w-6 rotate-45 transform translate-y-0.5"
                                : "w-5 "
                        } h-0.5 mb-1 transition-all bg-white`}
                    ></div>
                    <div
                        className={`${
                            openMenu ? "hidden" : "block"
                        } h-0.5 w-5 mb-1 bg-white`}
                    ></div>
                    <div
                        className={`${
                            openMenu
                                ? "w-6 -rotate-45 transform -translate-y-1"
                                : "w-5"
                        } h-0.5  transition-all bg-white`}
                    ></div>
                </div>
            </div>
            <ul
                className={`${
                    openMenu ? "block" : "hidden"
                } " relative bg-theme-500 z-40 text-center py-4 opacity-90`}
            >
                {menu.map((m, key) => (
                    <li
                        key={key}
                        className="py-4 hover:bg-white hover:text-theme-500"
                    >
                    <a href={m.href}>{m.value}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
