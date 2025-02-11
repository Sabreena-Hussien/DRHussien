import React from "react";

const Article = ({ articles }) => {


    return (
        <div className=" bg-theme-100 py-8 ">
            <div className="container ">
                <h3 className="text-theme-900 font-bold text-3xl mb-4">
                    المقالات
                </h3>
                <div className="flex justify-center items-center lg:flex-row flex-col mb-2">
                    {articles.map((a, key) => (
                        <div
                            key={key}
                            className="text-theme-900 bg-white p-4 rounded-md m-5 lg:w-96 w-[353] h-52"
                        >
                            <div className="pb-1 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-1 text-theme-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                    />
                                </svg>
                                {a.date}
                            </div>
                            <div className="pb-1 text-bold text-xl">
                                {a.title}
                            </div>
                            <div className="pb-1 text-bold opacity-50">
                                {a.summary}
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-theme-500 px-3 py-1.5 rounded-md font-bold text-white border-2 border-theme-500 float-left cursor-pointer hover:border-2 hover:border-theme-500 hover:bg-white hover:text-theme-500">
                                    <a href={`article/${a.slug}`}>قراءة</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    href="/articles"
                    className="bg-theme-500 m-auto flex justify-center items-center text-white font-bold rounded-md lg:w-52 w-[93%] p-3 cursor-pointer text-base hover:bg-theme-900 hover:text-theme-100"
                >
                    عرض باقي المقالات
                </a>
            </div>
            
        </div>
    );
};
export default Article;
