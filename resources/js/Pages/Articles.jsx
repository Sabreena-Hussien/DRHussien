import React, { useState } from "react";
import Layout from "../Components/Layout";
import ArticlesSideBar from "../Components/ArticlesSideBar";
import Pages from "../Components/Pages";
import { Link } from "@inertiajs/react";
// import { Link } from "@inertiajs/inertia-react";
import { route } from '../ziggy';

const Articles = ({ articles }) => {
    // const article = [
    //     {
    //         id: 0,
    //         image: img1,
    //         date: "14-4-2021",
    //         comments: "2",
    //         title: "العلاقة التبادلية بين طبعتي الريال",
    //         description:
    //             "تماهيا مع حاجات ومتطلبات وهموم البلد الاقتصادية والاجتماعية والمعيشية الخطيرة وترجمة لتوجهات الرابطة في المساهمة الإيجابية في تقديم حلول...",
    //     },
    //     {
    //         id: 1,
    //         image: img1,
    //         date: "14-4-2021",
    //         comments: "2",
    //         title: "العلاقة التبادلية بين طبعتي الريال",
    //         description:
    //             "تماهيا مع حاجات ومتطلبات وهموم البلد الاقتصادية والاجتماعية والمعيشية الخطيرة وترجمة لتوجهات الرابطة في المساهمة الإيجابية في تقديم حلول...",
    //     },
    // ];

    return (
        <Layout>
            <div className="container lg:flex lg:flex-row flex-col">
                <div className="lg:w-2/3 w-full sm:mb-16">
                    <h2 className="text-theme-900 text-4xl font-bold mt-16 mb-14">
                        المقالات
                    </h2>
                    <div>
                        {articles.map((a, key) => (
                            <div
                                className="shadow lg:not-last-mb-10 mb-10"
                                key={key}
                            >
                                <img
                                    src={a.image_path}
                                    className="rounded-md"
                                />
                                <div className="flex mt-4 mr-4">
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
                                    <div className="pb-1 mr-4 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-4 ml-1 text-theme-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl text-theme-900 font-bold my-1 mr-4">
                                    {a.title}
                                </h3>
                                <p className="text-theme-900 opacity-50 mb-6 mr-4">
                                    {a.summary}
                                </p>
                                <div className="flex justify-end items-center">
                                    <Link
                                        href={route("article", {slug: a.slug})}
                                        className="flex mb-4 py-1 ml-4 bg-theme-500 px-3 pt-1.5  rounded-md font-bold text-white border-2 border-theme-500 float-left cursor-pointer hover:border-2 hover:border-theme-500 hover:bg-white hover:text-theme-500"
                                    >
                                        قراءة المزيد
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-6 mr-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pages />
                </div>
                <ArticlesSideBar />
            </div>
        </Layout>
    );
};

export default Articles;
