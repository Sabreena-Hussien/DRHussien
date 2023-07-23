import React from "react";

const Pages = () => {
    const pages = [
        { key: 0, page: "1", isActive: true },
        { key: 1, page: "2", isActive: false },
        { key: 2, page: "3", isActive: false },
        { key: 3, page: "4", isActive: false },
        { key: 4, page: "5", isActive: false },
    ];

    return (
        <div className="flex items-center justify-center text-theme-900 mt-16 mb-16 mx-10 font-bold">
            <div className="flex items-center mx-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                </svg>
                <p className="text-lg">السابق</p>
            </div>
            <div className="flex">
                {pages.map((p, key) => (
                    <a
                        href="/articles"
                        className={
                            p.isActive
                                ? "py-2 px-4 text-2xl rounded-md bg-theme-500 text-white"
                                : "py-2 px-4 text-2xl rounded-md "
                        }
                        key={key}
                    >
                        <p>{p.page}</p>
                    </a>
                ))}
            </div>
            <div className="flex items-center mr-2">
                <p className="text-lg">التالي</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Pages;
