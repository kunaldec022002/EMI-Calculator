import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateEMI = () => {
    const principal = Number(amount);
    const monthlyRate = Number(rate) / 12 / 100;
    const months = Number(years) * 12;

    const emiValue =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emiValue * months;
    const totalInterest = totalPayment - principal;

    setEmi(emiValue.toFixed(2));
    setInterest(totalInterest.toFixed(2));
    setTotal(totalPayment.toFixed(2));
  };

  return (
    <div className="container">
      <h1>EMI Calculator</h1>

      <input
        type="number"
        placeholder="Loan Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Interest Rate (%)"
        onChange={(e) => setRate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Tenure (Years)"
        onChange={(e) => setYears(e.target.value)}
      />

      <button onClick={calculateEMI}>Calculate EMI</button>

      <div className="result">
        <h3>Monthly EMI: ₹{emi}</h3>
        <h3>Total Interest: ₹{interest}</h3>
        <h3>Total Payment: ₹{total}</h3>
      </div>

      <hr />

      <h3>Kunal Ingale</h3>
      <p>kunalingale72@gmail.com</p>

      <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noreferrer"
      >
        <button>Built for Digital Heroes</button>
      </a>
    </div>
  );
}

export default App;