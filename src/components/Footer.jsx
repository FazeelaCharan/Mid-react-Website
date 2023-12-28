import React from "react";
import { MdOutlineStorefront } from "react-icons/md";
import { RiDiscordLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <section className="bg-[#2B2B2B]">
        <div className="bg-[#2B2B2B] text-white flex flex-col p-5 gap-3 lg:pl-28">
          <div className="flex flex-row gap-2 items-center">
            <MdOutlineStorefront className="w-10 h-10 mr-2" />
            <h1 className="font-semibold text-2xl">NFT Marketplace</h1>
          </div>
          <h3> NFT marketplace UI created with Anima for Figma.</h3>
          <h3> Join our community.</h3>
          <div className="flex flex-row gap-3">
            <RiDiscordLine className="h-8 w-8" />
            <IoLogoInstagram className="h-8 w-8" />
            <CiYoutube className="h-8 w-8" />
            <CiTwitter className="h-8 w-8" />
          </div>

          <h2 className="text-2xl">Explore</h2>
          <h3 className="text-slate-300">Marketplace</h3>
          <h3 className="text-slate-300">Ranking</h3>
          <h3 className="text-slate-300">connect a wallet</h3>
          <h2 className="text-2xl">Join our weekly digest</h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <input
            type="text"
            placeholder="Enter your Username"
            className="py-2 px-7 bg-slate-100 border-2 rounded-full w-64"
          />
          <button className="bg-[#A259FF] py-2 px-7 w-64 rounded-full">
            Subscribe.
          </button>
        </div>
      </section>
    </>
  );
};

export default Footer;
