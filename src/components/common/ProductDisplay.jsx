import useEmblaCarousel from "embla-carousel-react";
import { Zap, ChevronDown, Bookmark } from "lucide-react";

// Placeholder array for 12 product slides (replace with real data later)
const slides = [...Array(12)];

// Horizontal product carousel section ("My Smart Basket")
export default function ProductDisplay() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 4, // scroll 4 products at a time
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  return (
    <section className="prod-disp-wrapper grid md:grid-cols-[1fr_minmax(0,1135px)_1fr]">
      <div className="wrapper-inner bg-[#F7F7F7] col-start-2 rounded-2xl py-8 px-6">
        {/* Section header with title, "View All" link, and carousel nav buttons */}
        <div className="header flex mb-5 items-center">
          <h3 className="font-extrabold text-2xl">My Smart Basket</h3>
          <div className="ml-auto flex gap-4 items-center">
            <a
              href="#"
              className="cursor-pointer text-sm font-semibold underline text-[#333]"
            >
              View All
            </a>
            {/* Carousel prev/next navigation */}
            <div className="flex gap-2 items-center">
              <button
                className="rounded-full w-9 h-9 flex items-center justify-center bg-white shadow text-lg cursor-pointer"
                onClick={scrollPrev}
              >
                &lt;
              </button>
              <button
                className="rounded-full w-9 h-9 flex items-center justify-center bg-white shadow text-lg cursor-pointer"
                onClick={scrollNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
        {/* Embla carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {slides.map((_, i) => {
              return <SlideDiv key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual product card within the carousel
const SlideDiv = () => {
  return (
    <div className="embla__slide flex-[0_0_calc(25%-12px)] min-w-0">
      <div className="bg-white rounded-xl shadow-sm p-3 h-full flex flex-col">
        {/* Product image area with discount badge */}
        <div className="p-4 overflow-hidden relative border border-gray-100 rounded-xl bg-[#FAFAFA]">
          <div className="py-1 px-2 pl-3 bg-[#476F00] absolute text-white text-xs font-semibold rounded-br-lg top-0 left-0">
            41% OFF
          </div>
          <div className="w-full aspect-square flex items-center justify-center mt-3">
            <img
              src=""
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 flex-1">
          <span className="bg-[#F7F7F7] py-0.5 rounded-2xl ml-auto flex items-center gap-1 px-2 text-xs text-gray-600">
            <Zap size={12} fill="#16a34a" className="text-green-600" />
            10 MINS
          </span>
          <div className="flex flex-col mt-2">
            <span className="text-gray-400 text-xs">fresho!</span>
            <span className="text-sm font-medium leading-tight line-clamp-2">
              Coconut - Medium
            </span>
          </div>
          <div className="mt-auto pt-3">
            <div className="bg-[#F7F7F7] text-gray-500 text-xs py-1 px-2 rounded border border-gray-300 mb-2">
              1 pc - (approx. 400 to 450g)
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-base">₹37.5</span>
              <del className="text-gray-400 text-xs">₹64</del>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <button className="bg-[#E4F1CC] flex border border-green-200 rounded-md py-1.5 px-3 items-center cursor-pointer">
              <span className="font-semibold text-green-800 text-xs">
                Har Din Sasta!
              </span>
              <span className="text-green-800 ml-auto">
                <ChevronDown size={14} />
              </span>
            </button>
            <div className="flex gap-2">
              <button className="rounded-md border border-gray-300 py-1.5 px-2.5 cursor-pointer hover:bg-gray-50">
                <Bookmark size={18} />
              </button>
              <button className="rounded-md border border-[#e23744] text-[#e23744] font-semibold text-sm px-6 flex-1 py-1.5 cursor-pointer hover:bg-red-50">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
