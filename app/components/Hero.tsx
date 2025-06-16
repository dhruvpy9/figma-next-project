"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/hero1.png", "/hero2.png"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 second me auto change

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={images[current]}
        alt="Hero Image"
        fill
        className="object-cover transition-opacity duration-1000 ease-in-out z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Let us build your business together.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-4">
          We deliver top-notch web solutions with a focus on performance, design, and user experience. Our team ensures timely delivery and complete satisfaction tailored to your needs.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full">
          Let’s Get Started
        </button>
      </div>
    </section>
  );
}

