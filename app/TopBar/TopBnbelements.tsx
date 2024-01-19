
// 'use client'
// import React, { useState } from 'react';
// // import MoreButton from '@/app/components/MoreButton';
// import Image from 'next/image';

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
//         {item.icon && (
//           <div className="icon">
//             {/* Use Image component from next/image */}
//             <Image src={item.icon} alt="icon" width={20} height={20} />
//           </div>
//         )}
//         <p>{item.text}</p>
//       </div>
      // <style jsx>{`
      //   .element-box {
      //     padding: 8px;
      //     cursor: pointer;
      //     display: flex;
      //     align-items: center;
      //     justify-content: space-between;
      //     text-align: center;
      //     position: relative;
      //   }

      //   .element-box.clicked::after {
      //     content: '';
      //     position: absolute;
      //     left: 0;
      //     bottom: 0;
      //     width: 100%;
      //     height: 5px;
      //     background-color: #fffff;
      //   }

      //   .element-box:hover::after {
      //     content: '';
      //     position: absolute;
      //     left: 0;
      //     bottom: 0;
      //     width: 100%;
      //     height: 5px;
      //     background-color: #161616;
      //   }

      //   .icon {
      //     max-width: 20px;
      //     max-height: 20px;
      //     margin-right: 10px;
      //   }

      //   p {
      //     margin: 0px;
      //     font-size: 14px;
      //   }
      // `}</style>
//     </td>
//   );
// };

// const HomePage: React.FC = () => {
  // const initialElements = [
  //   { text: 'All DEXes' , link: '/'},
  //   { icon: "/pancakeswap.webp", text: 'PancakeswapV3', link: '/bnb-chain/dex/bnbpanv3' },
  //   { icon: "/pancakeswap.webp", text: 'Pancakeswap', link: '/bnb-chain/dex/bnbpan' },
  //   { icon: "/apeswap.webp", text: 'Apeswap', link: '/bnb-chain/dex/bnbape' },
  //   { icon: "/biswap.webp", text: 'BiSwap', link: '/bnb-chain/dex/bnbbiswap' },
  //   { icon: "/mdex.webp", text: 'MDEX', link: '/bnb-chain/dex/bnbmedx' },
  //   { icon: "/babyswap.webp", text: 'BabySwap', link: '/bnb-chain/dex/bnbbaby' },
  //   { icon: "/fstswap.webp", text: 'FstsSwap', link: '/bnb-chain/dex/bnbfst' },
  //   { icon: "/nomiswap.webp", text: 'NomiSwap', link: '/bnb-chain/dex/bnbnomi' },
  //   { icon: "/kyberswap.webp", text: 'KyberSwap', link: '/bnb-chain/dex/bnbkyber' },
  //   { icon: "/knightswap.webp", text: 'KnightSwap', link: '/bnb-chain/dex/bnbknight' },
  //   { icon: "/coneexchange.webp", text: 'ConeExchange', link: '/bnb-chain/dex/bnbcone' },
  //   { icon: "/bakeryswap.webp", text: 'BakerySwap', link: '/bnb-chain/dex/bnbbakery' },
  //   { icon: "/w3swap.webp", text: 'W3Swap', link: '/bnb-chain/dex/bnbw3' },
  //   { icon: "/baryonswap.webp", text: 'BaryonSwap', link: '/bnb-chain/dex/bnbbaryon' },
  //   // ... (other elements with links)
  // ];

//   const [elements, setElements] = useState(initialElements);
//   const [showMore, setShowMore] = useState(false);

//   // Function to handle click on "More" button
//   const hasMoreThan7Elements = () => elements.length > 14;

//   const handleMoreClick = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="outer-box">
//       <table className="custom-table">
//         <tbody>
//           <tr className="table-row">
//             {elements.slice(0,14).map((item, index) => (
//               <ListItem key={index} item={item} />
//             ))}
//             {/* {hasMoreThan7Elements() && (
//               <td className="table-cell">
//                 <MoreButton elements={elements} />
//               </td>
//             )} */}
//           </tr>
//         </tbody>
//       </table>
      // <style jsx>{`
      //   .outer-box {
      //     background: rgb(22, 26, 30);
      //     padding: 2px;
      //     border: 1px solid #3c3c3c;
      //     display: flex;
      //     flex-direction: column;
      //   }

      //   .custom-table {
      //     width: 100%;
      //     border-collapse: collapse;
      //   }

      //   .table-row {
      //     display: flex;
      //     flex-wrap: wrap;
      //   }

      //   .table-cell {
      //     margin-right: 8px;
      //   }
      // `}</style>
//     </div>
//   );
// };

// export default HomePage;


// pages/index.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MoreButton from '../components/MoreButton'; // Import the MoreButton component

interface ListItemProps {
  item: { icon?: string; text: string; link: string };
  
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const handleClick = () => {
    // Redirect to the specified link
    window.location.href = item.link;
  };

  return (
    <td className="table-cell">
      <div className="element-box" onClick={handleClick}>
        {item.icon && (
          <div className="icon">
            <Image src={item.icon} alt="icon" width={20} height={20} />
          </div>
        )}
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
    { text: 'All DEXes' , link: '/'},
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
  const [isMobile, setIsMobile] = useState(false);
  const [showAllElements, setShowAllElements] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayElements = isMobile ? (showAllElements ? elements : elements.slice(0, 3)) : elements;

  return (
    <div className="outer-box">
      <table className="custom-table">
        <tbody>
          <tr className="table-row">
            {displayElements.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
            {isMobile && elements.length > 3 && (
              <td className="table-cell">
                <MoreButton elements={elements.slice(3)}  />
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
