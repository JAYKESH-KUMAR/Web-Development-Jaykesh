import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ padding: "0 40px" }} className="h-16 bg-purple-700 flex items-center justify-between text-white">

      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        <Link href="/">BitLinks</Link>
      </div>

      {/* Menu */}
      <ul style={{ display: "flex", alignItems: "center", gap: "30px", listStyle: "none" }}>

        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/shorten">Shorten</Link>
        </li>

        <li>
          <Link href="/contact">Contact Us</Link>
        </li>

        <li>
          <Link href="/shorten">
            <button style={{ padding: "5px 12px", borderRadius: "6px", cursor: "pointer" }}>
              Try Now
            </button>
          </Link>
        </li>

        <li>
          <a
            href="https://github.com/JAYKESH-KUMAR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ padding: "5px 12px", borderRadius: "6px", cursor: "pointer" }}>
              GitHub
            </button>
          </a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;