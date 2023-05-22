import React from "react";
import Logo from './../components/Logo'

export default function Header() {
  return(
    <div className="fixed flex justify-between bg-black text-white h-24 z-20 w-full py-[16px] px-[3%]">
      <div className="flex flex-row items-center">
        <a href="/" className="fill-[#e50914] inline-block leading-3 align-middle">
          <Logo />
        </a>        
      </div>
      <div className="flex flex-row items-center text-[13px]">

        <div className="mx-1.5">SERIES Y PELÍCULAS ILIMITADAS</div>

        <button className="border-0 bg-[#e50914] rounded-[2px] font-normal leading-4 min-h-0 py-[9px] px-[20px] mx-1.5 hover:bg-[#f40612]" type="submit">SUSCRIBIRSE AHORA</button>

        <a href="#" className="border rounded-[2px] font-normal leading-4 min-h-0 py-[9px] px-[20px] mx-1.5 hover:bg-[hsla(0,0%,59%,.3)]">INICIAR SESIÓN</a>

      </div>
    </div>
  )
}