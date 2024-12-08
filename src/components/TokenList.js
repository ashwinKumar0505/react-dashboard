import React from "react";
import { FaBitcoin, FaEthereum, FaBtc } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import TokenCard from "./TokenCard";

const data = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    watchlists: 3994278,
    price: 29025.99,
    priceChange24h: -2.39,
    marketCap: 561.87,
    marketCapChange24h: -9.17,
    volume: 30.92,
    volumeChange24h: 19.23,
    cexVolume: 30.92,
    dexVolume: 21.79,
    circulatingSupply: 19.36,
    circulatingPercentage: 92,
    maxSupply: 31.48,
    totalSupply: 19.36,
    social: {
      discordFollowers: 93.1,
      twitterFollowers: 93.1,
      discordInteractions: 12,
      twitterInteractions: 12,
    },
    holders: 4397229,
    holdersChange24h: -0.004,
    sentiment: "Fear",
    sentimentDate: "May 17, 2023 13:41",
    icon: <FaBitcoin className="text-4xl text-orange-500" />,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    watchlists: 2787321,
    price: 1887.93,
    priceChange24h: -1.41,
    marketCap: 218.81,
    marketCapChange24h: -9.17,
    volume: 15.08,
    volumeChange24h: 19.23,
    cexVolume: 30.92,
    dexVolume: 21.79,
    circulatingSupply: 120.4,
    circulatingPercentage: 92,
    maxSupply: 31.48,
    totalSupply: 19.36,
    social: {
      discordFollowers: 85.3,
      twitterFollowers: 85.3,
      discordInteractions: 8,
      twitterInteractions: 8,
    },
    holders: 2789332,
    holdersChange24h: 1.205,
    sentiment: "Extreme Greed",
    sentimentDate: "May 17, 2023 13:41",
    icon: <FaEthereum className="text-4xl text-purple-500" />,
  },
  {
    name: "Tether",
    symbol: "USDT",
    rank: 3,
    watchlists: 1774123,
    price: 1,
    priceChange24h: -0.04,
    marketCap: 81.61,
    marketCapChange24h: -9.17,
    volume: 42.96,
    volumeChange24h: 19.23,
    cexVolume: 30.92,
    dexVolume: 21.79,
    circulatingSupply: 81.59,
    circulatingPercentage: 92,
    maxSupply: 31.48,
    totalSupply: 19.36,
    social: {
      discordFollowers: 1.3,
      twitterFollowers: 1.3,
      discordInteractions: 1,
      twitterInteractions: 1,
    },
    holders: 3397229,
    holdersChange24h: -1.024,
    sentiment: "Neutral",
    sentimentDate: "May 17, 2023 13:41",
    icon: <SiTether className="text-4xl text-green-500" />,
  },
  {
    name: "BNB",
    symbol: "BNB",
    rank: 4,
    watchlists: 2694378,
    price: 308.18,
    priceChange24h: -0.79,
    marketCap: 51.55,
    marketCapChange24h: -9.17,
    volume: 0.875,
    volumeChange24h: 19.23,
    cexVolume: 30.92,
    dexVolume: 21.79,
    circulatingSupply: 155.8,
    circulatingPercentage: 92,
    maxSupply: 31.48,
    totalSupply: 19.36,
    social: {
      discordFollowers: 9.3,
      twitterFollowers: 9.3,
      discordInteractions: 2,
      twitterInteractions: 2,
    },
    holders: 1756233,
    holdersChange24h: -0.1,
    sentiment: "Greed",
    sentimentDate: "May 17, 2023 13:41",
    icon: <FaBtc className="text-4xl text-yellow-500" />,
  },
];

const TokenList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">All Tokens</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by token name or tag"
            className="border border-gray-300 rounded-lg px-4 py-2 mr-4"
          />
          <button className="bg-gray-200 px-4 py-2 rounded-lg">Columns</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg ml-2">
            Filters
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {data.map((token, index) => (
          <TokenCard key={index} token={token} />
        ))}
      </div>
    </div>
  );
};

export default TokenList;
