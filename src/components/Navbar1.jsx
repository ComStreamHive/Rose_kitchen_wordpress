import { ShoppingBasket, Search } from "lucide-react";

export default function Navbar({ bgColor = 'bg-[#787878ff]' }) {
  return (
    <>
      <style jsx>{`
        .italic-placeholder::placeholder {
          font-style: italic;
          color: #787878ff;
        }
      `}</style>
      <nav className={`${bgColor} px-5 py-5 flex justify-end items-center h-16 gap-4 sticky top-0 z-50`}>
        {/* Cart Section */}
        <div className="flex items-center gap-2 text-white text-sm">
          <ShoppingBasket className="w-5 h-5" />
          <span>0 items - $0.00</span>
        </div>

        {/* Search Section */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-72 h-8 pl-10 pr-3 py-1.5 rounded border-none outline-none text-sm italic-placeholder"
          />
        </div>
      </nav>
    </>
  );
}