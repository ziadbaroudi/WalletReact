import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { WalletContext } from "../StateProvider";

function Balance({ currentWallet }) {
  let id = useParams().name;
  const [state] = useContext(WalletContext);
  let balance = parseInt(currentWallet.balance, 10);
  console.log(balance);
  if (state.transactions.length != 0) {
    state.transactions
      .filter((el) => el.id == id)
      .map((tran) => {
        if (tran.type === "income") {
          balance += parseInt(tran.amount, 10);
        }

        if (tran.type === "expense") {
          balance -= parseInt(tran.amount, 10);
        }
      });
  }

  return (
    <div>
      <p>{balance}</p>
    </div>
  );
}

export default Balance;
