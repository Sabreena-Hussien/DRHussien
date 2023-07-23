import React from "react";

const Price = () => {
    const numbers = [
        {
            id: 0,
            num: "02",
            text: "شهادات تقديرية",
        },
        {
            id: 1,
            num: "02",
            text: "المناصب العلمية",
        },
        {
            id: 2,
            num: "08",
            text: "الأبحاث المنشورة",
        },
        {
            id: 3,
            num: "15",
            text: "المقالات المنشورة",
        },
        {
            id: 4,
            num: "02",
            text: "النشاطات الاجتماعية",
        },
        {
            id: 5,
            num: "02",
            text: "النشاطات السياسية",
        },
    ];
    return (
        <div className="container py-16 flex justify-center items-center lg:flex-row flex-col">
            {numbers.map((n, key) => (
                <div key={key} className="flex flex-col lg:px-9 px-4 my-4 justify-center items-center ">
                    <p className="text-6xl text-theme-500 font-bold mb-6">{n.num}</p>
                    <p className=" text-theme-900 ">{n.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Price;
