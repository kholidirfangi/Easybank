const Articles = () => {
  return (
    <section id="articles" className="px-6 py-16 bg-very-light-gray">
      <h2 className="text-3xl text-center text-dark-blue mb-6 xl:text-left xl:px-40">
        Latest Articles
      </h2>
      <div className="xl:flex xl:gap-5 xl:px-40">
        <Article
          image="/assets/images/image-currency.jpg"
          by="By Claire Robinson"
          title="Receive money in any currency with no fees"
          desc="The world is getting smaller and we're becoming more mobile. So why you should be forces to only receive money in a single..."
        />
        <Article
          image="/assets/images/image-restaurant.jpg"
          by="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          desc="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
        />
        <Article
          image="/assets/images/image-plane.jpg"
          by="By Wilson Hutton"
          title="Take your Easybank card whereever you go"
          desc="We want to enjoy your travels. This is why we don't charge any fees on purchaces while you're abroad. We'll even show you..."
        />
        <Article
          image="/assets/images/image-confetti.jpg"
          by="By Claire Robinson"
          title="Our invite-only Beta account are now live!"
          desc="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to requeat an invite through the site..."
        />
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Article = ({ image, by, title, desc }) => {
  return (
    <div className="bg-white overflow-hidden rounded-t-md my-5 ">
      <img className="mx-auto xl:h-48" src={image} alt={title} />
      <div className="p-5">
        <p className="text-grayish-blue text-xs my-2">{by}</p>
        <h4 className="text-dark-blue text-lg mb-3 xl:text-xl hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr hover:from-lime-green hover:to-bright-cyan hover:cursor-pointer">
          {title}
        </h4>
        <p className="text-grayish-blue">{desc}</p>
      </div>
    </div>
  );
};

export default Articles;
