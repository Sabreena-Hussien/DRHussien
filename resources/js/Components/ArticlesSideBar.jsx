import React from "react";

const ArticlesSideBar = () => {
    const lastArticles = [
        {
            key: 0,
            title: "حرب العملة سلاح المتحاربين الجدد",
            date: "1-2-2022",
        },
        {
            key: 1,
            title: "العلاقة التبادلية بين طبعتي الريال",
            date: "1-3-2022",
        },
        {
            key: 2,
            title: "كهرباء عدن ... ولا حياة لمن تنادي",
            date: "1-3-2022",
        },
    ];
    const theMost = [
        {
            key: 0,
            title: "حرب العملة سلاح المتحاربين الجدد",
            date: "1-2-2022",
            comments: "3",
        },
        {
            key: 1,
            title: "العلاقة التبادلية بين طبعتي الريال",
            date: "1-3-2022",
            comments: "3",
        },
        {
            key: 2,
            title: "كهرباء عدن ... ولا حياة لمن تنادي",
            date: "1-3-2022",
            comments: "3",
        },
    ];

    const tags = [
        { key: 0, tag: "رابطة الاقتصاديين" },
        { key: 1, tag: "اقتصاد" },
        { key: 2, tag: "اسعار الصرف" },
        { key: 3, tag: "عدن" },
        { key: 4, tag: "الدولار" },
        { key: 5, tag: "الكهرياء" },
    ];

    return (
        <div className="lg:w-1/3 w-full lg:mt-40 mt-16 mb-16  lg:mr-4 mr-0">
            <form className="flex items-center border border-theme-500 rounded-md text-theme-500 h-10 px-4 mb-6">
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <input
                    placeholder="ابحث"
                    className="mr-2 outline-none "
                />
            </form>
            <div className="shadow p-4 mb-6">
                <h3 className="text-theme-900 font-bold text-2xl mb-8">
                    اخر المقالات
                </h3>
                <div>
                    {lastArticles.map((last, key) => (
                        <div className="border-b mb-2" key={key}>
                            <a
                                href="/article"
                                className="font-bold text-theme-500 text-base "
                            >
                                {last.title}
                            </a>
                            <div className="pb-1 flex items-center text-gray-500 my-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 ml-1 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                    />
                                </svg>
                                {last.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shadow p-4 mb-6">
                <h3 className="text-theme-900 font-bold text-2xl mb-8">
                    اكثر تفاعلا
                </h3>
                <div>
                    {theMost.map((most, key) => (
                        <div className="border-b mb-2" key={key}>
                            <a
                                href="/article"
                                className="font-bold text-theme-500 text-base "
                            >
                                {most.title}
                            </a>
                            <div className="flex my-2 text-xs">
                                <div className="pb-1 flex text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 ml-1 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                        />
                                    </svg>
                                    {most.date}
                                </div>
                                <div className="pb-1 mr-4 flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-3 ml-1 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                        />
                                    </svg>
                                    {most.comments}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shadow p-4 mb-6">
                <h3 className="text-theme-900 font-bold text-2xl mb-8">وسوم</h3>
                <div className="flex flex-wrap">
                    {tags.map((t, key) => (
                        <div key={key}>
                            <p className="rounded-md bg-theme-100 p-2 m-2 text-sm">
                                {t.tag}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticlesSideBar;
