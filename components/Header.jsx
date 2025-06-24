import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive(!navActive);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-sunset shadow">
            <Image
              src="/images/meraki_logo.png"
              alt="Meraki Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-2xl md:text-3xl font-extrabold text-sunset whitespace-nowrap">
            Meraki, Culinary Arts Society, IITK
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About Us" },
            { href: "#review", label: "Events" },
            { href: "#dishes", label: "Gallery" },
            { href: "#about", label: "Our Team" },
            { href: "#order", label: "Contact Us" },
          ].map(({ href, label }, i) => (
            <a
              key={i}
              href={href}
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-sunset transition duration-300 px-3 py-2 rounded-lg"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleNav}
            className="md:hidden text-2xl text-sunset transition-colors duration-300 hover:text-sunset"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {navActive && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {[
              { href: "#home", label: "Home" },
              { href: "#dishes", label: "Dishes" },
              { href: "#about", label: "About" },
              { href: "#menu", label: "Menu" },
              { href: "#review", label: "Review" },
              { href: "#order", label: "Order" },
            ].map(({ href, label }, i) => (
              <a
                key={i}
                href={href}
                className="text-lg font-medium text-gray-600 hover:text-white hover:bg-sunset transition duration-300 px-3 py-2 rounded-lg"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
