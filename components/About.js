"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
    {
        id: 11,
        data: [
            { id: 1, type: "First Name", value: "Kosisochukwu" },
            { id: 2, type: "Last Name", value: "Afoenyi" },
            { id: 3, type: "Age", value: "30 Years" },
            { id: 4, type: "Nationality", value: "Nigerian" },
            { id: 5, type: "Freelance", value: "Available" },
            { id: 6, type: "Address", value: "2B crown court estate, Lekki, Lagos." },
        ],
    },
    {
        id: 12,
        data: [
            { id: 7, type: "Phone", value: "+234 806 4954 840" },
            { id: 8, type: "Email", value: "kafoenyi@gmail.com" },
            { id: 9, type: "LinkedIn", value: "https://www.linkedin.com/in/kosisochukwu-afoenyi-368202124/" },
            { id: 9, type: "Upwork", value: "https://www.upwork.com/freelancers/~0131b95445923c46da" },
            { id: 10, type: "Langages", value: "English, Igbo" },
        ],
    },
];

const counters = [
    {
        id: 1,
        title: 'years of <span className="block">experience</span>',
        value: "6",
    },
    {
        id: 2,
        title: 'completed <span className="block">projects</span>',
        value: "10",
    },
    {
        id: 3,
        title: 'happy <span className="block">clients</span>',
        value: "6",
    },
    { id: 4, title: 'certifications <span className="block">achieved</span>', value: "1" },
];

const experiences = [
    {
        id: 1,
        date: "2023 - Present",
        title: "Full stack developer",
        company: "Freelance",
        desc: ["• Granted a project to create a bicycle builder app without previous knowledge of the builder tools, and then in the end, got a 5-star rating from the client.",
            "• Offered direct employment by a client after carrying out some front end animation work.",
            "• Demonstrated expertise and commitment by undertaking a $100 project as part of an interview process, earning praise from the client and initiation of contract."],
    },
    {
        id: 2,
        date: "2021 - 2023",
        title: "Front end engineer",
        company: "Plato",
        desc: ["• Steered the ownership and maintenance of the company website. Structuring it such that it requires only about 0 - 10% of a developer's involvement for its update.",
            "• Demonstrated adaptability and quick learning by seamlessly transitioning from front end to support backend work if the need arises.",
            "• Created working scrape scripts for about 100 extension providers, and also worked on solutions to bypass captchas and bot detectors."],
    },
    {
        id: 3,
        date: "2020 - 2021",
        title: "Front end developer",
        company: "Freelance",
        desc: ["• Started my first upwork freelance journey and got my first job as a junior developer, and received my first 5-star rating from the client at the end for a job well done"],
    },
    {
        id: 3,
        date: "2019",
        title: "Front end intern",
        company: "HNG Internship",
        desc: [""],
    },
];

const educations = [
    {
        id: 1,
        date: "2022",
        title: "Project Management Professional",
        unv: "Project Management Institute",
        desc: "",
    },
    {
        id: 2,
        date: "2015",
        title: "Bachelor Degree",
        unv: "University of Nigeria, Nsukka",
        desc: "Department of Electronics Engineering",
    },
];

const skills = [
    { id: 1, name: "html", value: "75" },
    { id: 2, name: "css", value: "89" },
    { id: 3, name: "javascript", value: "91" },
    { id: 4, name: "typescript", value: "70" },
    { id: 5, name: "react.js", value: "95" },
    { id: 6, name: "next.js", value: "83" },
    { id: 7, name: "node.js", value: "79" },
    { id: 8, name: "tailwind css", value: "86" },
];

