import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import LogoIcon from "./LogoIcon";
import { useSpring, animated } from "@react-spring/web";
import { useToggle } from "../ts/ToggleHeader";
import { Link } from "react-router-dom";

const iconsFA = [
  <FontAwesomeIcon
    icon={icon({ name: "moon" })}
    className="h-[38px] px-2.5 text-light dark:text-dark"
  />,
  <FontAwesomeIcon
    icon={icon({ name: "sun" })}
    className="h-[38px] px-2.5 text-light dark:text-dark"
  />,
];

export const Header = () => {
  const springs = useSpring({
    config: {
      duration: 225, //in mS
    },
    transform: useToggle.getState().light
      ? "translateX(20px)"
      : "translateX(-4px)",
    from: { y: 1.6 },
  });

  return (
    <div className="border-b border-black border-opacity-60">
<<<<<<< HEAD
      <nav className="flex items-center justify-between w-full text-black nav bg-electric-blue dark:bg-duke-blue dark:text-white">
        <div className="flex items-center space-x-4">
          <a href="/" className="site-logo hover:text-white">
            <LogoIcon />
          </a>
          <span className="font-sans text-lg cursor-pointer hover:text-white dark:text-white dark:hover:text-suva-grey">
            Luminosity LEDs
          </span>
        </div>
        <div className="flex flex-row">
        {iconsFA[0]}
          <div className="relative flex flex-col justify-center h-5 m-2 bg-black rounded-full dark:bg-white w-9 ">
            <animated.button style={springs}
=======
      <nav className="nav h-[56px] flex justify-between items-center w-full bg-electric-blue dark:bg-duke-blue text-black dark:text-white pr-4">
        <div className="flex items-center">
          <a href="/" className="site-logo">
            <LogoIcon />
          </a>
          <a href="/">
            <span className="text-[32px] font-inter text-light hover:text-hover-light cursor-pointer dark:text-dark dark:hover:text-hover-dark">
              Luminosity LEDs
            </span>
          </a>
        </div>
        <div className="flex flex-row items-center">
          {iconsFA[0]}
          <div className="relative bg-light dark:bg-dark rounded-full h-[25px] w-[50px] flex flex-col justify-center m-2    ">
            <animated.button
              style={springs}
>>>>>>> master
              onClick={() => {
                useToggle.setState({ light: !useToggle.getState().light });
                console.log(useToggle.getState().light);
              }}
            >
              {useToggle.getState().light ? (
                <FontAwesomeIcon
                  icon={icon({ name: "circle" })}
                  className="h-[16px] pr-4 py-1.5 text-electric-blue dark:text-duke-blue"
                />
              ) : (
                <FontAwesomeIcon
                  icon={icon({ name: "circle" })}
                  className="h-[16px]  pr-4 py-1.5 text-electric-blue dark:text-duke-blue"
                />
              )}
            </animated.button>
          </div>
          {iconsFA[1]}
        </div>
        <ul className="flex space-x-16">
          <li>
            <Link to="/login">
<<<<<<< HEAD
              <button className="px-4 py-2 font-sans text-base text-black rounded hover:bg-A6EDF2 hover:text-white dark:text-white dark:hover:text-suva-grey">
=======
              <button className="px-4 py-2 text-light rounded hover:bg-A6EDF2 hover:text-hover-light font-sans text-[32px] dark:text-dark dark:hover:text-hover-dark">
>>>>>>> master
                Log In
              </button>
            </Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to ="">
            <button className="px-4 py-2 font-sans text-base text-black rounded hover:bg-A6EDF2 hover:text-white dark:text-white dark:hover:text-suva-grey">
              Sign Up
            </button>
=======
            <Link to="/register">
            <button className="px-4 py-2 text-light rounded hover:bg-A6EDF2 hover:text-hover-light font-sans text-[32px] dark:text-dark dark:hover:text-hover-dark">
                Sign Up
              </button>
>>>>>>> master
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
