const Fitures = () => {
  return (
    <section id="fitures" className="flex flex-col w-full bg-light-grayish-blue py-16 text-center p-5 xl:text-left xl:px-40 xl:py-28">
      <div className="mb-16">
        <h2 className="text-3xl w-2/3 mx-auto mb-10 xl:mx-0">
          Why choose Easybank?
        </h2>
        <p className="text-grayish-blue xl:w-7/12">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finance like never before
        </p>
      </div>
      <div className="flex flex-col gap-10 xl:flex-row">
        <Fiture
          icon="../src/assets/images/icon-online.svg"
          fitureName="Online Banking"
          description="Our modern web and mobile Applications allow you to keep track of your finances wherever you are in the world."
        />
        <Fiture
          icon="../src/assets/images/icon-budgeting.svg"
          fitureName="Simple Budgeting"
          description="See exactly where your money goes each month. Receive notifications when you're close to your hitting limits."
        />
        <Fiture
          icon="../src/assets/images/icon-onboarding.svg"
          fitureName="Fast Onboarding"
          description="We don't do branches. Open your account in minutes and start taking control of your finance right away."
        />
        <Fiture
          icon="../src/assets/images/icon-api.svg"
          fitureName="Open API"
          description="Manage your savings, invesments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Fiture = ({ icon, fitureName, description }) => {
  return (
    <div>
      <img
        className="block mx-auto xl:mx-0 xl:mb-10"
        src={icon}
        alt={fitureName}
      />
      <h3 className="my-5 text-xl text-dark-blue hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr hover:from-lime-green hover:to-bright-cyan hover:cursor-pointer">
        {fitureName}
      </h3>
      <p className="text-grayish-blue">{description}</p>
    </div>
  );
};

export default Fitures;
