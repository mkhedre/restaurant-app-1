import useIsScrollTop from "./Hooks/useIsScrollTop";
import HeaderContact from "./components/HeaderContact";
import HeaderIcons from "./components/HeaderIcons";
import BurgerIcon from "./components/HeaderIcons/BurgerIcon";
import HeaderLogo from "./components/HeaderLogo";
import HeaderMenus from "./components/HeaderMenus";
import HeaderPhone from "./components/HeaderPhone";

export default function Header() {
  const scrollTopPosition = useIsScrollTop();

  return (
    <header
      className={
        "bg-white sticky top-0 w-full z-50 " +
        (scrollTopPosition && "shadow-header")
      }>
      <nav
        className={`flex flex-row items-center justify-between relative transition-all container ${
          scrollTopPosition != 0 ? "h-[70px]" : "h-[90px]"
        }`}>
        <BurgerIcon /> {/* for small screens*/}
        <HeaderLogo />
        <HeaderMenus />
        <HeaderContact />
        <HeaderIcons />
        <HeaderPhone /> {/*for small screens */}
      </nav>
    </header>
  );
}
