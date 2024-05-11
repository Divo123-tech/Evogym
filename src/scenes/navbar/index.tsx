// import {useState} from "react";
// import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link";
type Props = { selectedPage: string; setSelectedPage: (page: string) => void };
// props: Props
const Navbar = ({selectedPage, setSelectedPage} : Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      {/* big navbar */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* inner navbar that contains all the routes */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side  (logo)*/}
            <img alt="logo" src={Logo} />

            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              {/* all the routes */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* sign in and become a member */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
