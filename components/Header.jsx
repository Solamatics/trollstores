import React, { useContext } from "react";
import Link from "next/link";
import { Store } from "../utils/Store";

const Header = () => {
  const { state } = useContext(Store);

  const { cart } = state;
  return (
    <>
      <header>
        <nav className="flex h-20 items-center px-4 justify-between shadow-md fixed top-0 right-0 left-0 bg-white">
          <Link href="/" className="text-lg font-bold">
            amazona
          </Link>
          <div>
            <Link href="/cart" className="p-2">
              Cart
              {cart.cartItems.length > 0 && (
                <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  {cart.cartItems?.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </Link>
            <Link href="/login" className="p-2">
              Login
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
