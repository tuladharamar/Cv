import { Link } from "react-router-dom";
import skills from "../Constant/skills";
import img from '../assets/Img_2.png'
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const Page = () => {
    const [splash, setSpalsh] = useState(false);

    useEffect(()=>{
        setSpalsh(true);
        const storage = localStorage.getItem('dataStore');
        if(storage){
            setSpalsh(false)
        }
        setTimeout(()=>{
            localStorage.setItem('dataStore', 'true')
            setSpalsh(false);
        }, 2000)
    }, [])
    return (
        <div className="bg-linear-to-bl from-red-300 to-white h-full min-h-screen">
            {splash ? (
                <div className="flex justify-center items-center h-screen">
                    <Atom color="#32cd32" size="medium" text="" textColor="" />
                </div>
            ): (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-10">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1 className="font-extrabold text-2xl sm:text-3xl pb-3 pt-6">
                            Amar Tuladhar
                        </h1>
                        <h3 className="font-bold text-lg sm:text-xl pb-4">
                            Full Stack Developer
                        </h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                            <a href="mailto:tuladharamar@gmail.com" className="text-base sm:text-lg text-blue-500">
                                tuladharamar@gmail.com
                            </a>

                            <p className="hidden sm:block text-2xl">|</p>

                            <a href="tel:9849714802" className="text-base sm:text-lg text-red-500">
                                9849714802
                            </a>
                        </div>
                    </div>
                    <div className=" ">
                        <img src={img} alt="Profile" className="w-40 rounded-md shadow-2xs"/>
                    </div>
                </div>

                <hr className="my-6" />

                {/* About Me */}
                <div>
                    <h1 className="pt-6 font-bold text-xl sm:text-2xl pb-3">
                        About Me
                    </h1>
                    <p className="font-semibold text-sm sm:text-base">
                        Passionate React developer with experience building modern web applications.
                        Focused on performance, accessibility, and clean code.
                    </p>
                </div>

                {/* Experience */}
                <div className="pt-8">
                    <h1 className="pb-4 font-bold text-xl sm:text-2xl">
                        Experience
                    </h1>

                    {/* Job 1 */}
                    <div>
                        <h2 className="font-semibold">
                            Lab Assistant - Kathmandu Model College
                        </h2>
                        <p className="text-sm text-gray-500">2011 - 2012</p>
                        <ul className="list-disc pl-5 sm:pl-10 py-2 text-sm sm:text-base">
                            <li>Preparing, weighing, and analyzing samples.</li>
                            <li>Cleaning, sterilizing, and calibrating equipment.</li>
                            <li>Assisting with student labs and instruction.</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="pt-4">
                        <h2 className="font-semibold">
                            Content Creator - Midas Edu
                        </h2>
                        <p className="text-sm text-gray-500">2016-2021</p>
                        <ul className="list-disc pl-5 sm:pl-10 py-2 text-sm sm:text-base">
                            <li>Explained academic topics in simple ways.</li>
                            <li>Developed communication and digital skills.</li>
                            <li>Motivated students through content.</li>
                        </ul>
                    </div>

                    {/* Job 3 */}
                    <div className="pt-4">
                        <h2 className="font-semibold">
                            Tasty Treat Cafe - Owner
                        </h2>
                        <p className="text-sm text-gray-500">2022-2024</p>
                        <ul className="list-disc pl-5 sm:pl-10 py-2 text-sm sm:text-base">
                            <li>Managed daily operations and staff.</li>
                            <li>Maintained quality service and environment.</li>
                            <li>Handled branding and promotions.</li>
                        </ul>
                    </div>
                </div>

                {/* Skills */}
                <div className="pt-8">
                    <h1 className="font-bold pb-4 text-xl sm:text-2xl">
                        Skills
                    </h1>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
                        {skills.map((item) => (
                            <li
                                key={item.id}
                                className="bg-gray-400 px-4 py-2 text-center rounded-full text-white font-bold hover:bg-gray-300 cursor-pointer text-sm sm:text-base shadow-xl"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                {/*education*/}
                <div className="">
                    <h1 className="text-xl font-bold pt-10 sm:text-2xl">Education</h1>
                    <ul className="list-disc pl-5 sm:pl-10 py-2 text-sm sm:text-base">
                        <li className="">+2 <span className="">Nation Intregrated College</span></li>
                        <li className="">BSC <span className="">Tri-chandra Campus</span></li>

                    </ul>
                </div>
                {/*links*/}
                <div className="">
                    <h1 className="text-xl sm:text-2xl font-bold pt-10 pb-5">Links</h1>
                    <h1 className=" font-semibold"><Link to ="https://portfolio-eight-teal-74.vercel.app" target="_blank">Portfolio</Link></h1>
                    <h1 className="font-semibold"> <Link to ="https://github.com/tuladharamar" target="_blank">Github</Link></h1>
                </div>
            </div>
            )}
            
        </div>
    );
};

export default Page;