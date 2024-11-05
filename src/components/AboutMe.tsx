import React from 'react';



const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="container px-4 mx-auto my-4  md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-8 text-3xl font-semibold md:my-20">
        About Me
      </h1>
      <p className="text-sm text-gray-400 md:text-lg">
        Hi, I am Syeda Areeba, a passionate Nextjs developer with a
        knack for crafting intuitive and efficient web applications.
        With expertise in JavaScript, React, and Node.js, Typescript. I thrive on
        turning complex problems into simple, elegant solutions. I
        love to create user-friendly interfaces, and deliver seamless digital experiences. When
        I&apos;m not coding, I enjoy learning new technologies and
        working on innovative projects that push the boundaries of web
        development. Let&apos;s connect and create something amazing
        together!
      </p>
    </section>
  );
}

export default AboutMe;

