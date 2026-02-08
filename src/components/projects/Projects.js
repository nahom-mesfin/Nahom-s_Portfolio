// import React from "react";
// import Title from "../layouts/Title";
// import { TeacherPES, weather, Tender, ehel, yene } from "../../assets/index";
// import ProjectsCard from "./ProjectsCard";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full py-20 border-b-[1px] border-b-black">
//       <div className="flex justify-center items-center text-center">
//         <Title title="VISIT MY PORTFOLIO " des="My Projects" />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
//         <ProjectsCard
//           title="DBU Teacher Performance Evaluation System"
//           des=" The DBU Teacher Performance Evaluation System is a digital tool aimed at improving education quality and academic administration at  Debre Brehan University."
//           src={TeacherPES}
//         />
//         <ProjectsCard
//           title="Yene-flowers"
//           des="Explore Yene-Flower Bar for fresh, Hand-picked flowers and elegant arrangements delivered right to your door. "
//           src={yene}
//         />
//         <ProjectsCard
//           title="Ehel-Gebeya"
//           des="we connect farmers straight to the market.  "
//           src={ehel}
//         />
//         {/* <ProjectsCard
//           title="SOCIAL MEDIA CLONE"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectThree}
//         />
//         <ProjectsCard
//           title="E-commerce Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={TeacherPES}
//         />
//         <ProjectsCard
//           title="Chatting App"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectTwo}
//         /> */}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import Title from "../layouts/Title";
import {
  TeacherPES,
  yene,
  ehel,
  menu,
  salesDashboard,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO " des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="https://github.com/nahom-mesfin/DBU_TPES" className="block">
          <ProjectsCard
            title="DBU Teacher Performance Evaluation System"
            des="The DBU Teacher Performance Evaluation System is a digital tool aimed at improving education quality and academic administration at Debre Brehan University."
            src={TeacherPES}
          />
        </a>
        <a href="https://yene-flowers.netlify.app/" className="block">
          <ProjectsCard
            title="Yene-flowers"
            des="Explore Yene-Flower Bar for fresh, hand-picked flowers and elegant arrangements delivered right to your door."
            src={yene}
          />
        </a>
        <a href="https://ehel-gebeya.netlify.app/" className="block">
          <ProjectsCard
            title="Ehel-Gebeya"
            des="We connect farmers straight to the market."
            src={ehel}
          />
        </a>
        <a
          href="https://interactivesalesdashboard.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block">
          <ProjectsCard
            title="Interactive Sales Dashboard"
            des="An interactive sales analytics dashboard with data visualization for tracking performance, trends, and insights."
            src={salesDashboard}
          />
        </a>

        <a
          href="https://menu-nahom.netlify.app/#Drinks%20%E2%98%95%EF%B8%8F"
          className="block">
          <ProjectsCard title="Menu" des=" A responsive Menu" src={menu} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
