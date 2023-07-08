export const Home = () => {
  return (
    <div className="relative text-zinc-400">
      <img
        src="../assets/maintext-bg.jpg"
        alt=""
        className="w-full -z-10 max-h-screen "
      />
      <div className=" absolute top-1/4 left-20">
        <p className=" text-8xl  tracking-wider mb-2">Food Corner</p>
        <p className=" text-4xl tracking-wide mb-5">FAST FOOD AT A CLICK</p>
        <button className=" bg-black hover:rounded-xl hover:bg-zinc-500 ease-in duration-300 text-white px-5 py-4  focus:outline-none focus:ring-0 ">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};
