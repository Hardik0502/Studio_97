import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Rating = ({ stars }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 0.8,
          }}
          transition={{
            delay: i * 0.08,
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <FaStar
            className={`text-lg sm:text-xl ${
              i < stars ? "text-black" : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const controls = animate(0, 500, {
          duration: 1,
          ease: "easeOut",
          onUpdate(value) {
            setCount(Math.floor(value));
          },
        });

        observer.disconnect();

        return () => controls.stop();
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.h3
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl sm:text-5xl text-red-900 font-medium mt-3"
    >
      {count}+
    </motion.h3>
  );
};

export default function ReviewsSection() {
  return (
    <section className="w-full bg-[#EBEBEB] border-y border-neutral-300 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-5 sm:px-10 lg:px-16 py-10 lg:py-14">

        {/* Top Border */}
        <div className="border-t border-neutral-300 mb-2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

          {/* LEFT */}
          <div className="flex flex-col justify-between min-h-auto lg:min-h-155 lg:pr-16">

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="text-3xl sm:text-5xl lg:text-[60px] font-semibold mt-4 tracking-tight leading-tight lg:leading-none"
            >
              When The Work Speaks For Itself, The Reviews Follow.
            </motion.h2>

            <motion.a
              href="https://www.google.com/search?q=studio+97&oq=s&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIMCAEQABhDGIAEGIoFMggIAhBFGCcYOzIGCAMQRRg5MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc1MjFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x395e4fef404a5c35:0xcd5d647a8627ed86,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#111",
                color: "#fff"
              }}
              whileTap={{ scale: .97 }}
              className="group mt-10 lg:mt-20 w-full sm:w-fit border border-neutral-300 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between sm:gap-24 text-xl sm:text-3xl cursor-pointer duration-500"
            >
              View Reviews

              <motion.div
                whileHover={{
                  rotate: 45,
                  x: 4,
                  y: -4
                }}
              >
                <FiArrowUpRight size={28} className="sm:w-8.5 sm:h-8.5" />
              </motion.div>
            </motion.a>

          </div>

          {/* RIGHT */}
          <div className="border-t lg:border-t-0 lg:border-l border-neutral-300 pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between">

            {/* Top */}
            <div>

              <div className="flex justify-between text-lg sm:text-2xl mb-8 lg:mb-20">
                <p>Google Reviews</p>
                <p>World Wide</p>
              </div>

              <div className="flex justify-center items-end gap-3 sm:gap-5 py-6 sm:py-10">

                <motion.h1
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0px 0px 0px rgba(0,0,0,0)",
                      "0px 0px 18px rgba(0,0,0,.12)",
                      "0px 0px 0px rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="text-8xl sm:text-[140px] lg:text-[190px] leading-none font-semibold tracking-tight"
                >
                  4.9
                </motion.h1>

                <motion.span
                  animate={{
                    opacity: [.4, 1, .4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="text-2xl sm:text-4xl text-red-900 mb-3 sm:mb-8"
                >
                  ★★★★★
                </motion.span>

              </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-neutral-300 pt-8 lg:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">

              <motion.div whileHover={{ y: -6 }}>
                <p className="uppercase tracking-widest text-xs sm:text-sm lg:text-base text-neutral-600">
                  Editing
                </p>
                <Rating stars={5} />
              </motion.div>

              <motion.div whileHover={{ y: -6 }}>
                <p className="uppercase tracking-widest text-xs sm:text-sm lg:text-base text-neutral-600">
                  Pricing
                </p>
                <Rating stars={4} />
              </motion.div>

              <motion.div whileHover={{ y: -6 }}>
                <p className="uppercase tracking-widest text-xs sm:text-sm lg:text-base text-neutral-600">
                  Expertise
                </p>
                <Rating stars={5} />
              </motion.div>

              <motion.div whileHover={{ y: -6 }}>
                <p className="uppercase tracking-widest text-xs sm:text-sm lg:text-base text-neutral-600">
                  Customer Love
                </p>
                <Counter />
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}