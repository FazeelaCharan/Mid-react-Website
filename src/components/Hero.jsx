import React from "react";

import largeImg from "../assets/images/largeImage.png";

const Hero = () => {
  return (
    <>
      <section class="bg-[#2B2B2B]">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div class="mr-auto place-self-center lg:col-span-7 ">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Create Account.
            </h1>
            <p class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-white">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Username"
                className="py-3 px-4 bg-slate-100 border-2 rounded-full"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="py-3 px-4 bg-slate-100 border-2 rounded-full"
              />
              <input
                type="text"
                placeholder="password"
                className="py-3 px-4 bg-slate-100 border-2 rounded-full"
              />
              <input
                type="text"
                placeholder="Confirm password"
                className="py-3 px-4 bg-slate-100 border-2 rounded-full"
              />

              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full bg-[#A259FF]  "
              >
                Create Account.
              </a>
            </div>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex lg:ml-0 ">
            <img src={largeImg} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
