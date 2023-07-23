import React from "react";
import Layout from "../Components/Layout";
import ArticlesSideBar from "../Components/ArticlesSideBar";
import img1 from "../../images/activity.jpg";
import image1 from "../../images/activity.jpg";

const Article = ({ articles }) => {
    // const comments = [
    //     {
    //         id: 0,
    //         name: "د. فلان بن فلان الفلاني",
    //         date: "23 مايو 2023",
    //         comment:
    //             "ريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكا . يوت انيم أد مينيم ريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم",
    //     },
    //     {
    //         id: 1,
    //         name: "د. فلان بن فلان الفلاني",
    //         date: "23 مايو 2023",
    //         comment:
    //             "ريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكا . يوت انيم أد مينيم ريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم",
    //     },
    //     {
    //         id: 2,
    //         imge: image1,
    //         name: "د. فلان بن فلان الفلاني",
    //         date: "23 مايو 2023",
    //         comment:
    //             "ريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكا . يوت انيم أد مينيم ريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم",
    //     },
    // ];

    return (
        <Layout>
        <div className="container lg:flex lg:flex-row flex-col">
        {console.log(articles)}
                <div className="lg:w-2/3 w-full mt-16 mb-16 pb-16">
                    <h2 className="text-theme-900 text-2xl font-bold mb-1">
                        {articles.title}
                    </h2>
                    <div>
                        <div className="flex mt-4 mb-4">
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
                                <p>{articles.date}</p>
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
                                <p>{articles.comments}</p>
                            </div>
                        </div>
                        <img
                            src={articles.image_path}
                            className="rounded-md w-full"
                        />
                        <p className="mt-4 mb-16">{articles.content}</p>
                    </div>

                    <div className="lg:mb-6 mb-16">
                        <h3 className="text-theme-900 font-bold text-2xl ">
                            التعليقات ({articles.comments})
                        </h3>
                        <div className="">
                            {articles.comments.map((c, key) => (
                                <div
                                    key={key}
                                    className="flex justify-end mt-10"
                                >
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <p className="font-bold text-theme-900 text-lg ml-4">
                                                {c.name}
                                            </p>
                                            <div className="flex text-gray-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 ml-1 text-gray-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                                    />
                                                </svg>
                                                <p className="text-sm">
                                                    {c.date}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm w-full">
                                            {c.comment}
                                        </p>
                                        <div className="flex justify-end items-end mt-4">
                                            <a
                                                href="#"
                                                className="bg-theme-500 text-white text-lg w-16 h-9 rounded-md flex items-center justify-center hover:bg-theme-900 hover:text-theme-100"
                                            >
                                                رد
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <form className="mt-6">
                                <p className="font-bold text-2xl text-theme-900 mb-8">
                                    إضافة تعليق
                                </p>
                                <input
                                    type="text"
                                    className="lg:w-full w-full rounded-md bg-theme-100 focus:none border-none h-14 px-4 ml-3"
                                    placeholder="الاسم"
                                />

                                <textarea className="w-full rounded-md bg-theme-100 focus:none resize-none px-4 border-none mt-4 h-72">
                                    الرسالة
                                </textarea>
                                <submit className="bg-theme-500 text-white flex justify-center items-center float-left text-lg rounded-md lg:w-40 w-full h-14 mt-3 hover:cursor-pointer hover:border-2 hover:border-theme-500 hover:text-theme-500 hover:bg-white">
                                    ارسال
                                </submit>
                            </form>
                        </div>
                    </div>
                </div>
                <ArticlesSideBar />
            </div>
        </Layout>
    );
};

export default Article;
