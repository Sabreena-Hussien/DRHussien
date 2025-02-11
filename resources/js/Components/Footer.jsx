import React, { useState } from "react";
import footerImg from "../../images/footer1.jpg";
import heroImg from "../../images/heroImg.png";
import { useForm, usePage } from "@inertiajs/react";

const Footer = () => {
    const menu = [
        { key: 0, value: "الرئيسية", href: "/" },
        { key: 1, value: "المقالات", href: "/articles" },
        { key: 2, value: "الانشطة", href: "/activities" },
        { key: 3, value: "من أنا", href: "/whoami" },
        { key: 4, value: "تواصل معي", href: "#contact" },
    ];

    const info = [
        {
            id: 0,
            data: "عدن - مدينة الشعب - الحرم الجامعي",
            title: "العنوان",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 pl-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            id: 1,
            data: "775-504-853",
            title: "الجوال",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 pl-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            id: 2,
            data: "730-039-195",
            title: "الواتساب",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp w-5 h-5 pl-1"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
            ),
        },
        {
            id: 3,
            data: "hussain.almalassi.econ@aden-univ.net",
            title: "البريد الالكتروني",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 pl-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ];

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const { success } = usePage().props;  
    const [isSuccess, setIsSuccess] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        post("/");
    }

    // function handleChange(event) {
    //     console.log(event.target.value);
    // }

    const date = new Date();

    return (
        <div>
            {isSuccess && (
                <div className="alert alert-success">
                    {/* {success} */}
                    <div className='absolute z-30 left-2 top-2 w-60 h-20 bg-white shadow-md opacity-95'>
                        <button className="bg-red-600 w-5 h-5 text-white" onClick={() => {setIsSuccess(false)}}>X</button>
                        <p className="flex text-center justify-center">تم الارسال بنجاح</p>
                    </div>
                </div>
            )}

        <div
            style={{
                backgroundImage: `url(${footerImg})`,
                position: "relative",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
            }}
        >
            
            <div className="absolute bg-theme-900 h-full w-full opacity-60 inset-0"></div>
            <div className="relative z-10 text-white mb-0">
                <div className="container pt-8 pb-16 flex items-center justify-center lg:flex-row flex-col border-b-[1px] border-theme-500">
                    <form className="w-full lg:pb-0 pb-20" onSubmit={handleSubmit}>
                        
                        <h3 className="font-bold text-white text-3xl mb-8">
                            راسلني
                        </h3>
                        <input
                            type="name"
                            placeholder="الاسم"
                            className="bg-theme-100 opacity-70 p-3 mb-4 lg:w-96 w-full text-theme-900 placeholder:text-theme-900 rounded-md outline-none"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                        />

                        <input
                            type="email"
                            placeholder="البريد الالكتروني"
                            value={data.email}
                            className="bg-theme-100 opacity-70 p-3 mb-4 lg:w-96 w-full text-theme-900 placeholder:text-theme-900 rounded-md outline-none"
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                        />
                        <textarea
                            className="bg-theme-100 opacity-70 p-3 mb-4 lg:w-96 w-full h-52 text-theme-900 placeholder:text-theme-900 rounded-md outline-none resize-none"
                            placeholder="الرسالة"
                            value={data.message}
                            onChange={(e) =>
                                setData("message", e.target.value)
                            }
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-theme-500 text-white font-bold rounded-md lg:w-96 w-full p-3 cursor-pointer text-base hover:bg-transparent hover:border hover:border-theme-100"
                            disabled={processing}
                            onClick={() => setIsSuccess(true)}
                        >ارسال</button>
                    </form>
                    <div className="w-full flex flex-col items-center" id="contact">
                        <img
                            className="h-20 w-20 mb-2 rounded-full"
                            src={heroImg}
                        />
                        <h3 className=" text-2xl mb-8 font-bold">
                            د. حسين سعيد الملعسي
                        </h3>
                        <ul className="flex flex-row mb-10 ">
                            {menu.map((m, key) => (
                                <li
                                    key={key}
                                    className=" lg:pl-10 pl-4 hover:text-theme-500"
                                >
                                    <a href={m.href}>{m.value}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex lg:flex-row flex-col lg:flex-wrap">
                            {info.map((i) => (
                                <div
                                    key={i.id}
                                    className="mb-4 lg:w-1/2 w-full"
                                >
                                    <div className="flex items-center">
                                        <div>{i.icon}</div>
                                        <div className="font-bold">
                                            {i.title}
                                        </div>
                                    </div>
                                    <div>{i.data}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-8 text-center">Copyright @ {date.getFullYear()} </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;
