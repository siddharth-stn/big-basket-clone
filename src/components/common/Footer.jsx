import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white mt-10">
      <div className="max-w-283.75 mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* bigbasket links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Bigbasket</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">In News</a>
              </li>
              <li>
                <a href="#">Green bigbasket</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">bb Daily</a>
              </li>
            </ul>
          </div>

          {/* help links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">bb Wallet FAQs</a>
              </li>
              <li>
                <a href="#">bb Wallet T&Cs</a>
              </li>
              <li>
                <a href="#">Vendor Connect</a>
              </li>
            </ul>
          </div>

          {/* logo and app store buttons and socials */}
          <div className="flex flex-col items-start gap-4">
            <div>
              <span className="text-3xl font-bold">
                <span className="bg-[#84C225] text-white px-1.5 py-0.5 rounded text-xl mr-1">
                  bb
                </span>
                bigbasket
              </span>
              <p className="text-sm text-gray-400 mt-1">
                A <span className="font-bold">TATA</span> Enterprise
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="border border-gray-500 rounded px-3 py-1.5 text-xs"
              >
                <span className="text-[10px] block">GET IT ON</span>
                <span className="font-bold text-sm">Google Play</span>
              </a>
              <a
                href="#"
                className="border border-gray-500 rounded px-3 py-1.5 text-xs"
              >
                <span className="text-[10px] block">Download on the</span>
                <span className="font-bold text-sm">App Store</span>
              </a>
            </div>

            <div className="flex gap-5 text-xl mt-2">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="border-t border-dashed border-gray-600 mt-8 pt-4 text-center text-gray-500 text-xs">
          © 2026 bigbasket clone - made for learning purpose at WsCube Tech
        </div>
      </div>
    </footer>
  );
}
