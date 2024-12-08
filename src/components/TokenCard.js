const SentimentComponent = ({ sentiment, sentimentDate }) => {
  const sentimentColor = {
    Fear: "text-red-500",
    "Extreme Greed": "text-green-500",
    Neutral: "text-gray-500",
    Greed: "text-green-400",
  };

  const sentimentBarColor = {
    Fear: "bg-red-500",
    "Extreme Greed": "bg-green-500",
    Neutral: "bg-gray-500",
    Greed: "bg-green-400",
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700">Sentiment</h3>
      <div className={`text-lg font-bold ${sentimentColor[sentiment]}`}>
        {sentiment}
      </div>
      <div className="relative mt-2 h-2 w-full bg-gray-200 rounded-full">
        <div
          className={`absolute top-0 left-0 h-2 rounded-full ${sentimentBarColor[sentiment]}`}
          style={{
            width:
              sentiment === "Extreme Greed"
                ? "80%"
                : sentiment === "Greed"
                ? "60%"
                : sentiment === "Neutral"
                ? "50%"
                : "20%", // Adjust widths as needed
          }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Based on data from {sentimentDate}
      </p>
    </div>
  );
};

const TokenCard = ({ token }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex space-x-6">
      <div className="flex space-x-4">
        {token.icon}
        <div>
          <h2 className="text-xl font-bold">
            {token.name}{" "}
            <span className="text-gray-500 text-sm">{token.symbol}</span>
          </h2>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Rank #{token.rank}
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Coin
            </span>
          </div>
          <div className="text-gray-500 text-xs">
            On {token.watchlists.toLocaleString()} watchlists
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-7 gap-4">
        <div className="col-span-1">
          <div className="text-gray-500 text-sm">Price</div>
          <div className="text-md font-bold">
            ${token.price.toLocaleString()}
          </div>
          <div
            className={`text-sm ${
              token.priceChange24h < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            24h {token.priceChange24h}%
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-gray-500 text-sm">Market Cap</div>
          <div className="text-md font-bold">${token.marketCap}B</div>
          <div
            className={`text-sm ${
              token.marketCapChange24h < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            24h {token.marketCapChange24h}%
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-gray-500 text-sm">Volume</div>
          <div className="text-md font-bold">${token.volume}B</div>
          <div
            className={`text-sm ${
              token.volumeChange24h > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            24h {token.volumeChange24h}%
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-gray-500 text-sm">Circulating Supply</div>
          <div className="text-md font-bold">
            {token.circulatingSupply}M {token.symbol}
          </div>
          <div className="text-blue-500 text-sm">
            {token.circulatingPercentage}%
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-gray-500 text-sm">Social Following</div>
          <div className="flex items-center space-x-2">
            <div className="text-md font-bold">
              {token.social.discordFollowers.toLocaleString()}K
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-gray-500 text-sm">Holders</div>
          <div className="text-md font-bold">
            {token.holders.toLocaleString()}
          </div>
          <div
            className={`text-sm ${
              token.holdersChange24h < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {token.holdersChange24h}%
          </div>
        </div>
        <div className="col-span-1">
          <SentimentComponent
            sentiment={token.sentiment}
            sentimentDate={token.sentimentDate}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
