import React from "react";
import Activity from "../Components/Activity";
import Article from "../Components/Article";
import CV from "../Components/CV";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import Me from "../Components/Me";
import Price from "../Components/Price";

const Home = ({activities, articles, abouts}) => {
    return (
        <Layout abouts={abouts}>
            <Hero />
            <Me abouts={abouts} />

            <Price />
            <Article articles={articles} />
            <Activity activities={activities} />
        </Layout>
    );
};

export default Home;
