import React from "react";
import ActionButton from "../components/ActionButton";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";

export default function Home() {
  return (
    <>
      <Balance sats={12345678} />
      <Transactions />
      {/* <ActionButton /> */}
    </>
  );
}
