import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../HomeLoan/HomeLoan.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(4200000);
    const [interestRate, setInterestRate] = useState<number>(10.7);
    const [loanTenure, setLoanTenure] = useState<number>(8);

    const calculateEMI = (principal: number, annualInterestRate: number, years: number): number => {
        const monthlyInterestRate = annualInterestRate / (12 * 100);
        const numberOfMonths = years * 12;
        return (
            (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
            (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)
        );
    };

    const emi = calculateEMI(loanAmount, interestRate, loanTenure);
    const totalAmount = emi * loanTenure * 12;
    const totalInterest = totalAmount - loanAmount;

    const pieData = {
        labels: ['Principal amount', 'Interest amount'],
        datasets: [{
            data: [loanAmount, totalInterest],
            backgroundColor: ['#36A2EB', '#FF6384']
        }]
    };

    const pieOptions = {
        maintainAspectRatio: false,
        responsive: false,
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <h2>EMI Calculator</h2>
                <div className="inputGroup">
                    <label>Loan Amount (₹):</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                    />
                    <Slider
                        min={100000}
                        max={10000000}
                        step={10000}
                        value={loanAmount}
                        onChange={value => setLoanAmount(value as number)}
                    />
                </div>
                <div className="inputGroup">
                    <label>Rate of Interest (% p.a):</label>
                    <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    />
                    <Slider
                        min={1}
                        max={20}
                        step={0.1}
                        value={interestRate}
                        onChange={value => setInterestRate(value as number)}
                    />
                </div>
                <div className="inputGroup">
                    <label>Loan Tenure (Years):</label>
                    <input
                        type="number"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(parseFloat(e.target.value))}
                    />
                    <Slider
                        min={1}
                        max={30}
                        step={1}
                        value={loanTenure}
                        onChange={value => setLoanTenure(value as number)}
                    />
                </div>
                <div className="result">
                    <p>Monthly EMI: ₹{emi.toFixed(2)}</p>
                    <p>Principal Amount: ₹{loanAmount.toFixed(2)}</p>
                    <p>Total Interest: ₹{totalInterest.toFixed(2)}</p>
                    <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
                </div>
                <div className="pie-chart-container">
                    <Pie data={pieData} options={pieOptions} width={370} height={370} />
                </div>
            </div>
        </div>
    );
};

export default EMICalculator;
