import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaDatabase, FaReact, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Building responsive, user-friendly websites using the MERN stack (MongoDB, Express, React, and Node.js), focusing on functionality, scalability, and a seamless user experience."
          icon={<FaReact />}
        />
        <Card
          title="Database Administration and Optimization"
          des=" Sql and NOSQL"
          icon={<FaDatabase />}
        />
        <Card
          title="SEO Optimisation"
          des=" orienting your website to rank higher on a search engine results page (SERP) so that you receive more traffic."
          icon={<SiProgress />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        /> */}
        <Card
          title="UX/UI Design"
          des="Creating intuitive, user-centered designs using tools like Figma and Canva to enhance user experience and bring ideas to life with visually engaging and functional layouts."
          icon={<SiAntdesign />}
        />
        {/* <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
};

export default Features;
