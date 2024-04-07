// Importing necessary dependencies:
// "use client" is a custom import for client-side rendering,
// React for building the component, and other components and assets.
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BrandLogo from "../public/ibadanAgentlogo.svg";
import Link from "next/link";
import LogOutIcon from "../public/logout.png";

// Navbar component representing the navigation bar:
// - Manages the sticky state of the navbar.
// - Retrieves the current pathname using Next.js usePathname hook.
// - Defines an array of navigation items with their respective paths.
const Navbar = () => {
  // State to track whether the navbar is sticky or not.
  const [isSticky, setIsSticky] = useState(false);

  // Get the current pathname using Next.js usePathname hook.
  const pathname = usePathname();

  // Array of navigation items with their respective paths.
  const navItems = [
    { text: "AGENTS", path: "/agents" },
    { text: "USERS", path: "/users" },
    { text: "REQUESTS", path: "/requests" },
    { text: "logout", path: "" },
  ];

  // Effect to handle scroll events and update the sticky state.
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    // Attach the event listener when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render the navbar component:
  return (
    // Main container for the navbar with dynamic styling based on the sticky state.
    <div
      className={`flex flex-row justify-between items-center bg-transparent pt-[5rem] pb-[1.4rem] lg:px-[9.06rem] px-[1rem] z-50 fixed w-full ${
        isSticky ? "bg-white shadow-md" : ""
      }`}
    >
      {/* Container for the brand logo. */}
      <div className="flex-1">
        {/* Display the brand logo using Next.js Image component. */}
        <Image src={BrandLogo} alt="logo" className="w-auto h-auto" />
      </div>

      {/* Container for navigation links. */}
      <div className="h-full flex-1">
        {/* Flex container for navigation links with dynamic styling. */}
        <div className="flex justify-center items-center lg:gap-[2.5rem] gap-[1rem] h-[2.5rem]">
          {/* Mapping through navigation items and creating link elements. */}
          {navItems.map((item, index) => (
            <div key={index} className="h-[2.5rem] relative">
              {/* Using Next.js Link for client-side navigation. */}
              {item?.text == "logout" ? (
                <button className="text-[#F0502F] lg:text-base text-sm mt-1 lg:mt-0 font-normal flex justify-center items-center gap-1">
                  <Image
                    src={LogOutIcon}
                    alt="logout"
                    className="object-contain"
                  />
                  <p className="hidden lg:block"> Logout</p>
                </button>
              ) : (
                <Link href={item.path}>
                  {/* Displaying the navigation text with dynamic styling based on the active link. */}
                  <span
                    className={`text-black lg:text-base text-xs font-semibold h-full cursor-pointer ${
                      pathname === item.path || pathname.startsWith(item.path)
                        ? "text-green-500" // Active link styling
                        : ""
                    }`}
                  >
                    {item.text}
                  </span>
                </Link>
              )}

              {/* Highlighting line beneath the active link. */}
              {item?.text !== "logout" && (
                <span
                  className={`absolute ease-in-out duration-500 w-[1rem] h-1 translate-x-[-50%] left-[50%] bottom-0 ${
                    pathname === item.path || pathname.startsWith(item.path)
                      ? "block bg-[#128F40]"
                      : "hidden"
                  }`}
                ></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export the Navbar component for use in other parts of the application.
export default Navbar;
