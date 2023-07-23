import React, { Fragment, useEffect } from "react";

const MyBtn = (props) => {
    if (props.show) {
        return (
            <button
                type="button"
                className="bg-theme-500 m-auto flex justify-center items-center text-white font-bold rounded-md lg:w-32 w-[93%] p-3 cursor-pointer text-base my-10  hover:bg-theme-900 hover:text-theme-100"
            >
                <a href="/whoami">المزيد</a>
            </button>
        );
    } else {
        return <Fragment></Fragment>;
    }
};

const CV = ({ resumes, resumeType_id, ...props }) => {
    // const head = [
    //     {
    //         key: 0,
    //         val: "التعليم",
    //         type: "Eduction",
    //         data: [
    //             {
    //                 id: 0,
    //                 value: {
    //                     id: 0,
    //                     date: "الى 1979",
    //                     title: "التعليم الاساسي",
    //                     description: [
    //                         { key: 0, desc: "الابتدائية في مدرسة سرار" },
    //                         {
    //                             key: 1,
    //                             desc: "الإعدادية في مدرستي لبعوس الإعدادية ومدرسـة رصد الإعدادية",
    //                         },
    //                         {
    //                             key: 2,
    //                             desc: "الثانوية العامة في ثانوية زنجبار",
    //                         },
    //                     ],
    //                 },
    //             },
    //             {
    //                 id: 1,
    //                 value: {
    //                     id: 0,
    //                     date: "من 1985 الى 1990",
    //                     title: "الدراسة الجامعية",
    //                     description: [
    //                         {
    //                             key: 0,
    //                             desc: "البكالوريس بدرجة امتياز من جامعة عدن / كلية الاقتصاد والإدارة تخصص اقتصاد",
    //                         },
    //                         {
    //                             key: 1,
    //                             desc: "درجة الماجستير من الاتحاد السوفيتي (سابقاً) جامعة كييف الحكومية معهد القانون الدولي والعلاقات الدولية تخصص علاقات اقتصادية دولية بدرجة امتياز",
    //                         },
    //                     ],
    //                 },
    //             },
    //             {
    //                 id: 2,
    //                 value: {
    //                     id: 0,
    //                     date: "الى 1996",
    //                     title: "الدراسات العليا",
    //                     description: [
    //                         {
    //                             key: 0,
    //                             desc: "الدكتوراه في الاقتصاد من جامعة راجستان بمدينة جايبور بجمهورية الهند عنوان الرسالة (تأثير السياسة التجارية الخارجية على العلاقات الاقتصادية الدولية للجمهورية اليمنية) ",
    //                         },
    //                     ],
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         key: 1,
    //         val: "الخبرة العملية",
    //         type: "Experiance",
    //         data: [
    //             {
    //                 id: 0,
    //                 value: {
    //                     id: 0,
    //                     date: "في2 - 1 - 1986",
    //                     title: "معيد",
    //                     description: [
    //                         {
    //                             key: 0,
    //                             desc: "معيد في كلية الاقتصاد والإدارة بجامعة عدن",
    //                         },
    //                         {
    //                             key: 1,
    //                             desc: "معيداً ثم محاضراً لمادة التجارة الدولية ثم الاقتصاد الدولي بجامعة عدن بعد الالتحاق بالعمل مع القيام بتدريس بعض المواد الأخرى بشكل مؤقت وذلك طوال فترة العمل في الجامعة",
    //                         },
    //                     ],
    //                 },
    //             },
    //         ],
    //     },
    //     // { key: 2, val: "الشهادات التقديرية", type: "Certificate" },
    //     // { key: 3, val: "الابحاث المنشورة", type: "Research" },
    //     // { key: 4, val: "النشاطات الاجتماعية", type: "Activities" },
    // ];
    return (
        <div className="bg-theme-100 ">
            <div className="container py-16">
                <h3 className="text-theme-900 font-bold text-3xl mb-16">
                    السيرة الذاتية
                </h3>

                {console.log(resumeType_id)}
                <div>
                    {resumes.map((h, key) => (
                        <div className="mb-8" key={key}>
                            <h3 className="text-theme-900 text-lg font-bold text-center mb-6">
                                {console.log(resumeType_id)}
                                {h.resumeType_id}
                            </h3>
                            <div className="relative w-full max-w-[1140px] my-0 mx-auto py-4 px-0 after:content-[''] after:absolute after:w-[2px] after:bg-theme-500 after:top-0 after:bottom-0 after:left-[96%] after:lg:left-1/2 after:md:left-1/2 after:-ml-[1px]">
                                <div>
                                    {key % 2 === 0 ? (
                                        <div className="relative py-4 px-7 lg:flex md:flex items-start justify-center after:content-[''] after:absolute after:w-4 after:h-4 after:top-4 after:lg:left-[49.3%] after:left-[94%] after:bg-theme-100 after:border after:border-theme-500 after:rounded-2xl after:z-10">
                                            <div className="lg:pl-40 md:pl-40 pr-7 lg:text-left md:text-left text-right left-0 lg:w-[49.4%] md:w-[49.4%] w-full ">
                                                <p className="text-slate-800 text-lg sm:mb-1">
                                                    {h.date}
                                                </p>

                                                <h4 className="text-theme-500 text-xl font-bold sm:mb-1">
                                                    {h.title}
                                                </h4>
                                            </div>
                                            <div className="lg:w-[49.4%] md:w-[49.4%] w-full pt-3">
                                                <ul className="lg:pr-40 md:pr-40 pr-14 lg:left-full left-14 list-disc ">
                                                    {h.description}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative py-4 px-7 lg:flex lg:flex-row md:flex md:flex-row flex flex-col-reverse items-start justify-center after:content-[''] after:absolute after:w-4 after:h-4 after:top-4 after:lg:left-[49.3%] after:left-[94%] after:bg-theme-500 after:border after:border-theme-500 after:rounded-2xl after:z-10">
                                            <div className="lg:w-[49.4%] md:w-[49.4%] w-full">
                                                <ul
                                                    className="
                                        lg:pl-40 md:pl-40 pr-14 lg:left-full left-14 list-disc pt-3"
                                                >
                                                    {h.description}
                                                </ul>
                                            </div>
                                            <div className="lg:pr-36 pr-7 lg:left-0 right-2 lg:w-[49.4%] md:w-[49.4%] w-full">
                                                <p className="text-slate-800 text-lg">
                                                    {h.date}
                                                </p>

                                                <h4 className="text-theme-500 text-xl font-bold">
                                                    {h.title}
                                                </h4>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <MyBtn showDetails={props.show} />
            </div>
        </div>
    );
};

export default CV;
