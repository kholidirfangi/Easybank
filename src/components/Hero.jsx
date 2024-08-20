import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="hero pt-12 pb-12 bg-very-light-gray text-center xl:flex xl:flex-row-reverse  xl:ps-40 xl:text-left xl:h-screen">
      <div className="relative xl:w-1/2 xl:ps-28">
        <img
          className="w-full  -mt-5 xl:hidden"
          src="../src/assets/images/bg-intro-mobile.svg"
          alt=""
        />
        <img
          className="w-full hidden xl:block xl:scale-[1.7]"
          src="../src/assets/images/bg-intro-desktop.svg"
          alt=""
        />
        <img
          className="absolute -top-28  xl:-top-16"
          src="../src/assets/images/image-mockups.png"
          alt=""
        />
      </div>
      <div className="px-5 -mt-10 flex flex-col items-center justify-center xl:w-1/2 xl:items-start">
        <h2 className="text-4xl text-dark-blue mb-5 w-80">
          Next generation digital banking
        </h2>
        <p className="text-grayish-blue mb-8 xl:pe-48 xl:mb-10">
          Take your financial life online. Your Easybank account will be
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
