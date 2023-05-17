import React from "react";
import Slide from "../component/Slide";
import MoreSearch from "../template/MoreSearch";
import QuickAccess from "../component/QuickAccess";
import FindHere from "../component/FindHere";
import News from "../component/News";
import Portals from "../component/Portals";
import App from "../component/App";

const Home = () => {
    return (
        <>
            <Slide customClass="mt-0 md:mt-[40px]" customClassImg="w-full h-[350px]" customClassImgMobile="w-full h-[650px]"/>
            <MoreSearch />
            <QuickAccess />
            <FindHere />
            <News />
            <Portals />
            <App />
        </>
    );
};

export default Home;