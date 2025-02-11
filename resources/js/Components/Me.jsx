import React from "react";

const Me = ({abouts}) => {
    return (
        <div className="container mt-44 mb-16">
            <h3 className="text-theme-900 font-bold text-3xl mb-4">من أنا؟</h3>
            <p className="text-theme-900 text-right text-lg">
                {abouts.about_me_long}
            </p>
        </div>
    );
};

export default Me;
