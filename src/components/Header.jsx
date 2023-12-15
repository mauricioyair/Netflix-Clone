import {React, useState, useEffect} from "react";
import LogoDesktop from './LogoDesktop'
import LogoMobile from './LogoMobile'



const renderLogo = () => {
  const checkForDevice = () => window.innerWidth < 640;
  const [isMobile, setIsMobile] = useState(checkForDevice());

  useEffect(() => {
    const handlePageResized = () => {
      setIsMobile(checkForDevice());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handlePageResized);
      window.addEventListener('orientationchange', handlePageResized);
      window.addEventListener('load', handlePageResized);
      window.addEventListener('reload', handlePageResized);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handlePageResized);
        window.removeEventListener('orientationchange', handlePageResized);
        window.removeEventListener('load', handlePageResized);
        window.removeEventListener('reload', handlePageResized);
      }
    };
  }, []);

  console.log(isMobile);

  return isMobile ? <LogoMobile /> : <LogoDesktop />;
};

export default function Header() {
  return(
    <header className="fixed top-0 flex flex-nowrap justify-between bg-black/[.75] text-white h-auto z-20 w-full p-2 px-4 md:px-12">
      <div className="flex flex-row items-center">
        <a href="/" className="fill-color-primary inline-block leading-3 align-middle">
          {renderLogo()}
        </a>
      </div>
      <div className="flex flex-row md:flex-nowrap items-center text-[13px]">

        <div className="mx-1.5 hidden md:block">SERIES Y PELÍCULAS ILIMITADAS</div>

        <button className="border-0 bg-color-primary rounded-[2px] font-normal leading-4 min-h-0 py-[9px] px-[12px]  md:py-[9px] md:px-[20px] mx-1.5 hover:bg-color-hover" type="submit">SUSCRIBIRSE AHORA</button>

        <a href="#" className="border rounded-[2px] font-normal leading-4 min-h-0 py-[9px] px-[20px] mx-1.5 hover:bg-[hsla(0,0%,59%,.3)]">INICIAR SESIÓN</a>

      </div>
    </header>
  )
}