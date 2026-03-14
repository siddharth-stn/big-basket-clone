import logoImage from "../../assets/images/Bigbasket-logo.svg";
import { Search } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="sticky top-0 grid md:grid-cols-[1fr_minmax(0,1135px)_1fr] py-3 text-[13.5px] shadow-xl border-t-4 border-green-700">
      {/* Header for large screens */}
      <div className="header-outer hidden md:col-start-2 md:px-6 lg:px-10 xl:px-0 md:flex flex-col gap-6">
        <div className="row-one flex">
          <div className="logo w-23">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="search flex-1 mx-6">
            <label className="w-full relative border border-gray-400 focus-within:border-green-600 rounded py-2 px-8 flex items-center">
              <Search className="absolute text-green-600 left-2" size={15} />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="location-badge cursor-pointer bg-gray-200 text-[10px] py-1 px-1.5 ml-auto rounded">
            <div className="text-green-800 flex items-center">
              <BiSolidZap />
              <span className="font-bold">Delivery in 10 mins</span>
            </div>
            <span>Select Location</span>
          </div>
          <div className="login-button text-[14px] text-white bg-black rounded py-2 px-4 ml-6 cursor-pointer">
            <span>Login/Sign up</span>
          </div>
          <div className="cart bg-pink-200 p-2 rounded ml-3 cursor-pointer">
            <div className="rounded-full bg-red-500 p-1">
              <RiShoppingBasketLine size={17} className="text-white" />
            </div>
          </div>
        </div>
        <div className="row-two flex items-center justify-between">
          <div className="category-btn flex bg-[#5D9400] rounded text-white items-center gap-2 py-2 px-3">
            <span className="font-bold">Shop by Category</span>
            <FaCaretDown />
          </div>
          <div className="exotic">
            <span>Exotic Fruits & V...</span>
          </div>
          <div className="tea">
            <span>Tea</span>
          </div>
          <div className="ghee">
            <span>Ghee</span>
          </div>
          <div className="nandini">
            <span>Nandini</span>
          </div>
          <div className="fresh-veg flex items-center gap-1">
            <span>Fresh Vegetables</span>
            <MdKeyboardDoubleArrowRight />
          </div>
          <hr className="rotate-90 text-gray-400 w-5" />
          <div className="smart-basket-badge mr-30 md:mr-0 lg:mr-30">
            <div>
              <img
                src="https://www.bigbasket.com/media/uploads/banner_images/Smart_basket-250124-1.png"
                alt="badge"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header for mobile screens */}
      <div className="header-outer-mobile md:hidden px-2">
        <div className="rows flex flex-col gap-4">
          <div className="row-one flex items-center justify-between">
            <div className="logo w-23">
              <img src={logoImage} alt="logo" />
            </div>
            <div className="btn-group flex items-center gap-3">
              <div className="cart bg-pink-200 p-1 rounded cursor-pointer">
                <div className="rounded-full bg-red-500 p-1">
                  <RiShoppingBasketLine size={17} className="text-white" />
                </div>
              </div>
              <div
                onClick={() => {
                  setDrawerOpen(true);
                }}
                className="show-drawer-btn cursor-pointer text-[#5d9400]"
              >
                <GiHamburgerMenu size={30} />
              </div>
            </div>
          </div>
          <div className="row-two">
            <div className="search flex-1 mx-2">
              <label className="w-full relative border border-gray-400 focus-within:border-green-600 rounded py-2 px-8 flex items-center">
                <Search className="absolute text-green-600 left-2" size={15} />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full focus:outline-none"
                />
              </label>
            </div>
          </div>
        </div>

        <div
          className={`drawer h-screen bg-white text-[14px] fixed top-0 left-0 w-full z-50 py-5 px-4 ${drawerOpen ? "flex" : "hidden"} justify-between`}
        >
          <div className="btn-group w-2/3 flex flex-col gap-4 ">
            <div className="login-button text-white bg-black rounded cursor-pointer h-15 flex items-center justify-center">
              <span>Login / Sign up</span>
            </div>
            <div className="category-btn text-white bg-[#5D9400] rounded cursor-pointer flex gap-2 items-center justify-center h-15">
              <span>Shop by Category</span>
              <FaCaretDown />
            </div>
          </div>
          <div
            onClick={() => {
              setDrawerOpen(false);
            }}
            className="exit-drawer-btn text-[#5d9400] cursor-pointer mt-1"
          >
            <RxCross1 size={25} />
          </div>
        </div>
      </div>
    </header>
  );
}
