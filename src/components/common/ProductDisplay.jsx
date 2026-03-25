import useEmblaCarousel from "embla-carousel-react";
import { Zap, ChevronDown, Bookmark } from "lucide-react";

export default function ProductDisplay() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="prod-disp-wrapper grid md:grid-cols-[1fr_minmax(0,1135px)_1fr]">
      <div
        className="wrapper-inner bg-[#F7F7F7] col-start-2 rounded py-10 px-6 embla_viewport"
        ref={emblaRef}
      >
        <div className="header flex mb-6 items-center">
          <h3 className="font-extrabold text-2xl">My Smart Basket</h3>
          <div className="ml-auto flex gap-5 items-center">
            <span>
              <a href="#" className="cursor-pointer text-xl underline">
                View All
              </a>
            </span>
            <div className="flex gap-2 items-center">
              <button className="embla__prev rounded p-3 px-4 bg-[#E8E8E8] shadow text-xl">
                &lt;
              </button>
              <button className="embla__next rounded p-3 px-4 shadow text-xl">
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="embla__container flex">
            <div className="embla__slide">
              <div className="bg-white rounded-xl shadow p-4">
                <div className="p-8 overflow-hidden relative border rounded-xl">
                  <div className="py-1.5 px-2 pl-4 bg-[#476F00] absolute text-white text-nowrap rounded-b-xl -top-1 -left-2">
                    41% OFF
                  </div>
                  <div className="w-60 h-60 border rounded ">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="bg-[#F7F7F7] py-1 rounded-2xl ml-auto flex items-center gap-1 px-1 text-[14px]">
                    <div className="text-green-600">
                      <Zap size={16} fill="green" />
                    </div>
                    10 MINS
                  </span>
                  <div className="flex flex-col mt-5">
                    <span className="text-gray-400">fresho!</span>
                    <span className="text-xl">Coconut - Medium</span>
                  </div>
                  <div className="mt-12">
                    <div className="bg-[#F7F7F7] text-gray-500 py-1 px-2 rounded border border-gray-500">
                      1 pc - (approx. 400 to 450g)
                    </div>
                    <div>
                      <span className="font-bold text-xl">₹37.5</span>
                      <sup>
                        <del className="text-gray-500">₹64</del>
                      </sup>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-8">
                    <button className="bg-[#E4F1CC] flex border border-green-200 py-2 px-6 flex-1 items-center cursor-pointer">
                      <span className="font-bold text-green-800 ml-5">
                        Har Din Sasta!
                      </span>
                      <span className="font-bold text-green-800 ml-auto">
                        <ChevronDown size={16} />
                      </span>
                    </button>
                    <div className="flex gap-2">
                      <button className="rounded border border-gray-500 py-2 px-3">
                        <Bookmark />
                      </button>
                      <button className="rounded border border-red-500 text-red-500 px-8 flex-1">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
