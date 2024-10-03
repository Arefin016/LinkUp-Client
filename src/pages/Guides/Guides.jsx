import { Link, NavLink, Outlet } from "react-router-dom"

const Guides = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Guide page sidebar */}

      <div className="w-64 min-h-screen bg-[#F8F9FA] mt-5">
        <ul className="menu space-y-5 font-semibold text-xl">
          <li>
            <NavLink to={"/guides/introduction"}>Introduction</NavLink>
          </li>
          <li>
            <NavLink to={"/guides/useLinkUp"}>How to Use LinkUp</NavLink>
          </li>

          <li>
            <NavLink to={"/guides/features"}>Key Features of LinkUp</NavLink>
          </li>

          <li>
            <NavLink to={"/guides/faqS"}>
              Frequently Asked Questions (FAQs)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/guides/bestUse"}>Tips for Best Use</NavLink>
          </li>

          <li>
            <NavLink to={"/guides/contactUs"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      {/* Guide page content */}
      <div className="divider divider-horizontal divider-start"></div>
      <div className="flex-1">
        {/* {<h2 className="md:text-7xl text-5xl md:mt-32 font-bold text-[#0B3558] animate__animated animate__bounce text-center">
          Welcome to LinkUp <br /> Tutorials
        </h2>} */}
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Guides
