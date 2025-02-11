import Layout from "../Components/Layout";
import React from "react";
import image1 from "../../images/activity.jpg";
import Pages from "../Components/Pages";
// import dayjs from "dayjs";
import { Link } from "@inertiajs/react";

const Activities = ({ activities }) => {

    return (
        <Layout>
            <div className="container lg:flex lg:flex-row flex-col ">
                <div className="sm:mb-16">
                    <h2 className="text-theme-900 text-4xl font-bold mt-16 mb-10">
                        الانشطة
                    </h2>
                    <div className="flex flex-wrap">
                        {activities.data.map((act, key) => (
                            <div
                                key={key}
                                className="shadow lg:w-[48%] w-full mb-4 ml-2"
                            >
                                <img
                                    src={act.image_path}
                                    className="rounded-md"
                                />
                                <div className="flex mt-4 mb-1 mr-4">
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

                                        {act.date}
                                    </div>
                                    <div className="pb-1 mr-4 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5 text-theme-500 ml-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        {act.time}
                                    </div>
                                </div>
                                <h3 className="text-theme-900 font-bold text-xl pr-4 mb-1">
                                    {act.title}
                                </h3>
                                <p className="pr-4 text-theme-900 opacity-50 mb-4">
                                    {act.summary}
                                </p>

                                <div className="flex justify-end items-center">
                                    <Link
                                        href={`/activity/${act.slug}`}
                                        className="flex mb-4 ml-4 bg-theme-500 px-3 py-1 rounded-md font-bold text-white border-2 border-theme-500 float-left cursor-pointer hover:border-2 hover:border-theme-500 hover:bg-white hover:text-theme-500"
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
                    <Pages pagination={activities.links} />
                </div>
            </div>
        </Layout>
    );
};

export default Activities;
