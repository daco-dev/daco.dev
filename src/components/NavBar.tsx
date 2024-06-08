import { useState } from "react";

const navLinks: { label: string; url: string }[] = [
  {
    label: "inicio",
    url: "/",
  },
  {
    label: "blog",
    url: "/blog",
  },
  {
    label: "sobre mi",
    url: "/#sobremi",
  },
  {
    label: "contacto",
    url: "/#contacto",
  },
];

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href={"/"}>
              <img src="/daco.png" alt="daco.dev logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navLinks.map((link, key) => (
                <div key={key}>
                  <a
                    href={link.url}
                    className="text-white sm:text-sm uppercase font-bold hover:bg-main px-3 py-2 rounded-lg"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:0ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6  text-white"
                  xmlns="http://www.w3.org/200/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6112 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/200/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, key) => (
            <div key={key} className="flex justify-center">
              <a
                href={link.url}
                className="text-white uppercase font-bold hover:bg-main px-3 py-2 rounded-lg"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
