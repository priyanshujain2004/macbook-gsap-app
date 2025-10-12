import React, { useEffect, useRef } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Save previous body padding-top so we can restore it on unmount
    const prevPaddingTop = document.body.style.paddingTop || "";

    const setBodyPadding = () => {
      // Use offsetHeight so any CSS applied to header is accounted for
      document.body.style.paddingTop = `${el.offsetHeight}px`;
    };

    // Set initially and on resize
    setBodyPadding();
    window.addEventListener("resize", setBodyPadding);

    return () => {
      window.removeEventListener("resize", setBodyPadding);
      document.body.style.paddingTop = prevPaddingTop;
    };
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "var(--bg, #000000ff)",
      }}
    >
      <nav>
        <button onClick={() => (window.location.href = "#")}>
          <img
            src="/logo.svg"
            alt="Logo"
            aria-label={"Logo"}
            title={"Apple Logo"}
          />
        </button>
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img
              src="/search.svg"
              alt="Search"
              aria-label={"Search"}
              title={"Search"}
            />
          </button>
          <button>
            <img
              src="/cart.svg"
              alt="Cart"
              aria-label={"Cart"}
              title={"Cart"}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
