import React, { useEffect, useRef } from "react";

function ProfilePageHeader() {
  const pageHeader = useRef();

  useEffect(() => {
    const updateScroll = () => {
      if (window.innerWidth < 991) {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = `translate3d(0, ${windowScrollTop}px, 0)`;
      }
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("assets/img/fabio-mangione.jpg")})`,
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default ProfilePageHeader;
