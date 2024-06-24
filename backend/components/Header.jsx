import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";
import { BiExitFullscreen } from "react-icons/bi";


const Header = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>ADMIN</h1>
          <div className="headerham flex flex-center">
            <RiBarChartHorizontalLine />
          </div>
        </div>
        <div className="rightnav flex gap-2">
          <div>
            {isFullScreen ? (
              <BiExitFullscreen onClick={toggleFullScreen} />
            ) : (
              <GoScreenFull onClick={toggleFullScreen} />
            )}
          </div>
          <div className="notification">
            <img src="/images/notification.png" alt="notification" />
          </div>
          <div className="profilenav">
            <img src="/images/profile.png" alt="profile" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
