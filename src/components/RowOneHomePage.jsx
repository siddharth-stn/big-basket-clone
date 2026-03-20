import { Link } from "react-router";
import btnImage from "../assets/images/btnImage.webp";

function Button({ text, bgColor, image, textColor }) {
  return (
    <Link
      to="/"
      // Keep Tailwind for the static text styling
      className="cursor-pointer leading-snug font-extrabold text-[14px] bg-contain h-full w-40 rounded-xl py-2 px-6 uppercase text-center grid place-content-center"
      // Use inline styles for the dynamic properties
      style={{
        backgroundColor: bgColor || "transparent",
        backgroundImage: image ? `url(${image})` : "none",
        color: textColor,
      }}
    >
      {text}
    </Link>
  );
}

const btnContent = [
  {
    text: "Eggs, Meat and fish",
    bgColorClass: "#E8E8E8",
    bgImageValue: "",
  },
  {
    text: "",
    bgColorClass: "",
    bgImageValue: btnImage,
  },
  {
    text: "AYurveda",
    bgColorClass: "#4C6020",
    bgImageValue: "",
    textColor: "white",
  },
  {
    text: "buy more save more",
    bgColorClass: "#E8E8E8",
    bgImageValue: "",
  },
  {
    text: "deals of the week",
    bgColorClass: "#E8E8E8",
    bgImageValue: "",
  },
  {
    text: "combo store",
    bgColorClass: "#E8E8E8",
    bgImageValue: "",
  },
];

export default function RowOneHomePage() {
  return (
    <>
      <div className="row-one grid md:grid-cols-[1fr_minmax(0,1135px)_1fr]">
        <div className="md:col-start-2 flex justify-between">
          {btnContent.map((v, i) => {
            return (
              <Button
                key={i}
                text={v.text}
                image={v.bgImageValue}
                bgColor={v.bgColorClass}
                textColor={v.textColor}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
