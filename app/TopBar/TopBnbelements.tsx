// 'use client'
// import React, { useState } from 'react';
// import MoreButton from '@/app/components/MoreButton';

// interface ListItemProps {
//   item: { icon?: string; text: string; link: string };
// }

// const ListItem: React.FC<ListItemProps> = ({ item }) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     // Redirect to the specified link
//     window.location.href = item.link;
//     setClicked(!clicked);
//   };

//   return (
//     <td className="table-cell">
//       <div
//         className={`element-box ${clicked ? 'clicked' : ''}`}
//         onClick={handleClick}
//       >
//         {item.icon && <img src={item.icon} alt="icon" className="icon" />}
//         <p>{item.text}</p>
//       </div>
//       <style jsx>{`
//         .element-box {
//           padding: 8px;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           text-align: center;
//           position: relative;
//           transition: background-color 0.3s;
//         }

//         .element-box.clicked::after {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 5px;
//           background-color: #fffff;
//         }

//         .element-box:hover::after {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 5px;
//           background-color: #161616;
//         }

//         .icon {
//           max-width: 20px;
//           max-height: 20px;
//           margin-right: 10px;
//         }

//         p {
//           margin: 0px;
//           font-size: 12px;
//         }
//       `}</style>
//     </td>
//   );
// };

// const HomePage: React.FC = () => {
//   const initialElements = [
//     { text: 'All DEXes' },
    // { icon: "/uniswap.webp", text: 'PancakeswapV3', link: '/eth/dex/ethuniswapv3' },
    // { icon: "/uniswap.webp", text: 'Pancakeswap', link: '/eth/dex/ethuniswap' },
    // { icon: "/sushiswap.webp", text: 'Apeswap', link: '/eth/dex/ethsushiswap' },
    // { icon: "/pancakeswap.webp", text: 'BiSwap', link: '/eth/dex/ethpan' },
    // { icon: "/shibaswap.webp", text: 'MDEX', link: '/eth/dex/ethshiba' },
    // { icon: "/defiswap.webp", text: 'BabySwap', link: '/eth/dex/ethdefi' },
    // { icon: "/kyberswap.webp", text: 'FstsSwap', link: '/eth/dex/ethkyber' },
    // { icon: "/fraxswap.webp", text: 'NomiSwap', link: '/eth/dex/ethfrax' },
    // { icon: "/radioshack.webp", text: 'KyberSwap', link: '/eth/dex/ethradio' },
    // { icon: "/radioshack.webp", text: 'KnightSwap', link: '/eth/dex/ethradio' },
    // { icon: "/radioshack.webp", text: 'ConeExchange', link: '/eth/dex/ethradio' },
    // { icon: "/radioshack.webp", text: 'BakerySwap', link: '/eth/dex/ethradio' },
    // { icon: "/radioshack.webp", text: 'W3Swap', link: '/eth/dex/ethradio' },
    // { icon: "/radioshack.webp", text: 'BaryonSwap', link: '/eth/dex/ethradio' },
//     // ... (other elements with links)
//   ];

//   const [elements, setElements] = useState(initialElements);
//   const [showMore, setShowMore] = useState(false);

//   // Function to handle click on "More" button
//   const hasMoreThan7Elements = () => elements.length > 10;


//   const handleMoreClick = () => {
//     setShowMore(!showMore);
//   };

//   const displayedElements = showMore ? elements : elements.slice(0, 10);

//   return (
//     <div className="outer-box">
//     <table className="custom-table">
//       <tbody>
//         <tr className="table-row">
//           {elements.slice(0, 10).map((item, index) => (
//             <td key={index} className="table-cell">
//               <div className="element-box">
//                   {item.icon && <img src={item.icon} alt="icon" className="icon" />}
//                   <p>{item.text}</p>
//                 </div>
//               </td>
//             ))}
//             {elements.length > 10 && (
//               <td className="table-cell">
//                 {/* <MoreButton
//                   elements={elements.slice(10)}
//                   handleClick={handleMoreClick}
//                 /> */}
                //  <MoreButton elements={elements} />
