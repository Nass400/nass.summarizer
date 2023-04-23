import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} style={{ width: 210, height: 100 }} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Nass400/nass.summarizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize your Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>GPT4</span>
      </h1>
      <h2 className='desc'>
       Read summarized long Articles explained in a brief and very simple way 
       for easier reading with <span className='orange_gradient '>Open-ai GPT4</span>
      </h2>
    </header>
  );
};

export default Hero;
