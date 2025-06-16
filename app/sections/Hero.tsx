const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to TechPlazz</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Your one-stop platform for awesome tech content and tutorials. Let's build the future together!
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