//               </td>
//             )}
//           </tr>
//         </tbody>
//       </table>
//       <style jsx>{`
//         .outer-box {
//           background: rgb(22, 26, 30);
//           padding: 2px;
//           border: 1px solid #3c3c3c;
//           display: flex;
//           flex-direction: column;
//         }

//         .custom-table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         .table-row {
//           display: flex;
//           flex-wrap: wrap;
//         }

//         .table-cell {
//           margin-right: 8px;
//         }

//         .element-box {
//           padding: 8px;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           text-align: center;
//           position: relative;
//         }

//         .icon {
//           max-width: 20px;
//           max-height: 20px;
//           margin-right: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;

'use client'
import React, { useState } from 'react';
import MoreButton from '@/app/components/MoreButton';

interface ListItemProps {
  item: { icon?: string; text: string; link: string };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Redirect to the specified link
    window.location.href = item.link;
    setClicked(!clicked);
  };

  return (
    <td className="table-cell">
      <div
        className={`element-box ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        {item.icon && <img src={item.icon} alt="icon" className="icon" />}
        <p>{item.text}</p>
      </div>
      <style jsx>{`
        .element-box {
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          position: relative;
        }

        .element-box.clicked::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 5px;
          background-color: #fffff;
        }

        .element-box:hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 5px;
          background-color: #161616;
        }

        .icon {
          max-width: 20px;
          max-height: 20px;
          margin-right: 10px;
        }

        p {
          margin: 0px;
          font-size: 14px;
        }
      `}</style>
    </td>
  );
};

const HomePage: React.FC = () => {
  const initialElements = [
    { text: 'All DEXes' },
    { icon: "/pancakeswap.webp", text: 'PancakeswapV3', link: '/bnb-chain/dex/bnbpanv3' },
    { icon: "/pancakeswap.webp", text: 'Pancakeswap', link: '/bnb-chain/dex/bnbpan' },
    { icon: "/apeswap.webp", text: 'Apeswap', link: '/bnb-chain/dex/bnbape' },
    { icon: "/biswap.webp", text: 'BiSwap', link: '/bnb-chain/dex/bnbbiswap' },
    { icon: "/mdex.webp", text: 'MDEX', link: '/bnb-chain/dex/bnbmedx' },
    { icon: "/babyswap.webp", text: 'BabySwap', link: '/bnb-chain/dex/bnbbaby' },
    { icon: "/fstswap.webp", text: 'FstsSwap', link: '/bnb-chain/dex/bnbfst' },
    { icon: "/nomiswap.webp", text: 'NomiSwap', link: '/bnb-chain/dex/bnbnomi' },
    { icon: "/kyberswap.webp", text: 'KyberSwap', link: '/bnb-chain/dex/bnbkyber' },
    { icon: "/knightswap.webp", text: 'KnightSwap', link: '/bnb-chain/dex/bnbknight' },
    { icon: "/coneexchange.webp", text: 'ConeExchange', link: '/bnb-chain/dex/bnbcone' },
    { icon: "/bakeryswap.webp", text: 'BakerySwap', link: '/bnb-chain/dex/bnbbakery' },
    { icon: "/w3swap.webp", text: 'W3Swap', link: '/bnb-chain/dex/bnbw3' },
    { icon: "/baryonswap.webp", text: 'BaryonSwap', link: '/bnb-chain/dex/bnbbaryon' },
    // ... (other elements with links)
  ];

  const [elements, setElements] = useState(initialElements);
  const [showMore, setShowMore] = useState(false);

  // Function to handle click on "More" button
  const hasMoreThan7Elements = () => elements.length > 11;

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="outer-box">
      <table className="custom-table">
        <tbody>
          <tr className="table-row">
            {elements.slice(0,11).map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
            {hasMoreThan7Elements() && (
              <td className="table-cell">
                <MoreButton elements={elements} />
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .outer-box {
          background: rgb(22, 26, 30);
          padding: 2px;
          border: 1px solid #3c3c3c;
          display: flex;
          flex-direction: column;
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-row {
          display: flex;
          flex-wrap: wrap;
        }

        .table-cell {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

