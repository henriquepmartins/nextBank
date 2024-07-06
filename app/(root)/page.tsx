import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";
import { DataTableDemo } from "@/components/TableConfig";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Henrique",
    lastName: "Martins",
    email: "contact@henriquepereira.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bem Vindo,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acesse e gerencie sua conta e transações eficientemente."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Transações Recentes
        <DataTableDemo />
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />

      
    </section>
  );
};

export default Home;
