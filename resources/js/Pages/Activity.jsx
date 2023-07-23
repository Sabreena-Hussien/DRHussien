// import React from "react";
import React, { useRef, useState } from "react";
import Layout from "../Components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/app.css";
import dayjs from "dayjs";

const Activity = ({ activities, images = [] }) => {
    return (
        <Layout>
        {console.log(activities)}
            <div className="container flex-col w-full mt-16">
                <h2 className="text-theme-900 text-2xl font-bold mb-6">
                    {activities.title}
                </h2>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper lg:w-[1200px] w-full h-[726px] mb-10"
                >
                    {images.map((i, key) => (
                        <SwiperSlide key={key}>
                            <img src={i.image_path} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex mt-4 mb-1">
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
                        <p>
                            {activities.date}
                        </p>
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

                        <p>
                            {activities.time}
                        </p>
                    </div>
                </div>
                <p className="mb-16">
                    {activities.content}
                </p>
            </div>
        </Layout>
    );
};

export default Activity;
// {
//     activities && <h1>{activities.title}</h1>;
// }
// {
//     !activities && <h1>Default Title</h1>;
// }
