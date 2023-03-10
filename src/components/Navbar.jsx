import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-200 py-3 flex ">
        {/* <div>{logo}</div> */}
        
            <Link className="px-3 text-teal-900 hover:text-red-900" href="/">Home</Link>

            <Link className="px-3 text-teal-900 hover:text-red-900" href="/users">User</Link>

            <Link className="px-3 text-teal-900 hover:text-red-900" href="/about">About</Link>

            <Link className="px-3 text-teal-900 hover:text-red-900" href="/founders">Founders</Link>

            <Link className="px-3 text-teal-900 hover:text-red-900" href="/contact">contact</Link>
    </div>
  );
};
export default Navbar;
