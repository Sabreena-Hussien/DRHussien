import Layout from "../Components/Layout";
import React from "react";
import heroImg from "../../images/heroImg.png";
import CV from "../Components/CV";

const WhoAmI = ({ abouts, resumes, resumeType_id }) => {
    // const personalInfo = [
    //     { id: 0, info: "الاسم:", data: "د. حسين سعيد منصور الملعسي" },
    //     {
    //         id: 1,
    //         info: "ناريخ ومحل الميلاد:",
    //         data: "1958م - مديرية سرار / يافع محافظة أبين / اليمن",
    //     },
    //     { id: 2, info: "العنوان:", data: "مدينة الشعب - محافظة عدن" },
    //     { id: 3, info: "رقم التلفون:", data: "775-504-853" },
    //     { id: 4, info: "رقم الواتساب:", data: "730-039-195" },
    //     {
    //         id: 5,
    //         info: "البريد الالكتروني:",
    //         data: "hussain.almalassi.econ@aden-univ.net",
    //     },
    // ];

    return (
        <Layout>
            <div className="container flex-col w-full mt-16 mb-16">
                <div className="flex justify-between items-center lg:flex-row flex-col-reverse">
                    <div className="lg:text-right text-center lg:w-2/3 w-full lg:ml-4">
                        <h2 className="text-theme-900 text-3xl font-bold  mb-6">
                            من أنا؟
                        </h2>
                        <p className="mt-4 mb-8">{abouts.about_me}</p>
                        <h3 className="text-theme-900 text-2xl font-bold  mb-2">
                            معلومات شخصية
                        </h3>
                        <div className="mb-6">
                            <div className="mb-2">
                                <span className="font-bold text-theme-900 text-base ml-4 mb-8">
                                    الاسم:
                                </span>
                                <span className="text-theme-900 font-medium mb-8">
                                    {abouts.name}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="font-bold text-theme-900 text-base ml-4 mb-8">
                                    تاريخ ومحل الميلاد:
                                </span>
                                <span className="text-theme-900 font-medium mb-8">
                                    {abouts.birth}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="font-bold text-theme-900 text-base ml-4 mb-8">
                                    العنوان:
                                </span>
                                <span className="text-theme-900 font-medium mb-8">
                                    {abouts.address}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="font-bold text-theme-900 text-base ml-4 mb-8">
                                    رقم التلفون:
                                </span>
                                <span className="text-theme-900 font-medium mb-8">
                                    {abouts.phone1}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="font-bold text-theme-900 text-base ml-4 mb-8">
                                    رقم الواتساب:
                                </span>
                                <span className="text-theme-900 font-medium mb-8">
                                    {abouts.phone2}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="font-bold text-theme-900 text-base ml-4 mb-8">
                                    البريد الالكتروني:
                                </span>
                                <span className="text-theme-900 font-medium mb-8">
                                    {abouts.email}
                                </span>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col ">
                            <a href={abouts.cv_arabic_path} className="flex justify-center lg:w-52 w-full text-base font-bold items-center rounded-md bg-theme-500 border-theme-500 text-white lg:h-11 px-6 py-5 ml-3 sm:h-4 md:mb-0 sm:mb-4 hover:border-2 hover:border-theme-500 hover:bg-white hover:text-theme-500">
                                تحميل السيرة الذاتية
                            </a>
                            <a href={abouts.cv_english_path} className="flex justify-center lg:mt-0 mt-4  lg:w-52 w-full text-base font-bold items-center rounded-md border-2 border-theme-500 bg-white text-theme-500 lg:h-10 px-6 py-5 sm:h-4 md:mb-0 sm:mb-4 hover:bg-theme-500 hover:text-white ">
                                CV Download
                            </a>
                        </div>
                    </div>

                    <img
                        className="lg:w-96 lg:h-96 sm:w-48 sm:h-48 my-12 rounded-full"
                        src={heroImg}
                    />
                </div>
            </div>
            <div className="bg-theme-100 py-10">
                <div className="container">
                    <CV
                        showDetails={false}
                        resumes={resumes}
                        resumeType_id={resumeType_id}
                    />
                    {/* {console.log(resumes)} */}
                </div>
            </div>
        </Layout>
    );
};

export default WhoAmI;
