import Layout from "../Components/Layout";
import React from "react";

const Contact = () => {
    const contactInfo = [
        {
            id: 0,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-theme-500"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            title: "العنوان",
            info: "عدن - الشعب - الحرم الجامعي",
        },
        {
            id: 1,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-theme-500"
                >
                    <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            title: "الجوال",
            info: "730039195",
        },
        {
            id: 2,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp w-6 h-6 pl-1 text-theme-500"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
            ),
            title: "واتساب",
            info: "730039195",
        },
        {
            id: 3,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-theme-500"
                >
                    <path
                        fillRule="evenodd"
                        d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            title: "البريد الالكتروني",
            info: "hussain.almalassi.econ@aden-univ.net",
        },
    ];

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <Layout>
            <div className="container flex-col w-full mt-16">
                <h2 className="text-theme-900 text-3xl font-bold  mb-6">
                    تواصل معي
                </h2>
                <div className="flex lg:flex-row flex-col mb-14">
                    {contactInfo.map((c, key) => (
                        <div
                            key={key}
                            className="mb-4 lg:w-1/2 w-full flex-col flex items-center"
                        >
                            <div className="flex items-center mb-2">
                                <div className="ml-1">{c.icon}</div>
                                <div className="font-bold text-2xl text-theme-500">
                                    {c.title}
                                </div>
                            </div>
                            <div className="text-theme-900 text-lg">
                                {c.info}
                            </div>
                        </div>
                    ))}
                </div>
                <form className="w-full mb-16">
                    <h3 className="font-bold text-theme-900 text-3xl mb-6">
                        راسلني
                    </h3>
                    <input
                        type="text"
                        placeholder="الاسم"
                        className="bg-theme-100  p-3 mb-4 lg:w-96 lg:ml-3 w-full text-theme-900 placeholder:text-theme-900 rounded-md outline-none border-none"
                        // value={this.state.value}
                        // onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        placeholder="البريد الالكتروني"
                        className="bg-theme-100  p-3 mb-4 lg:w-96 lg:ml-3 w-full text-theme-900 placeholder:text-theme-900 rounded-md outline-none border-none"
                    />
                    <input
                        type="email"
                        placeholder="الموضوع"
                        className="bg-theme-100  p-3 mb-4 lg:w-96 lg:ml-0 w-full text-theme-900 placeholder:text-theme-900 rounded-md outline-none border-none"
                    />
                    <textarea
                        className="bg-theme-100  p-3 mb-4  w-full h-52 text-theme-900 placeholder:text-theme-900 rounded-md outline-none resize-none border-none"
                        defaultValue="الرسالة"
                    ></textarea>
                    <input
                        type="submit"
                        value="ارسال"
                        className="bg-theme-500 text-white font-bold rounded-md lg:w-40 w-full p-3 cursor-pointer text-base hover:bg-white hover:border-2 hover:border-theme-500 hover:text-theme-500 "
                        onChange={handleChange}
                    />
                </form>
            </div>
        </Layout>
    );
};

export default Contact;