const About = () => {
    const { dark } = useContext(TunisContext);
    return (
        <SectionContainer id="about">
            <div className="w-full">
                {/* Section Title Starts */}
                <SectionTitle
                    bigTitle={"resume"}
                    colorTitle={"me"}
                    normalTitle={"about"}
                />
                {/* Section Title Ends */}
                <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
                    <div className="flex flex-row down-lg:flex-col">
                        {/* Personal Informations Starts */}
                        <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
                            <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 text-white font-semibold">
                                personal infos
                            </h3>
                            <img
                                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                                src="/assets/img/kosiso-picture.png"
                                alt=""
                            />
                            <div className="flex justify-between xs:justify-start font-Open-sans">
                                {bio.map((item) => (
                                    <div
                                        className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                                        key={item.id}
                                    >
                                        {item.data.map((bio) => (
                                            <div key={bio.id} style={{ maxWidth: "15rem" }}>
                                                <span className="opacity-80">{bio.type} : </span>
                                                <span className="xs:block custom-md-2:block font-semibold break-words" style={{ overflowWrap: "break-word" }}>
                                                    {bio.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <a
                                className="button group mt-30 overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                                href="assets/resume/CV-Kosisochukwu-v6.pdf"
                                download="CV-Kosisochukwu-v6.pdf"
                            >
                                <span
                                    className={`relative z-20 text-${dark
                                        ? "white"
                                        : "black-6 group-hover:text-white transition-all duration-300"
                                        }`}
                                >
                                    download cv
                                </span>
                                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-download bg-accent" />
                            </a>
                        </div>
                        {/* Personal Informations Ends */}
                        {/* Facts Starts */}
                        <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
                            <div className="flex down-lg:-mx-15 flex-wrap">
                                {counters.map((counter) => (
                                    <div className="w-1/2 px-15" key={counter.id}>
                                        <div
                                            className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                                                } rounded-5 mb-30 xs:mb-25`}
                                        >
                                            <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                                                {counter.value}
                                            </h3>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: counter.title,
                                                }}
                                                className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                                            ></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Facts Ends */}
                    </div>
                    <hr
                        className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
                            } mx-auto max-w-40prcent mt-70 mb-55`}
                    />
                    <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
                        my skills
                    </h3>
                    {/* Skills Starts */}
                    <div className="flex w-full flex-wrap">
                        {skills.map((skill) => (
                            <div
                                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                                key={skill.id}
                            >
                                <div
                                    className={`c100 p${skill.value} float-none mx-auto ${dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                                        }`}
                                >
                                    <span className={dark ? "" : "!text-black-6"}>
                                        {skill.value}%
                                    </span>
                                    <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                    </div>
                                </div>
                                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                                    {skill.name}
                                </h6>
                            </div>
                        ))}
                    </div>
                    {/* Skills Ends */}
                    <hr
                        className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
                            } mx-auto max-w-40prcent mt-35 mb-55`}
                    />
                    <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
                        experience &amp; education
                    </h3>
                    {/* Resume Starts */}
                    <div className="flex down-sm:flex-col from-sm:mb-40">
                        {/* Experience Starts */}
                        <div className="w-1/2 down-sm:w-full">
                            <ul>
                                {experiences.map((experience) => (
                                    <li
                                        key={experience.id}
                                        className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                                            } after:w-1 after:h-full`}
                                    >
                                        <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span
                                            className={`text-${dark ? "white" : "black-6"
                                                } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                                                } opacity-80 font-Open-sans uppercase`}
                                        >
                                            {experience.date}
                                        </span>
                                        <h5 className="uppercase text-fs-18 mt-7 mb-10">
                                            {experience.title}
                                            <span
                                                className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                                                    } before:left-7 before:top-9 before:opacity-80`}
                                            >
                                                {experience.company}
                                            </span>
                                        </h5>
                                        <ul
                                            className={`font-Open-sans ${dark ? "text-light-grey" : ""
                                                } text-fs-14`}
                                        >
                                            {experience.desc.map((item, index) => (
                                                <div key={index}>
                                                    <li key={index}>{item}</li>
                                                    <br />
                                                </div>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Experience Ends */}
                        {/* Education Starts */}
                        <div className="w-1/2 down-sm:w-full">
                            <ul>
                                {educations.map((education) => (
                                    <li
                                        key={education.id}
                                        className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                                            } after:w-1 after:h-full`}
                                    >
                                        <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>
                                        <span
                                            className={`text-${dark ? "white" : "black-6"
                                                } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                                                } opacity-80 font-Open-sans uppercase`}
                                        >
                                            {education.date}
                                        </span>
                                        <h5 className="uppercase text-fs-18 mt-7 mb-10">
                                            {education.title}
                                            <span
                                                className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                                                    } before:left-7 before:top-9 before:opacity-80`}
                                            >
                                                {education.unv}
                                            </span>
                                        </h5>
                                        <p
                                            className={`font-Open-sans ${dark ? "text-light-grey" : ""
                                                } text-fs-14`}
                                        >
                                            {education.desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Education Ends */}
                    </div>
                    {/* Resume Ends */}
                </div>
            </div>
        </SectionContainer>
    );
};
export default About;
