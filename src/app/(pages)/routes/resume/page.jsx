const Resume = () => {
  return (
    <main className="bg-black text-white py-16 px-6 md:py-32 md:px-32 w-full">
      <div className="flex flex-col">
        <div className="flex items-end">
          <h1 className="font-bold text-lg tracking-widest text-green-400">
            RESUME{" "}
            <span className="border-b-2 border-green-500 w-16 inline-block"></span>
          </h1>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl mt-6 uppercase text-center md:text-left">
          Check My Resume
        </h1>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 bg-gray-900 mt-8 p-6 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold border-b-2 border-green-500 pb-2">
            Summary
          </h2>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-green-400 font-semibold hover:text-green-300 cursor-pointer">
                DOWNLOAD CV
              </p>
            </div>
            <div className="flex flex-col">
              <a href="/D.CV.pdf" download>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition w-full md:w-auto">
                  Download CV Here
                </button>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="font-semibold text-green-400">Daniyal Musadiq</span>
          </div>
          <p className="mt-4 text-gray-300 text-sm md:text-base">
            I am a passionate and results-driven JavaScript developer specializing in building
            modern, high-performance web applications using React.js and Next.js. With a
            strong foundation in front-end and server-side technologies, I excel in creating
            scalable, SEO-friendly solutions that enhance user experiences. My expertise lies in
            leveraging React, JavaScript (ES6+), and API integrations to deliver seamless and
            dynamic web applications. Constantly exploring new technologies and best
            practices, I am committed to delivering innovative solutions that meet and exceed
            client expectations.{" "}
            <span className="font-semibold">Unillancerz</span>, I excel in HTML, CSS, JavaScript,
            React.js, Next.js, and Node.js while continuously expanding my expertise.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold border-b-2 border-green-500 pb-2">
            Professional Experience
          </h2>

          {/* Experience 1 */}
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-green-400 font-semibold">FullStack DEVELOPMENT</span>
            </div>
            <div className="mt-2 bg-gray-700 px-4 py-1 text-sm rounded-md inline-block">
              2023 - 2024
            </div>
            <h3 className="mt-4 font-semibold">Unilancerz</h3>
            <ul className="mt-3 space-y-2 text-gray-300 text-sm md:text-base">
              <li>Collaborate with development teams.</li>
              <li>Optimize web pages for maximum speed and scalability.</li>
              <li>Continuously learn and apply best front-end development practices.</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-green-400 font-semibold">FullStack DEVELOPMENT</span>
            </div>
            <div className="mt-2 bg-gray-700 px-4 py-1 text-sm rounded-md inline-block">
              January 1st, 2025 - Present
            </div>
            <h3 className="mt-4 font-semibold">CodesVista</h3>
            <ul className="mt-3 space-y-2 text-gray-300 text-sm md:text-base">
              <li>Collaborate with development teams.</li>
              <li>Optimize web pages for maximum speed and scalability.</li>
              <li>Continuously learn and apply best front-end development practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
