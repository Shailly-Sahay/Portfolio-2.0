import { useState } from "react";
import { Menu as LucideMenu, X as LucideX } from "lucide-react"; // Import icons
import { useSelector, useDispatch } from "react-redux";
import { setIsHomePage } from "../../../state/state";

import Button from "../Button";
import PageLink from "../Link";
import Logo from "../Logo";

const Navigation = () => {
  const isHomePage = useSelector((state) => state.global.isHomePage);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBar = () => {
    dispatch(setIsHomePage(false));
    setIsMenuOpen(false);
  };

  return (
    <div className="section-pd !py-10 fixed  top-0 w-full z-[500] ">
      <nav className="flex justify-between items-center py-4 lg:py-6">
        {/* Logo */}
        <div className="logo">
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LucideX size={28} /> : <LucideMenu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {isHomePage ? (
            <Button
              text="Visit My Portfolio"
              role="link"
              href="portfolio"
              onClick={handleNavBar}
            />
          ) : (
            <>
              <PageLink text="Home" href="/" />
              <PageLink text="Projects" href="/" />
              <Button
                text="Hit me up"
                role="link"
                href="portfolio"
                variant="secondary"
              />
            </>
          )}
        </div>

        {/* Mobile Menu (Only visible when `isMenuOpen` is true) */}
        {isMenuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 lg:hidden">
            <PageLink text="Home" href="/" onClick={handleNavBar} />
            <PageLink text="Projects" href="/" onClick={handleNavBar} />
            <Button
              text="Hit me up"
              role="link"
              href="portfolio"
              variant="secondary"
              onClick={handleNavBar}
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
