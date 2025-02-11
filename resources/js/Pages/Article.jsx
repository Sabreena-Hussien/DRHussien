import React from "react";
import Layout from "../Components/Layout";
import ArticlesSideBar from "../Components/ArticlesSideBar";
import parse from "html-react-parser";
import { useForm } from "@inertiajs/react";

const Article = ({ articles, lastArticles, moreComments }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        message: "",
        article_id: articles.id,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/comment");
    }
    const created_at = new Date();

    return (
        <Layout>
            <div className="container lg:flex lg:flex-row flex-col">
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
                                <p>{articles.comments.length}</p>
                            </div>
                        </div>
                        <img
                            src={articles.image_path}
                            className="rounded-md w-full"
                        />
                        <div className="mt-4 mb-16">
                            {parse(articles.content)}
                        </div>
                    </div>

                    <div className="lg:mb-6 mb-16">
                        <h3 className="text-theme-900 font-bold text-2xl ">
                            التعليقات ({articles.comments.length})
                        </h3>
                        <div className="">
                            {articles.comments.map((c, key) => (
                                <div key={key} className="flex mr-6 mt-10">
                                    <div className="flex justify-between items-end w-full">
                                        <div className="w-3/4">
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
                                                        {c.comment_date}
                                                        {console.log(
                                                            c.comment_date
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm w-full">
                                                {c.message}
                                            </p>
                                        </div>

                                        <div className="">
                                            {articles.comments
                                                .comments_article_id && (
                                                <div className="flex mt-4 ml-8">
                                                    <div className="bg-theme-100 p-3">
                                                        {
                                                            articles.comments
                                                                .comments_article_id
                                                        }
                                                    </div>
                                                </div>
                                            )}
                                            {/* <div className="flex mt-4">
                                                <button
                                                    href="#"
                                                    className="bg-theme-500 text-white text-lg w-16 h-9 rounded-md flex items-center justify-center hover:bg-theme-900 hover:text-theme-100"
                                                >
                                                    رد
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <form className="mt-6" onSubmit={handleSubmit}>
                                <p className="font-bold text-2xl text-theme-900 mb-8">
                                    إضافة تعليق
                                </p>
                                <input
                                    type="text"
                                    value={data.name}
                                    className="lg:w-full w-full rounded-md bg-theme-100 focus:none border-none h-14 px-4 ml-3"
                                    placeholder="الاسم"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <textarea
                                    placeholder="الرسالة"
                                    value={data.message}
                                    className="w-full rounded-md bg-theme-100 focus:none resize-none px-4 border-none mt-4 h-72"
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                ></textarea>
                                <button
                                    disabled={processing}
                                    type="submit"
                                    className="bg-theme-500 text-white flex justify-center items-center float-left text-lg rounded-md lg:w-40 w-full h-14 mt-3 hover:cursor-pointer hover:border-2 hover:border-theme-500 hover:text-theme-500 hover:bg-white"
                                >
                                    ارسال
                                </button>
                                {errors && (
                                    <p className="error">{errors.message}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <ArticlesSideBar
                    articles={lastArticles}
                    moreComments={moreComments}
                />
            </div>
        </Layout>
    );
};

export default Article;
