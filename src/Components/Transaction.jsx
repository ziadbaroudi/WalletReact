import React, { useContext } from "react";
import { WalletContext } from "../StateProvider";
import TransactionCard from "./TransactionCard";

import { Card, Container, Col, Row } from "react-bootstrap";
const Transaction = ({ currentWallet }) => {
  const [state] = useContext(WalletContext);
  return (
    <Container
      Fluid
      className="mt-2 d-flex flex-wrap justify-content-center"
      style={{ flexDirection: "row" }}>
      {state.transactions &&
        state.transactions
          .filter((transaction) => (transaction.id = currentWallet.id))
          .map((tran, i) => <TransactionCard key={`${i}`} tran={tran} />)}
    </Container>
  );
};

export default Transaction;
