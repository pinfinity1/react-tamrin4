import { menu } from "./data.js";
import { FaBasketShopping } from "react-icons/fa6";

export const Menu = () => {
  return (
    <div className=" p-16 flex  flex-col items-center">
      <p className=" text-6xl mb-10">OUR MENU</p>
      <div className="flex flex-wrap justify-center gap-10 ">
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-xl bg-zinc-500  md:w-1/3 xl:w-1/4"
            >
              <a href="#">
                <img
                  className="rounded-t-xl"
                  src={item.image}
                  alt={item.foodName}
                />
              </a>
              <div className="p-6 text-zinc-200 flex justify-between items-center">
                <div>
                  <p className="mb-2 text-2xl font-medium leading-tight">
                    {item.foodName}
                  </p>
                  <p>${item.cost}</p>
                </div>
                <div className="relative ">
                  <button className="bg-black py-1.5 px-3 text-sm rounded absolute top-0 right-0 flex items-center duration-75 ">
                    <FaBasketShopping className='mr-2' />
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
