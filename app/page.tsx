"use client";

import {useEffect} from 'react'
import Image from "next/image";
import carerDoorPic from "../public/carerDoor.webp";
import LinkButtonLight from "./components/linkButtonLight";
import AnimationOnScroll from "./components/animationOnScroll";

// Pics
import carerKneelingPic from "../public/carerKneelingResident.webp";
import leavesPic from "../public/leaves.webp";
import motherPic from "../public/motherDaughter.webp";
import SectionHeadingOrange from "./components/headings/headingOrange";

// Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const removeClassesFromImage = (img: HTMLImageElement, removeClasses: string[]) => {
    removeClasses.forEach((value: string) => {
        img.classList.remove(value);
    });
};

const HomePage = () => {
    useEffect(() => {
    }, []);

    return (
        <>
            {/* Landing Hero */}
            <section className="relative h-[calc(100svh-60px)] py-10 z-0">
                {/* Tree */}
                <div className="absolute -top-10 w-8/12 md:w-8/12 lg:-top-40 right-0 lg:w-[50vw] h-auto z-20">
                    <Image
                        className="brightness-125 transition-all duration-1000 opacity-0 translate-x-6"
                        src={leavesPic}
                        alt="Autumn Leaves"
                        priority
                        // quality={5}
                        unoptimized
                        onLoad={(img) => {
                            removeClassesFromImage(img.currentTarget, [
                                "opacity-0",
                                "translate-x-6",
                            ]);
                        }}
                        placeholder="empty"
                    />
                </div>

                {/* Hero */}
                <div className="container p-0 bg-cyan-600 mx-auto h-full z-10 overflow-hidden">
                    {/* Flex Columns - 2 rows */}
                    <div className="h-full flex flex-col">
                        {/* --- Top row --- */}
                        <div className="flex flex-row md:shrink basis-0">
                            {/* Company Name */}
                            <div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row font-sans pt-2 lg:pt-10 ">
                                {/* Logo */}
                                <div className="relative w-24 h-24 lg:w-auto lg:h-full lg:min-w-[200px] m-10 md:m-0 md:ml-4">
                                    <Image
                                        src={"/ocr_128.svg"}
                                        className="opacity-0 scale-0 transition-all duration-1000"
                                        alt="Overseas Care Recuitment"
                                        fill
                                        priority
                                        onLoad={(img) => {
                                            removeClassesFromImage(img.currentTarget, [
                                                "opacity-0",
                                                "scale-0",
                                            ]);
                                        }}
                                    />
                                </div>

                                {/* Flexbox break line on mobile*/}
                                <div className="basis-[100%] h-0"></div>

                                {/* Coloured letters */}
                                <div className="transition-all duration-200 flex-col ml-4 basis-full md:basis-0 space-y-4 lg:space-y-8 text-xl md:shrink md:text-5xl text-white text-spacing-4 tracking-[1rem] lg:tracking-[2rem]">
                                    <div>
                                        <span className="text-orange-400 animate-fadeIn1" data-animate="ocr" data-animate-id="1">O</span>
                                        <span className=' animate-fadeIn4' data-animate="ocr-text" >VERSEAS</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400  animate-fadeIn2" data-animate="ocr" data-animate-id="2" >C</span>
                                        <span className=' animate-fadeIn4' data-animate="ocr-text">ARE</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400  animate-fadeIn3" data-animate="ocr" data-animate-id="3" >R</span>
                                        <span className=' animate-fadeIn4' data-animate="ocr-text">ECRUITMENT</span>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space to avoid tree on desktop*/}
                            <div className=" hidden lg:flex-auto"></div>
                        </div>

                        {/* --- Bottom row --- */}
                        <div className="flex lg:flex-row flex-col-reverse flex-grow">
                            {/* Image */}
                            <div className="relative flex-grow items-end flex flex-row lg:flex-shrink-0">
                                <Image
                                    className="bottom-0 left-0 transition-all duration-1000 opacity-0 -translate-x-6"
                                    src={motherPic}
                                    alt="Caring for parent"
                                    priority
                                    unoptimized
                                    width={600}
                                    placeholder="empty"
                                    onLoad={(img) => {
                                        removeClassesFromImage(img.currentTarget, [
                                            "opacity-0",
                                            "-translate-x-6",
                                        ]);
                                    }}
                                />
                            </div>

                            {/* Subtext */}
                            <div className="animate-fadeIn5 lg:grow flex-auto flex flex-col items-end justify-end mr-10 lg:mr-20 lg:mb-20 font-serif text-lg lg:text-2xl text-white lg:min-w-[200px]">
                                <div>Helping overseas care professionals</div>
                                <u className="underline underline-offset-8 decoration-orange-400">
                                    find employment in the{" "}
                                    <span className="font-bold text-orange-400">UK</span>
                                </u>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company description */}
            <SectionHeadingOrange>
                <AnimationOnScroll
                    classNameInView="transition-opacity ease-in duration-300 opacity-100"
                    classNameNotInView="transition-opacity ease-in duration-300 opacity-0"
                    triggerThreshold={0.1}
                >
                    <p className="font-sans text-black text-justify ">
                        At Overseas Care Recruitment, we specialise in{" "}
                        <span className="font-semibold">healthcare sector recruitment</span>, leveraging
                        our extensive market knowledge to meet your unique needs. Whether you&apos;re
                        looking to fill a single local vacancy or launch a large-scale national
                        campaign, we offer a tailored approach.
                    </p>
                </AnimationOnScroll>                
            </SectionHeadingOrange>

            {/* Call to actions */}
            <section>
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-20">
                    <div className="relative lg:w-6/12">
                        <AnimationOnScroll
                            classNameInView="transition-all ease-in duration-300 opacity-100"
                            classNameNotInView="transition-all ease-in duration-300 opacity-0"
                            triggerThreshold={0.1}>

                            <Image
                                src={carerDoorPic}
                                alt="Care Worker standing in front of door"
                                unoptimized
                                placeholder="blur"
                                />
                        </AnimationOnScroll>
                    </div>
                    <div className="lg:w-6/12 flex flex-col justify-center justify-items-center mt-8 pl-10 pr-10 lg:pr-20 text-left">
                         <AnimationOnScroll
                            classNameInView="transition-opacity ease-in duration-300 opacity-100"
                            classNameNotInView="transition-opacity ease-in duration-300 opacity-0"
                            triggerThreshold={0.1}>

                            <h3 className="font-serif font-semibold text-xl mb-4 text-center">
                                Personalised Support for Your Journey to Job Success
                            </h3>
                            <p className="font-sans text-justify text-base">
                                Our clients appreciate our expertise and market knowledge, knowing that
                                we exclusively cater to their needs. We take pride in maintaining clear
                                and open communication throughout the entire recruitment process. By
                                attentively listening to both our clients and candidates, we guarantee
                                optimal placements and unwavering support every step of the way. <br />
                                <br />
                                Count on us to provide customised solutions, backed by our extensive
                                industry experience and a strong commitment to your success.
                            </p>
                            <div className="flex flex-row justify-center mt-4">
                                <LinkButtonLight
                                    buttonText="APPLY"
                                    link="/consultancy"
                                />
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-0">
                    <div className="lg:w-6/12 flex flex-col justify-center justify-items-center pr-10 pl-10 lg:pl-20">

                        <AnimationOnScroll
                            classNameInView="transition-opacity ease-in duration-700 opacity-100"
                            classNameNotInView="transition-opacity ease-in duration-700 opacity-0"
                            triggerThreshold={0.1}>

                            <h3 className="mt-8 font-serif font-semibold text-xl mb-4 text-center">
                                Your Trusted Partner in Healthcare Recruitment
                            </h3>
                            <p className="text-base text-justify font-sans">
                                At our core, we are specialists in the healthcare, medical, and nursing
                                sector. With a deep understanding of this industry, we are firmly
                                established as a leading service provider, driven by our market focus
                                and unrivaled expertise.
                                <br />
                                <br />
                                We only work with carefully selected employers, to make sure that our
                                candidates will be well supported and in good care.
                                <br />
                                <br />
                                If you are an employer looking to join our exclusive panel please
                                contact us.
                            </p>
                            <div className="flex flex-row justify-center mt-4">
                                <LinkButtonLight buttonText="FIND CANDIDATES" />
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="relative lg:w-6/12">
                        <AnimationOnScroll
                            classNameInView="transition-all ease-in duration-300 opacity-100"
                            classNameNotInView="transition-all ease-in duration-300 opacity-0"
                            triggerThreshold={0.1}>

                            <Image
                                src={carerKneelingPic}
                                alt="Careworker holding hands with elderly resident"
                                unoptimized
                                placeholder="blur"
                                />
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>

            {/* Company History */}
            <div className="mt-10">
                <SectionHeadingOrange>
                    <AnimationOnScroll
                        classNameInView="transition-opacity ease-in duration-700 opacity-100"
                        classNameNotInView="transition-opacity ease-in duration-700 opacity-0"
                        triggerThreshold={0.1}>

                        <h3 className="font-serif font-semibold text-xl text-center">About Us</h3>
                        <p className="lg:px-20 lg:py-10 text-base font-sans text-black text text-justify">
                            Established in 2004 as Overseas Care Recruitment (formerly known as
                            Worldwide Labour Placement & Consultancy Specialists), we are a UK-based
                            agency specialising in overseas placements. With dedicated divisions in
                            Healthcare Solutions we cater to both public and private sectors, offering 
                            positions from entry-level to executive roles. Our mission is to swiftly match 
                            candidates with the right job, while our vision is to create rewarding 
                            experiences for all stakeholders.
                        </p>
                    </AnimationOnScroll>
                </SectionHeadingOrange>
            </div>
        </>
    );
};
export default HomePage;
