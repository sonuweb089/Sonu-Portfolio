"use client";
import React from "react";

const SkillsCards = () => {
  return (
    <div>
      <p className="md:text-4xl text-2xl text-white bg-neutral-900 text-center font-extralight">
        My Technical Skill
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-6 bg-neutral-900">
        {/* Frontend Card */}

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg w-full md:w-1/3 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Frontend Skills
          </h2>

          <div className="grid grid-cols-2 gap-4 place-items-center text-lg font-medium text-gray-200">
            <p>React</p>
            <p>Vite</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>

        {/* Backend Card */}
        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg w-full md:w-1/3 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Backend Skills
          </h2>

          <div className="grid grid-cols-2 gap-4 place-items-center text-lg font-medium text-gray-200">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;
