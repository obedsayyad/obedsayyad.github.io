import React from "react";
import Container from "./Container";
import obed from "../assets/obed.jpeg";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#fffbf2] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <img
              src={obed}
              alt="obed sayyad"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
            />
            <h1 className="text-[#121212] max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em] relative">
              obed sayyad 🧠
              <br />
              <span className="text-[#ffaa00]"> Frontend Artisan </span>
              <span className="text-[#8a8a93]">
                {" "}
                crafting digital experiences for the web.
              </span>
            </h1>
          </div>

          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#ffaa00] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <ContactIcon className="w-[112px] h-[112px] flex-[0_0_auto]" />

              <div className="flex items-center mb-4 bg-green-200 border-green-500 border rounded-full p-2">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <p className="text-green-500 text-md">
                  Available for Remote Opportunities
                </p>
              </div>

              <h2 className="text-[#001377] max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                Connect and let's engineer excellence.
              </h2>
            </div>

            <a
              href="mailto:obedsayyad123@gmail.com"
              className="min-h-[96px] bg-[#44419f] transition-[background-color] duration-300 ease-[ease-out] text-[40px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white"
            >
              hey@obed.com
              <span> 📫</span>
            </a>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#fffbf2] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="text-[#121212] max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            I am a passionate full-stack developer with a love for frontend and
            graphic design{" "}
            <span className="text-[#8a8a93]">
              {" "}
              🦄 join me to explore my unique projects and creative solutions.
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
