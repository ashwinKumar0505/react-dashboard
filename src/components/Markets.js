import React from "react";
import TokenList from "./TokenList";
import CardList from "./CardList";
import SubscriptionBanner from "./SubscriptionBanner";
import Header from "./Header";

const Markets = () => {
  return (
    <div>
      <Header />
      <SubscriptionBanner />
      <CardList />
      <TokenList />
    </div>
  );
};

export default Markets;
