import React from "react";
import { Star } from "lucide-react";

// Image
import product16 from "assets/images/product/img-16.png";
import product17 from "assets/images/product/img-17.png";
import product18 from "assets/images/product/img-18.png";
import product19 from "assets/images/product/img-19.png";

const OurProduct = () => {
 const techStacks = [
        {
          name: "HTML",
        //   img: "",
          text: "Mock Up",
        },
      
        {
          name: "CSS",
        //   img: "",
          text: "Style Sheet",
        },
        {
          name: "JavaScript (ES6+)",
        //   img: "",
          text: "Programming Language",
        },
        {
          name: "React.js",
        //   img: "",
          text: "Framework",
        },
        {
          name: "Vue.js",
        //   img: "",
          text: "Framework",
        },
        {
          name: "Redux/Context API",
          img: "",
          text: "ToolKit",
        },
      
        {
          name: "TypeScript",
        //   img: "",
          text: "Programming Language",
        },
        {
          name: "Responsive Design",
        //   img: "",
          text: "Tech Skill",
        },
        {
          name: "RESTful APIs",
        //   img: "",
          text: "Technology",
        },
        {
          name: "Git/GitHub",
        //   img: "",
          text: "Tool",
        },
        {
          name: "Nextjs",
        //   img: "",
          text: "Programming Language",
        },
        {
          name: "WordPress",
        //   img: "",
          text: "Headless CMS",
        },
        {
          name: "SASS/SCSS/Tailwind",
        //   img: "",
          text: "Style Sheet/CSS Library",
        },
        {
          name: "Jira/Agile/Scrum",
        //   img: "",
          text: "Tool/Technology",
        },
        {
          name: "UX/UI Design",
        //   img: "",
          text: "Technology",
        },
        {
          name: "Debugging",
        //   img: "",
          text: "Skill",
        },
        {
          name: "Jest, Cypress",
          img: "",
          text: "Test Tools",
        },
      ];




    return (
        <React.Fragment>
            <section className="relative py-24 xl:py-32" id="product">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="mx-auto text-center xl:max-w-3xl">
                        <h1 className="mb-0 leading-normal capitalize">Tech Stack</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 xl:grid-cols-4">
                        {/* <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={""} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.8)</p>
                                <h5><a href="#!">Green Sneakers Skate</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$299.99</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product17} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.4)</p>
                                <h5><a href="#!">Nike Running Shoes</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$129.49</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product18} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.9)</p>
                                <h5><a href="#!">Nike Air Max Sneakers Shoe</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$149.99</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-zinc-800 dark:to-zinc-900" data-aos="fade-up" data-aos-easing="linear">
                            <img src={product19} alt="" className="mx-auto h-52" />
                            <div className="mt-3">
                                <p className="mb-3">
                                    <Star className="inline-block size-4 text-yellow-500 align-middle ltr:mr-1 rtl:ml-1"></Star> (4.6)</p>
                                <h5><a href="#!">Dunk Sneakers Skate shoe</a></h5>

                                <div className="flex items-center gap-3 mt-3">
                                    <h6 className="text-16 grow">$174.65</h6>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>  */}
                    </div>
                    <div className="wrapper-left  z-50 md:flex items-center  ">
     

        <div className=" w-full overflow-x-hidden scrollbar scroller">
          <div className="flex gap-5 flex-row-reverse my-5">
            <div className="flex gap-5 scroll_container" data-direction="right">
              {techStacks.slice(0, 8).map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="gradient flex-shrink-0 w-[250px] sm:w-[270px] text-textDark h-[70px] gap-5 rounded-2xl flex items-center justify-center"
                  >
                    {/* <img
                      src={stack.img}
                      alt="techStack-logo"
                      className="w-[40px]"
                    /> */}
                    <div>
                      <h5 className="my-1 text-[1.1rem]">{stack.name}</h5>
                      <p className="text-small">{stack.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 scroll_container" data-direction="right">
              {techStacks.slice(0, 8).map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="gradient flex-shrink-0 w-[250px] sm:w-[270px] text-textDark h-[70px] gap-5 rounded-2xl flex items-center justify-center"
                  >
                    {/* <img
                      src={stack.img}
                      alt="techStack-logo"
                      className="w-[40px]"
                    /> */}
                    <div>
                      <h5 className="my-1 text-[1.1rem]">{stack.name}</h5>
                      <p className="text-small">{stack.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="flex gap-5 scroll_container">
              {techStacks.slice(6, 13).map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="gradient flex-shrink-0 w-[250px] sm:w-[270px] text-textDark h-[70px] gap-5 rounded-2xl flex items-center justify-center"
                  >
                    {/* <img
                      src={stack.img}
                      alt="techStack-logo"
                      className="w-[40px]"
                    /> */}
                    <div>
                      <h5 className="my-1 text-[1.1rem]">{stack.name}</h5>
                      <p className="text-small">{stack.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 scroll_container">
              {techStacks.slice(6, 13).map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="gradient flex-shrink-0 w-[250px] sm:w-[270px] text-textDark h-[70px] gap-5 rounded-2xl flex items-center justify-center"
                  >
                    {/* <img
                      src={stack.img}
                      alt="techStack-logo"
                      className="w-[40px]"
                    /> */}
                    <div>
                      <h5 className="my-1 text-[1.1rem]">{stack.name}</h5>
                      <p className="text-small">{stack.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-5 flex-row-reverse my-5">
            <div className="flex gap-5 scroll_container" data-direction="right">
              {techStacks.slice(10, 17).map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="gradient flex-shrink-0 w-[250px] sm:w-[270px] text-textDark h-[70px] gap-5 rounded-2xl flex items-center justify-center"
                  >
                    {/* <img
                      src={stack.img}
                      alt="techStack-logo"
                      className="w-[40px]"
                    /> */}
                    <div>
                      <h5 className="my-1 text-[1.1rem]">{stack.name}</h5>
                      <p className="text-small">{stack.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="flex gap-5 scroll_container "
              data-direction="right"
            >
              {techStacks.slice(10, 17).map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="gradient flex-shrink-0 w-[250px] sm:w-[270px] text-textDark h-[70px] gap-5 rounded-2xl flex items-center justify-center"
                  >
                    {/* <img
                      src={stack.img}
                      alt="techStack-logo"
                      className="w-[40px]"
                    /> */}
                    <div>
                      <h5 className="my-1 text-[1.1rem]">{stack.name}</h5>
                      <p className="text-small">{stack.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

                </div>
            </section>
        </React.Fragment>
    );
}

export default OurProduct;