import React from "react";
import { MoveRight } from "lucide-react";
import { Book, Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// Image
import about from "assets/images/landing/about.jpeg";

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="relative py-24 xl:py-32" id="contact">
                <div className="absolute bottom-0 right-0 size-64 bg-custom-500/10 blur-3xl"></div>
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid items-center grid-cols-1 gap-6 mt-20 lg:grid-cols-12">
                        <div className="relative lg:col-span-5">
                            <div className="relative before:absolute before:h-full before:w-full before:border-[15px] before:border-double before:border-green-500/10 before:-top-16 lg:before:-right-16" data-aos="zoom-out-up">
                                <img src={about} alt="" className="relative inline-block rounded-md" data-aos="zoom-out-up" data-aos-delay="500" />
                            </div>
                        </div>
                     
                     <div className="ml-auto lg:col-span-5 lg:col-start-16 ">
                      
                        <h1 className="mb-0 leading-normal capitalize text-center pb-4">Contact Me</h1>
                     <div className="">
                                <ul className="flex items-center gap-3 md:justify-center">
                                    <li>
                                        <a href="https://github.com/techietee" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Github className="size-4"></Github></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/fatimabello/" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Linkedin className="size-4"></Linkedin></a>
                                    </li>
                                    {/* <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Instagram className="size-4"></Instagram></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Twitter className="size-4"></Twitter></a>
                                    </li> */}
                                    <li>
                                        <a href="#!" className="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500">
                                            <Youtube className="size-4"></Youtube></a>
                                    </li>
                                </ul>
                            </div>
                             {/*   <p className="mb-2 text-purple-500 text-15" data-aos="fade-left" data-aos-delay="300">About Us</p>
                            <h1 className="mb-3 leading-normal capitalize" data-aos="fade-left" data-aos-delay="400">We Provide high Quality shoes</h1>
                            <p className="mb-5 text-lg text-slate-500 dark:text-zinc-400" data-aos="fade-left" data-aos-delay="500">Look for a shoe with solid construction that will give your feet the support they need. Next, look for quality materials that will make your feet comfortable and keep them healthy.</p>
                            <p className="mb-5 text-lg text-slate-500 dark:text-zinc-400" data-aos="fade-left" data-aos-delay="500">Low-quality shoes may skimp on stitching, or use low quality glue that's prone to coming apart. A higher-quality shoe will use advanced construction to ensure that the shoe holds up over time, and also eliminate any spots.</p>
                            <button type="button" className="px-8 py-3 text-white border-0 text-15 btn bg-gradient-to-r from-custom-500 to-purple-500 hover:text-white hover:from-purple-500 hover:to-custom-500" data-aos="fade-left" data-aos-delay="600">
                                Explore Now <MoveRight className="inline-block size-4 align-middle rtl:mr-1 ltr:ml-1"></MoveRight></button>
                       */}
                                </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutUs;