import crown from "../assets/crown.png"

const Navbar = () => {
  return (
    <nav className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 top-0 z-50 bg-transparent">
      {/* Logo */}
      <div>
        <img width={100} src={crown} alt="Melt Cheese Burger" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex flex-row gap-8 text-slate-300 text-sm">
        {["HOME", "MENU", "HIGHLIGHT", "FAVORITE", "QUOTES"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="hover:text-amber-500 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="bg-amber-500 px-5 h-10 rounded-md text-base font-medium text-black cursor-pointer hover:bg-amber-400 transition">
        Order Now
      </button>
    </nav>
  );
};


export default Navbar