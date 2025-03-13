import SocialLinks from "@/components/SocialLinks";

const Contact = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 h-[70vh] px-4 md:px-0 mt-11">
        <h2 className="text-3xl font-bold">Contact <span className="border-b-2 border-green-500 w-16 inline-block"></span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-800 transition">
            <img src="/location.svg" alt="Address" className="w-10 h-10 invert" />
            <div>
              <h3 className="text-lg font-semibold text-green-400">Address</h3>
              <p className="text-gray-300 text-sm">Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-800 transition overflow-hidden">
            <img src="/mail.svg" alt="Email" className="w-10 h-10 invert" />
            <div>
              <h3 className="text-lg font-semibold text-green-400">Email</h3>
              <p className="text-gray-300 text-sm">daniyalabbasi0349@gmail.com</p>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-800 transition">
            <img src="/share.svg" alt="Social" className="w-10 h-7 invert" />
            <div>
              <h3 className="text-lg font-semibold text-green-400">Social Profiles</h3>
              <SocialLinks />
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-gray-800 transition">
            <img src="/phone.svg" alt="Call" className="w-10 h-7 invert" />
            <div>
              <h3 className="text-lg font-semibold text-green-400">Call</h3>
              <p className="text-gray-300 text-sm">+92 3475544614</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
