import logoImage from "../../assets/images/Bigbasket-logo.svg"
import { Search, Zap } from 'lucide-react';
import { BiSolidZap } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";

export default function Header() {
  return (
    <>
      <header className='grid grid-cols-[1fr_minmax(0,1135px)_1fr] py-3 text-[13.5px]'>
        <div className='header-outer lg:col-start-2'>
          <div className='row-one flex'>
            <div className='logo w-23'>
              <img src={logoImage} alt="logo" />
            </div>
            <div className='search flex-1 mx-6'>
              <label className="w-full relative border border-gray-400 focus-within:border-green-600 rounded py-2 px-8 flex items-center">
                <Search className="absolute text-green-600 left-2" size={15} />
                <input type="text" placeholder="Search for products..." className="w-full focus:outline-none" />
              </label>
            </div>
            <div className='location-badge cursor-pointer bg-gray-300 text-[10px] py-1 px-1 ml-auto rounded'>
              <div className="text-green-600 flex items-center">
                <BiSolidZap className="" />
                <span>Delivery in 10 mins</span>
              </div>
              <span>Select Location</span>
            </div>
            <div className='login-button text-[14px] text-white bg-black rounded py-2 px-4 ml-6 cursor-pointer'>
              <span>Login/Sign up</span>
            </div>
            <div className='cart bg-pink-200 p-2 rounded ml-3 cursor-pointer'>
              <div className="rounded-full bg-red-500 p-1">
                <RiShoppingBasketLine size={17} className="text-white" />
              </div>
            </div>
          </div>
          <div className='row-two'>
            <div className='category-btn'></div>
            <div className='exotic'></div>
            <div className='tea'></div>
            <div className='ghee'></div>
            <div className='Nandini'></div>
            <div className='fresh-veg'></div>
            <div className='smart-basket-badge'></div>
          </div>
        </div>
      </header >

    </>
  )
}
