import { useState } from "react";
import { Menu as LucideMenu, X as LucideX } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setIsHomePage } from "../../../state/state";
import { motion, AnimatePresence } from "framer-motion"; // 🚀 Import Framer Motion

import Button from "../Button";
import PageLink from "../Link";
import Logo from "../Logo";

const Navigation = () => {
  const isHomePage = useSelector((state) => state.global.isHomePage);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBar = () => {
    dispatch(setIsHomePage(false));
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="section-pd !py-10 fixed top-0 w-full z-[500]">
      <nav className="flex justify-between items-center py-4 lg:py-6">
        {/* Logo (Always Visible) */}
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
              href="portfolio"
              onClick={handleNavBar}
            />
          ) : (
            <>
              <PageLink text="Home" href="/" />
              <PageLink text="Projects" href="/" />
              <Button text="Hit me up" href="portfolio" variant="secondary" />
            </>
          )}
        </div>

        {/* Mobile Menu (Animated with Framer Motion) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }} // 👈 Start position (hidden above)
              animate={{ y: "0%", opacity: 1 }} // 👈 Slide down effect
              exit={{ y: "-100%", opacity: 0 }} // 👈 Slide up when closing
              transition={{ duration: 0.4, ease: "easeInOut" }} // 👈 Smooth animation
              className="absolute top-[100%] left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 lg:hidden"
            >
              {isHomePage ? (
                <Button
                  text="Visit My Portfolio"
                  href="portfolio"
                  onClick={handleNavBar}
                />
              ) : (
                <>
                  <PageLink text="Home" href="/" onClick={handleNavBar} />
                  <PageLink text="Projects" href="/" onClick={handleNavBar} />
                  <Button
                    text="Hit me up"
                    href="portfolio"
                    variant="secondary"
                    onClick={handleNavBar}
                  />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navigation;
