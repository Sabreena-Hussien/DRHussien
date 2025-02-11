import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const Pages = ({ pagination }) => {
    // const { pagination } = usePage().props;
    return (
        <div className="flex items-center justify-center text-theme-900 mt-16 mb-16 mx-10 font-bold">
            <div className="flex">
                {pagination.map((p, key) => {
                    if (key === 0) {
                        return (
                            <a key={key} href={p.url} className="flex items-center mx-4">
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
                                <button
                                    className="text-lg cursor-pointer"
                                    href={`http://127.0.0.1:8080/articles?page=1`}
                                >
                                    السابق
                                </button>
                            </a>
                        );
                    }

                    if (key !== 0 && key < pagination.length - 1) {
                        return (
                            <a
                                href={p.url}
                                className={
                                    p.active
                                        ? "py-2 px-4 text-2xl rounded-md bg-theme-500 text-white"
                                        : "py-2 px-4 text-2xl rounded-md "
                                }
                                key={key}
                            >
                                <p>{key}</p>
                            </a>
                        );
                    }

                    if (key === pagination.length - 1) {
                        return (
                            <a key={key} href={p.url} className="flex items-center mx-4 cursor-pointer">
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
                            </a>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Pages;
