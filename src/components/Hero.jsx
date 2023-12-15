import React from "react";

export default function Hero() {
  return(
    <section className="bg-[#181818] relative text-white w-full md:m-auto md:max-w-[1600px] saturate-25">      
        <div className="flex flex-col flex-nowrap md:flex-row order-1 m-auto relative w-full">        
          <div className="flex flex-col flex-nowrap justify-center w-full md:max-w-[800px] md:min-w-[500px] p-10 md:p-[64px] relative md:w-[35%] z-2 after:-z-1 after:absolute after:bottom-0 after:left-0 after:right-0 md:after:-right-40 after:top-0 after:content-[''] after:bg-linear-gradient-right">
            <div className="relative">
              <img src="https://occ-0-637-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWT5HIl9YXE1ZG5Khq2rGPAsxwcnKPhqJMO3E2WiZBVNemNHAlH148400SKvcFoxJFZsxLBpOCb31CliGnE3RYbxVAyHf10wyEfqZHliqF0z.png?r=a6e" className="h-auto w-full"/>
            </div>
            <div className="mt-top-40">
              <h1 className="mt-[10px] text-medium font-medium leading-30">Rick y Morty</h1>
              <div className="mt-top-16">
                <a className="text-color-link text-sm font-normal leading-18 inline-block">Comedias</a>
              </div>
              <div className="flex items-center mt-top-16">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5V6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V8C0 6.89543 0.89543 6 2 6H4V5ZM12 5V6H6V5C6 3.34315 7.3431 2 9 2C10.6569 2 12 3.34315 12 5ZM2 8V16H16V8H2ZM8 10V14H10V10H8Z" fill="white"></path></svg>
                <span className="pl-3">No disponible en el plan con anuncios debido a las restricciones de licencias.</span>
              </div>
              <div className="flex items-start flex-row flex-wrap mt-top-16">
                <div>
                  <p>Rick, un científico alcohólico, secuestra a su influenciable nieto, Morty, para vivir peligrosas aventuras a través de nuestro cosmos y universos paralelos.</p>
                </div>
                <div className="mt-top-16">
                  <span className="text-color-link">Protagonizada por: </span>
                  <span>Justin Roiland,Chris Parnell,Spencer Grammer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row z-1 order-[-1] md:order-1">
            <div className="bg-[url('https://occ-1-637-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXxO3kkJpSHCgAmumfs_MXySHJ8NGt6Bc_qw2sD9f9MWoobM1_6sQgWl-BtUq0lMqF54tGVLOMr6H560-73Kt94jTyl_Yxo9xTHh.jpg?r=202')] bg-[50%] absolute right-0 bg-no-repeat bg-cover w-full h-full after:content-[''] after:h-full after:w-full after:absolute after:left-0 after:bg-linear-gradient-bottom">              
            </div>
          </div>
        </div>
    </section>
  )
}