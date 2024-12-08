import React from "react";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiActivity,
  FiBarChart2,
  FiZap,
} from "react-icons/fi";
import { BiSolidCoinStack } from "react-icons/bi";

const cardData = [
  {
    title: "Top 5 Social Activity",
    icon: <FiActivity className="text-blue-500 text-2xl" />,
    headers: ["Token", "Interactions"],
    items: [
      {
        name: "Kava",
        symbol: "KAVA",
        value: "64",
        change: "+255.56%",
        time: "7d",
      },
      {
        name: "Cardano",
        symbol: "ADA",
        value: "5.06K",
        change: "+49.28%",
        time: "7d",
      },
      {
        name: "Trust Wallet Token",
        symbol: "TWT",
        value: "26.38K",
        change: "+13.78%",
        time: "7d",
      },
      {
        name: "Ethereum Classic",
        symbol: "ETC",
        value: "256",
        change: "+10.34%",
        time: "7d",
      },
      {
        name: "Monero",
        symbol: "XMR",
        value: "1.99K",
        change: "+9.87%",
        time: "7d",
      },
    ],
  },
  {
    title: "Top 5 Volume",
    icon: <FiBarChart2 className="text-purple-500 text-2xl" />,
    headers: ["Exchange", "Volume"],
    items: [
      { name: "Binance", value: "$11.82B", change: "-4.87%", time: "24h" },
      { name: "Gate.io", value: "$976.92M", change: "-3.44%", time: "24h" },
      {
        name: "Coinbase Exchange",
        value: "$1.46B",
        change: "-9.09%",
        time: "24h",
      },
      { name: "LBank", value: "$1.46B", change: "+13.11%", time: "24h" },
      {
        name: "MEXC Global",
        value: "$946.82M",
        change: "-12.53%",
        time: "24h",
      },
    ],
  },
  {
    title: "Top 5 Gainers",
    icon: <FiTrendingUp className="text-green-500 text-2xl" />,
    headers: ["Token", "Total Gain"],
    items: [
      { name: "ADAUP", value: "$0.503", change: "+22.38%", time: "24h" },
      { name: "Injective", value: "$8.988", change: "+22.13%", time: "24h" },
      {
        name: "Band Protocol",
        value: "$1.726",
        change: "+20.73%",
        time: "24h",
      },
      { name: "COTI", value: "$0.08018", change: "+18.35%", time: "24h" },
      { name: "Conflux", value: "$0.321", change: "+17.84%", time: "24h" },
    ],
  },
  {
    title: "Top 5 Losers",
    icon: <FiTrendingDown className="text-red-500 text-2xl" />,
    headers: ["Token", "Total Loss"],
    items: [
      { name: "ARPA Chain", value: "$0.05045", change: "-9.06%", time: "24h" },
      { name: "Klaytn", value: "$0.1730", change: "-6.49%", time: "24h" },
      {
        name: "Ethernity Chain",
        value: "$1.853",
        change: "-5.12%",
        time: "24h",
      },
      {
        name: "FC Porto Fan Token",
        value: "$2.3739",
        change: "-1.98%",
        time: "24h",
      },
      {
        name: "Orion Protocol",
        value: "$1.0530",
        change: "-1.89%",
        time: "24h",
      },
    ],
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-4">
            {card.icon}
            <h2 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h2>
          </div>

          <div className="flex justify-between text-gray-500 text-sm pb-2 border-b">
            <span>{card.headers[0]}</span>
            <span>{card.headers[1]}</span>
          </div>

          <ul>
            {card.items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <BiSolidCoinStack className="text-gray-400 text-xl" />
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    {item.symbol && (
                      <p className="text-gray-500 text-xs">{item.symbol}</p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-gray-800 font-semibold">{item.value}</p>
                  <p
                    className={`text-sm font-medium ${
                      item.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.change}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CardList;
