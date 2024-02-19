function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center bg-[#fffbf2] text-black mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6 mb-9">
        <span className="text-lg leading-6 -translate-x-[0.01em] ">
          obed sayyad.
        </span>
        <div className="flex text-black justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
          all rights reserved. © {currentYear}
        </div>
      </div>
    );
  }
  
  export default Footer;