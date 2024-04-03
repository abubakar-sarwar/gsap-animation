import { FiMenu } from "react-icons/fi";
import { HoverText } from "..";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50 max-sm:right-4">
      <nav className="flex items-center max-sm:justify-between">
        <Link href="/" className="block">
          <h2 className="font-medium tracking-wider text-xl">ThrillQuest</h2>
        </Link>
        <ul className="max-sm:hidden flex space-x-4 ml-16 text-xs sm:mt-1">
          <li>
            <HoverText
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              About ThrillQuest
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Journey
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Faqs
            </HoverText>
          </li>
          <li>
            <HoverText
              href="/about"
              className="capitalize"
              mainTextClass="opacity-50"
            >
              Contact
            </HoverText>
          </li>
        </ul>
        <div className="sm:hidden">
          <FiMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
