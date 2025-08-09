import { useEffect } from "react"
import AOS from "aos"
import Navbar from "./components/Navbar"
import burger from "./assets/burger.png"
import burger2 from "./assets/burger-cheese.png"
import burger3 from "./assets/burger-sauce.png"
import burger4 from "./assets/burger-double-cheese.png"
import burger5 from "./assets/onion-burger.png"
import burger6 from "./assets/triple-cheese-burger2.png"
import people from "./assets/people.png"

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${burger})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <Navbar />
        <HomeComponent />
      </div>

      {/* Section lain */}
      <MenuComponent />
      <HighlightComponent />
      <FavoriteComponent />
      <Quotes />
      <Footer />
    </div>
  )
}


const HomeComponent = () => {
  return (
    <div
      className="flex flex-col justify-center gap-5 px-6 pb-16 h-[85%] w-full sm:w-[80%] md:w-[70%] lg:w-[45%] lg:mx-14 lg:my-14 mx-auto"
      data-aos="fade-up"
      id="HOME"
    >
      <h4 className="text-slate-200 text-sm sm:text-base" data-aos="fade-right">
        FIRST BITE, INSTANT LOVE
      </h4>
      <h1
        className="text-white text-3xl sm:text-4xl lg:text-5xl leading-snug sm:leading-[3rem] font-medium"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        The fastest food, for instant hungry
      </h1>
      <p
        className="text-slate-200 text-sm sm:text-base leading-6 sm:leading-7"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Welcome to Burger Queen, where every burger is handcrafted with premium ingredients,
        juicy patties, and bold flavors that leave you wanting more. From classic cheeseburgers to
        signature creations, we serve satisfaction in every bite.
      </p>
      <button
        className="bg-amber-500 w-32 sm:w-40 h-10 rounded-md mt-2 text-sm sm:text-base font-medium text-black cursor-pointer"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        Order Now
      </button>
    </div>
  )
}

const MenuComponent = () => {
  const menuItems = [
    { img: burger2, title: "Melt Cheese Burger", desc: "Classic, Creamy, and Cheesy Perfection" },
    { img: burger3, title: "Tomato Sauce Burger", desc: "Juicy Beef Meets Zesty Tomato Bliss" },
    { img: burger4, title: "Doub'Cheese Burger", desc: "Twice the Cheese, Double the Pleasure" },
    { img: burger5, title: "Onion Beef Burger", desc: "Savory Beef with a Sweet Onion Twist" }
  ]

  return (
    <div className="bg-white px-6 sm:px-10 md:px-14 pb-20 mt-28" id="MENU">
      <div
        className="flex flex-wrap justify-center gap-6"
        data-aos="fade-up"
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="shadow-xl pb-5 w-56 bg-white rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img src={item.img} alt={item.title} className="w-full h-auto" />
            <div className="flex flex-col justify-center items-center text-center p-3 gap-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const HighlightComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center px-6 sm:px-12 lg:px-48 py-12 sm:py-16 lg:py-20 bg-amber-50 gap-8"
      data-aos="fade-up"
      id="HIGHLIGHT"
    >
      <div
        className="w-full lg:w-7/12 flex justify-center"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img
          className="w-3/4 sm:w-2/3 rounded-lg"
          src={burger6}
          alt="Triple Cheese Burger"
          loading="lazy"
        />
      </div>

      <div
        className="w-full lg:w-5/12 flex flex-col justify-center gap-6 text-center lg:text-left"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl leading-snug font-semibold">
          Triple Cheese Burger
        </h1>
        <p className="text-black text-base sm:text-lg leading-relaxed">
          Three layers of rich, melted cheese, stacked high with juicy beef and
          fresh buns for the ultimate indulgence.
        </p>
        <button className="bg-amber-500 w-36 sm:w-44 h-12 rounded-md mt-2 text-base font-semibold text-black cursor-pointer mx-auto lg:mx-0 transition hover:bg-amber-600">
          Order Now
        </button>
      </div>
    </div>
  )
}

type MenuItem = {
  img: string
  title: string
  desc: string
}

const FavoriteComponent = () => {
  const menuItems: MenuItem[] = [
    {
      img: burger,
      title: "Melt Cheese Burger",
      desc: "Classic, Creamy, and Cheesy Perfection",
    },
    {
      img: burger2,
      title: "Tomato Sauce Burger",
      desc: "Juicy Beef Meets Zesty Tomato Bliss",
    },
    {
      img: burger3,
      title: "Doub'Cheese Burger",
      desc: "Twice the Cheese, Double the Pleasure",
    },
    {
      img: burger4,
      title: "Onion Beef Burger",
      desc: "Savory Beef with a Sweet Onion Twist",
    },
  ]

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true })
  }, [])

  return (
    <div className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-16" id="FAVORITE">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} 
            className="w-full sm:w-[90%] lg:w-full rounded-lg shadow-lg flex items-end"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 280,
            }}
          >
            <div className="bg-black/40 w-full p-4 flex flex-col gap-2 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
              <button className="bg-amber-500 w-32 sm:w-40 h-9 sm:h-10 rounded-md mt-2 text-sm sm:text-base font-medium text-black cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Quotes = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-8 px-6 sm:px-12 lg:px-24 py-12 pb-32 bg-white"
      data-aos="fade-up"
      id="QUOTES"
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={people}
          alt="Quotes"
          className="w-full sm:w-2/3 md:w-1/2 rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2">
        <h2 className="text-6xl text-amber-600 font-extrabold select-none">‟</h2>
        <p className="text-black text-base sm:text-lg leading-relaxed max-w-md">
          When passion leads your way,<br />
          and love guides every step,<br />
          success becomes inevitable.
        </p>
        <h1 className="mt-2 text-xl font-semibold text-gray-800">Ananda N Wijaya</h1>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="pb-6 bg-gray-950">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className=" hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Brand Center</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Discord Server</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Twitter</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Facebook</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Download</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">iOS</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Android</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Windows</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">MacOS</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 bg-gray-950 flex flex-col gap-4">
            <div>
                <span className="text-sm text-gray-300 sm:text-center">© {new Date().getFullYear()} Burger Queen. All rights reserved.
                </span>
            </div>
            <div className="flex justify-center gap-5">
                <a href="#" className="text-gray-400 hover:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                      <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                      <span className="sr-only">Discord community</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                      <span className="sr-only">Twitter page</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                      </svg>
                      <span className="sr-only">GitHub account</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                    </svg>
                      <span className="sr-only">Dribbble account</span>
                  </a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default App