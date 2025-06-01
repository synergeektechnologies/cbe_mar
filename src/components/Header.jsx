import { ChevronDown } from "lucide-react";
import logo1 from "../assets/images/coimbatore-marathon-logo.png"
import cancer_logo from "../assets/images/cancer-foundation-logo.png";
import coimbatore_runners_logo from "../assets/images/coimbatore-runners-logo.png";
import showspace_logo from "../assets/images/showspace-logo.png";

export default function Header() {
  return (
    <>
      {/* Header */}

<header className="bg-white py-2 px-4 md:px-8 lg:px-12">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="flex items-center">
      <img
        src={logo1}
        alt="Coimbatore Marathon Logo"
        width={240}
        height={100}
        className="object-contain"
      />
    </div>
    <div className="flex items-center space-x-4 mt-4 md:mt-0">
      <img
        src={cancer_logo}
        alt="Cancer Foundation"
        width={120}
        height={60}
        className="object-contain"
      />
      <img
        src={coimbatore_runners_logo}
        alt="Coimbatore Runners"
        width={120}
        height={60}
        className="object-contain"
      />
      <img
        src={showspace_logo}
        alt="Showspace"
        width={120}
        height={60}
        className="object-contain"
      />
    </div>
  </div>
</header>

{/* Navigation */}
<nav className="bg-rose-600 text-white py-3 sticky top-0 z-50">
  <div className="container mx-auto flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-6 px-4">
    <a href="/" className="font-medium hover:text-yellow-300 transition-colors">
      HOME
    </a>
    <a href="/about-us" className="font-medium hover:text-yellow-300 transition-colors">
      ABOUT US
    </a>
    <div className="relative group">
      <a href="/gallery" className="font-medium hover:text-yellow-300 transition-colors flex items-center">
        GALLERY
      </a>
    </div>
    <a href="/partners" className="font-medium hover:text-yellow-300 transition-colors">
      PARTNERS
    </a>
    <a href="/faq" className="font-medium hover:text-yellow-300 transition-colors">
      FAQ
    </a>
    <a href="/contact-us" className="font-medium hover:text-yellow-300 transition-colors">
      CONTACT US
    </a>
  </div>
</nav>
    </>
  );
}