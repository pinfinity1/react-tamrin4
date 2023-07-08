export const Contact = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="../assets/contact-img.jpg"
          alt="contact image"
          className="w-full "
        />
      </div>
      <div className="w-1/2 p-10">
        <p className=" text-4xl ml-5">CONTACT US</p>
        <form className=" mt-20">
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Full Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none  focus:outline-none focus:ring-0 focus:border-orange-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>
          <div className="w-full mb-8">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:outline-orange-600 focus:border-orange-600"
              placeholder="Leave a comment..."
            ></textarea>
            
          </div>
        </form>

        <button
          type="submit"
          className="text-white bg-black focus:outline-none focus:ring-0 focus:border focus:border-orange-400 font-medium w-full sm:w-auto px-5 py-2.5 text-center  hover:bg-zinc-500 ease-in duration-300 hover:rounded-md focus:rounded-md focus:bg-zinc-500"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};
