import "./App.css";
import Navbar from "./components/Navbar";
import ReferalBlock from "./components/ReferalBlock";
import Step from "./components/Step";
import GetAppBar from "./components/GetAppBar";
import Footer from "./components/Footer";
import invite from "./assets/Invite Friends Img.svg";
import coins from "./assets/Collect coins img.svg";
import vouchers from "./assets/Get voucher img.svg";

function App() {
  const steps = [
    {
      image: invite,
      alt: "send referal",
      action: "invite friends",
      instructions: "Refer friends with your unique referral link.",
    },
    {
      image: coins,
      alt: "collect coints",
      action: "collect coins",
      instructions:
        "Get 1 coin for each friend that installs our extension using your referral link.",
    },
    {
      image: vouchers,
      alt: "get reward vouchers",
      action: "get voucher",
      instructions:
        "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    },
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="mainWrapper">
        <ReferalBlock></ReferalBlock>
        <div className="stepsWrapper">
          {steps.map((x, i) => (
            <Step key={i} item={x} number={i}></Step>
          ))}
        </div>
      </div>
      <GetAppBar></GetAppBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
