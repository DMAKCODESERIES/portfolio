"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = () => {
  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JAVASCRIPT", percentage: 90 },
    { name: "REACT JS", percentage: 90 },
    { name: "Next JS", percentage: 70 },
    { name: "Node JS", percentage: 90 },
  ];

  const testimonials = [
    {
      text: "Working with Daniyal Musadiq was an absolute pleasure! He delivered my project ahead of schedule and exceeded my expectations. His attention to detail and problem-solving skills are truly impressive. Highly recommended!",
      name: "Sarah Johnson",
      position: "CEO of Tech Solutions",
      image: "/women-1.jpg",
    },
    {
      text: "Daniyal is an outstanding developer! He transformed my website into a modern, fast, and user-friendly platform. Communication was smooth, and he made sure to understand all my requirements. Will definitely hire him again!",
      name: "Michael Roberts",
      position: "Founder of Startup Hub",
      image: "/person-1.jpg",
    },
    {
      text: "I needed a full-stack developer who could bring my vision to life, and Daniyal did just that. His expertise in React.js and Next.js is top-notch. The final product is exactly what I envisioned!",
      name: "Emily Carter",
      position: "Project Manager at InnovateX",
      image: "/women-2.jpg",
    },
    {
      text: "Daniyal is a talented developer who is always willing to go the extra mile. He is a great communicator and always delivers high-quality work. I highly recommend him for any web development project!",
      name: "James Anderson",
      position: "CTO of Tech Solutions",
      image: "/person-2.jpg",
    },
    {
      text: "If you're looking for a skilled and reliable web developer, Daniyal is the one. He built a custom web application for my business that runs flawlessly. Great job!",
      name: "Olivia Martinez",
      position: "Marketing Director at Digital Sphere",
      image: "/person-3.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-6 flex flex-col items-center">
      {/* About Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 min-h-screen px-4 md:px-0">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-30 overflow-hidden rounded-full">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold">About <span className="border-b-2 border-green-500 w-16 inline-block"></span></h2>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Learn More About Me
          </h2>
          <h3 className="text-green-400 text-lg sm:text-xl font-semibold mt-4">
            Web Developer
          </h3>
          <p className="text-gray-300 italic mt-2">
            Full Stack Developer at Unilancerz, specializing in HTML, CSS,
            JavaScript, React.js, Node.js, and Next.js.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-300">
            <p>
              <span className="text-green-400 font-bold">› Birthday:</span> 09
              June 2004
            </p>
            <p>
              <span className="text-green-400 font-bold">› Age:</span> 21
            </p>
            <p>
              <span className="text-green-400 font-bold">› Address:</span>{" "}
              Rawalpindi, Pakistan
            </p>
            <p>
              <span className="text-green-400 font-bold">› Degree:</span> BSCS
            </p>
            <p>
              <span className="text-green-400 font-bold">› Phone:</span> +92
              3475544614
            </p>
            <p>
              <span className="text-green-400 font-bold">› Email:</span>{" "}
              daniyalabbasi0349@gmail.com
            </p>
            <p>
              <span className="text-green-400 font-bold">› Freelance:</span>{" "}
              Available
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-5xl p-8">
        <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
          SKILLS
          <span className="border-b-2 border-green-500 w-16 inline-block"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-5xl px-6">
        <h2 className="text-lg font-semibold text-center md:text-left">
          TESTIMONIALS
          <span className="border-b-2 border-green-500 w-16 inline-block"></span>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-2 shadow-md"
                />
                <p className="mt-4 italic">&quot;{testimonial.text}&quot;</p>
                <h3 className="text-lg font-semibold mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
