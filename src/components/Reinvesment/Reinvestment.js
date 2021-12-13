import React from "react";
import "./Reinvestment.css"
import Iframe from "react-iframe";
function Reinvestment() {

//   useEffect(() => {
//     window.location.href = "https://app.uniswap.org/#/swap?outputCurrency=0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
//   }, []);

  return (
    <body id='no-scroll' class='no-scroll'>
      <div className="website-uniswap">
          <Iframe className="website" src="https://pancakeswap.finance/swap?inputCurrency=0xcc42724c6683b7e57334c4e856f4c9965ed682bd&outputCurrency=0x653069e0f21b73db5f4512d3a523b4f510c1911c" scrolling="no" />
      </div>
    </body>
  );
}

export default Reinvestment;