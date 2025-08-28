import React from "react";
import { Book, Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// Image
import us from "assets/images/flags/us.svg";
import es from "assets/images/flags/es.svg"
import de from "assets/images/flags/de.svg"
import fr from "assets/images/flags/fr.svg"
import jp from "assets/images/flags/jp.svg"
import it from "assets/images/flags/it.svg"
import ru from "assets/images/flags/ru.svg"
import ae from "assets/images/flags/ae.svg"

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="relative pt-10 pb-12 bg-slate-800 dark:bg-zink-900">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                 
                    <div className="py-5 mt-20 border-y border-slate-700">
                        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-12">
                            <div className="md:col-span-2">
                                <div className="relative dropdown">
                                    <button type="button" className="inline-flex items-center gap-3 transition-all duration-200 ease-linear dropdown-toggle btn border-slate-700 group/items focus:border-custom-500" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                         <h6 className="text-base font-medium transition-all duration-200 ease-linear text-slate-300 group-hover/items:text-custom-500"> <a href="https://drive.google.com/file/d/1JUmFjM71ekFpkdCMhy_aLuJXpI0DYzXf/view?usp=sharing" target={"_blank"}>View CV <Book className="inline-block size-4  rtl:mr-1 ltr:ml-1" /></a>
                                  </h6>
                                    </button>

                              
                                </div>
                            </div>
                            <div className="md:col-span-3 md:col-start-10">
                                <ul className="flex items-center gap-3 md:justify-end">
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
                        </div>
                    </div>

                    <div className="mt-12 text-center text-slate-400 dark:text-zink-200 text-16">
                        <p>
                            {new Date().getFullYear()} © <a href="#!" className="underline text-slate-300 dark:text-zink-100">Techietee</a>
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
