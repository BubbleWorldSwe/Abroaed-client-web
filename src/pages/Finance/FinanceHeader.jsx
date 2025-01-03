import React from "react";
import image from "../../assets/dark.png";

function HeroSection() {
  return (
  <div>
        <section
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`, 
          }}
        >
          {/* Text Content */}
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-2xl">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl">
          Nurture Finance
            </h1>
            <p className="font-light text-gray-700 md:text-lg xl:text-xl">
              Irure do commodo voluptate excepteur est qui tempor officia. Cillum
              occaecat sint occaecat consequat in fugiat dolor. Voluptate ea
              dolore duis amet Lorem.
              <br />
              <a
                className="font-medium text-primary-600 hover:underline"
                href="#"
              >
                Twitter
              </a>{" "}
              or our{" "}
              <a
                className="font-medium text-primary-600 hover:underline"
                href=""
              >
                blog
              </a>{" "}
              for the latest updates.
            </p>
          </div>
        </section>
      </div>
  );
}

export default HeroSection;
