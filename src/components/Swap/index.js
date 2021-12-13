import React from "react";
import "./Swap.css"
import Iframe from "react-iframe";
function Swap() {

//   useEffect(() => {
//     window.location.href = "https://app.uniswap.org/#/swap?outputCurrency=0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
//   }, []);

  return (
    <body id='no-scroll' class='no-scroll'>
      <div className="website-uniswap">
          <Iframe className="website" src="https://pancakeswap.finance/swap?outputCurrency=0x653069e0f21b73db5f4512d3a523b4f510c1911c" scrolling="no" />
      </div>
    </body>
  );
}

export default Swap;