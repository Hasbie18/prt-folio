
const PopularTours = () => {
  return (
    <div className="bg-gray-200 py-9 px-4 sm:px-6 md:px-9">
      {/* Carousel Body */}
      <div
        className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
        style={{ minHeight: "19rem" }}
      >
        <div
          className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          style={{ minHeight: "19rem" }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://stripe.com/img/v3/payments/overview/photos/missguided.jpg"
            alt=""
          />
          <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75" />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            {/* svg container */}
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
          <div className="p-6 sm:p-8 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900">Missguided</span> is a UK-based
              fashion retailer that has nearly doubled in size since last year. They
              integrated Stripe to deliver seamless checkout across mobile and web
              for customers in 100+ countries, all while automatically combating
              fraud.
            </p>
            <a
              className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href=""
            >
              <span>Learn more about our users</span>
              <span className="text-xs ml-1">➜</span>
            </a>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
          <span className="block" style={{ transform: "scale(-1)" }}>
            ➜
          </span>
        </button>
        <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
          <span className="block" style={{ transform: "scale(1)" }}>
            ➜
          </span>
        </button>
      </div>
      {/* Carousel Tabs */}
      <div className="flex items-center pt-5 justify-between flex-wrap gap-4">
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg"
            alt=""
            style={{ maxHeight: 60 }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/slack.svg"
            alt=""
            style={{ maxHeight: 60 }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg"
            alt=""
            style={{ maxHeight: 60 }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg"
            alt=""
            style={{ maxHeight: 60 }}
          />
        </button>
        <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg"
            alt=""
            style={{ maxHeight: 60 }}
          />
        </button>
      </div>
    </div>
  );
};

export default PopularTours;
