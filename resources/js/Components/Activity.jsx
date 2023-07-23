import React from "react";
import img1 from "../../../resources/images/activity.jpg";

const Activity = () => {
    const active = [
        {
            id: 0,
            title: "العلاقة التبادلية بين طبعتي الريال ",
            image: img1,
        },
        {
            id: 1,
            title: "حرب العملة سلاح المتحاربين الجديد",
            image: img1,
        },
        {
            id: 2,
            title: "رحلة الالف ميل تبدأ بخطوة",
            image: img1,
        },
    ];

    return (
        <div className="bg-white py-8 ">
            <div className="container ">
                <h3 className="text-theme-900 font-bold text-3xl mb-4">
                    الانشطة
                </h3>
                <div className="flex justify-center items-center lg:flex-row flex-col mb-2">
                    {active.map((a, key) => (
                        <div key={key} className="relative rounded-md m-5">
                            <img src={a.image} className="rounded-md" />
                            <div className="absolute rounded-t-none rounded-l-none rounded-b-md rounded-r-none w-full lg:h-[40%] md:h-[30%] sm:h-[50%] bg-black bg-opacity-50 bottom-0 py-2 px-4">
                                <div className="pb-1 font-bold lg:text-xl  sm:text-base text-white ">
                                    {a.title}
                                </div>
                                <div className="flex justify-end">
                                    <a href="activity" className="text-white px-1 pt-3 -pb-1 float-left cursor-pointer hover:underline ">
                                        اقرأ المزيد
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="/activities" className="bg-theme-500 m-auto flex justify-center items-center text-white font-bold rounded-md lg:w-52 w-[93%] p-3 cursor-pointer text-base hover:bg-theme-900 hover:text-theme-100">
                    عرض باقي الانشطة
                </a>
            </div>
        </div>
    );
};
export default Activity;
