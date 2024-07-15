import React, { useState, useEffect } from 'react';
import '../HomeLoan/HomeLoan.css';
import EMICalculator from '../HomeLoan/EmiCalculator';
import Header from '../Header'


interface FAQItem {
  question: string;
  answer: string;
}

interface PublicLoanData {
  id: number;
  lender: string;
  upTo30Lakh: string;
  above30LakhTo75Lakh: string;
  above75Lakh: string;
  link: string;
}

interface PrivateLoanData {
  id: number;
  lender: string;
  upTo30Lakh: string;
  above30LakhTo75Lakh: string;
  above75Lakh: string;
  link: string;
}

const HomeLoanInterestRates: React.FC = () => {
  const [publicLoanData, setPublicLoanData] = useState<PublicLoanData[]>([]);
  const [privateLoanData, setPrivateLoanData] = useState<PrivateLoanData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/finance-public/public-home-loans');
        if (!response.ok) {
          throw new Error('Failed to fetch public home loan data');
        }
        const data = await response.json();
        setPublicLoanData(data);
      } catch (error) {
        console.error('Error fetching public home loan data:', error);
        setError('Failed to fetch public home loan data');
      }
    };

    const fetchPrivateData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/finance-private/private-home-loans');
        if (!response.ok) {
          throw new Error('Failed to fetch private home loan data');
        }
        const data = await response.json();
        setPrivateLoanData(data);
      } catch (error) {
        console.error('Error fetching private home loan data:', error);
        setError('Failed to fetch private home loan data');
      } finally {
        setLoading(false); 
      }
    };

    fetchPublicData();
    fetchPrivateData();
  }, []);


  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: 'What is the pre-EMI interest rate of a home loan?',
      answer: 'Depending on the stages of completion of a housing project, a house loan may be disbursed in tranches. Borrowers may be compelled to service the interest cost incurred on the disbursed loan amount until the final disbursement of the loan amount. This is referred to as Pre-EMI interest. Pre-EMI interest is charged monthly from the initial disbursement date until the start of EMI.'
    },
    {
      question: 'Does the housing loan procedure have verification?',
      answer: 'Yes, the housing loan procedure typically includes verification of documents and the property.'
    },
    {
      question: 'How to get a home loan from the bank?',
      answer: 'You can apply for a home loan from a bank by submitting the required documents and fulfilling the eligibility criteria set by the bank.'
    },
    {
      question: 'Can I change my fixed interest rate to a floating rate during the loan term?',
      answer: 'This depends on the terms and conditions of the loan agreement with your bank.'
    },
    {
      question: 'How long does it take to process a housing loan?',
      answer: 'The processing time for a housing loan can vary from bank to bank but generally takes a few weeks.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }
  return (
    <div className="homeloan-container">
      <Header />
      <div className="home-loan-interest-rates">
        <h1 className="homeloan-main-heading">Home Loan Interest Rates</h1>
        <p>
        <br></br>
        The interest rates applied on home loans depend on several factors, such as the credit score of the applicant, loan amount, tenure, etc. It is suggested that the applicant go through the current home loan interest rates applied by different lenders before applying for a home loan. A slight difference in the interest rates can affect the overall interest rate of the borrower.
        <br></br><br></br>
        Here we have discussed the current home loan interest rates offered by all the banks in India and the methods to calculate them.        
        </p>
      </div>
      <br></br>
      <p>Here is the list of home loan interest rates 2024 for all the top public banks in India:</p>
      <h2 className="homeloan-main-heading">Home Loan Interest Rates of Top Public Sector Banks 2024</h2>
      <table className="homeloan-table">
        <thead>
          <tr>
            <th className="homeloan_header">Name of Lender</th>
            <th className="homeloan_header">Up to Rs. 30 Lakh</th>
            <th className="homeloan_header">Above Rs. 30 Lakh & Up to Rs. 75 Lakh</th>
            <th className="homeloan_header">Above Rs. 75 Lakh</th>
            <th className="homeloan_header">Visit Site</th>
          </tr>
        </thead>
        <tbody className="table-body-scroll">
            {publicLoanData.map(loan => (
              <tr key={loan.id} className="homeloan_row">
                <td className="homeloan_cell">{loan.lender}</td>
                <td className="homeloan_cell">{loan.upTo30Lakh}</td>
                <td className="homeloan_cell">{loan.above30LakhTo75Lakh}</td>
                <td className="homeloan_cell">{loan.above75Lakh}</td>
                <td className="homeloan_cell"><a href={loan.link} target="_blank" rel="noopener noreferrer">Visit</a></td>
              </tr>
            ))}
          </tbody>
      </table>
      <h2 className="homeloan-main-heading">Home Loan Interest Rates of Top Private Sector Banks 2024</h2>
      <p>Here is the list of home loan interest rates 2024 for all the top private banks in India:</p>
      <table className="homeloan-table">
        <thead>
          <tr>
            <th className="homeloan_header">Name of Lender</th>
            <th className="homeloan_header">Up to Rs. 30 Lakh</th>
            <th className="homeloan_header">Above Rs. 30 Lakh & Up to Rs. 75 Lakh</th>
            <th className="homeloan_header">Above Rs. 75 Lakh</th>
            <th className="homeloan_header">Visit Site</th>
          </tr>
        </thead>
        <tbody className="table-body-scroll">
            {privateLoanData.map(loan => (
              <tr key={loan.id} className="homeloan_row">
              <td className="homeloan_cell">{loan.lender}</td>
              <td className="homeloan_cell">{loan.upTo30Lakh}</td>
              <td className="homeloan_cell">{loan.above30LakhTo75Lakh}</td>
              <td className="homeloan_cell">{loan.above75Lakh}</td>
              <td className="homeloan_cell"><a href={loan.link} target="_blank" rel="noopener noreferrer">Visit</a></td>
            </tr>
            ))}
          </tbody>
      </table>
      <h2 className="homeloan-main-heading">How Banks Calculate Home Loan Interest?</h2>
      <p>
      Banks and HFCs use monthly reducing balance method to calculate interest rates on home loan. In this method of calculation,<b>the interest is calculated on the outstanding principal amount following each EMI payment.</b>  The interest component in a home loan EMI is the highest in the initial few years of the loan tenure and as the outstanding principal decreases with each EMI paid, the interest component in the EMI also decreases.
      </p>

      <h2 className="homeloan-main-heading">Types of Home Loans Interest Rates</h2>
      <p>
      There are three types of home loan interest rates: fixed, floating, and hybrid.
          <ul>
            <li>
              <h4  className='homeloan-subheading'>Fixed Rate Interest Rate</h4>
            - A fixed interest rate remains consistent throughout the loan tenure, resulting in a steady home loan EMI. When the present home loan rate of interest is fairly low, and an upward trend is expected, applying for a fixed interest rate is preferable  
            </li>

            <li>
            <h4 className='homeloan-subheading'>Floating Interest Rate</h4>
            - A variable or floating interest rate is subject to current market lending rates and may fluctuate during the loan term. The EMIs on house loans will increase or fall in response to changes in interest rates.
            </li>

            <li>
            <h4  className='homeloan-subheading'>Hybrid Interest Rate</h4>
            - Hybrid rate home loans are a mix of fixed-rate and floating rate home loans. They will initially have a fixed interest rate for a set period, after which it will change into the floating rate of interest. Such housing loans are best suited for those who got the loan at a low fixed rate and plan to prepay or foreclose it before the floating rate starts
            </li>
          </ul>

          <h2 className="homeloan-main-heading">How to Apply for a Home Loan?</h2>
          <p>
          Here is the step-by-step process for a home loan application:
          <br></br>
          <h4 className='homeloan-subheading'>Step 1: Fill out the Home Loan Application Form</h4>
          The process of obtaining a home loan begins by filling out the home loan application form. One must fill in the following details while submitting the application form:
          <ul>
            <li>The applicant's personal information (Name, Phone number, etc.)
</li>
            <li>Residential or current address.</li>
            <li>Monthly income of the applicant.</li>
            <li>Educational background.</li>
            <li>Current and previous employme className='homeloan-subheading'nt details.
</li>
            <li>The details of the property for which the housing loan will be applied.</li>
            <li>The estimated cost of the property.</li>
            <li>The current method of financing the home.</li>
          </ul>
          <h4 className='homeloan-subheading'>Step 2: Verification and Processing </h4>
          The bank begins processing your Home Loan application after you submit the form and the essential documents. The bank also investigates your credit score thoroughly. As a result, it is important that you keep a positive credit history. You must submit accurate information during the application process. Any false information will lead to your loan application getting rejected.
          <h4 className='homeloan-subheading'>Step 3: Loan Sanction</h4>
          All the documents that are submitted during the application process will be verified by the bank to process the application further. It normally takes 1-2 days, or even less, if the paperwork is found correct after the verification process
          <br></br><br></br>
          In certain situations, the bank can also request the applicant to come for an in-person verification before the loan is approved. This is done to gather more information about the application and to ensure that he or she will be able to repay the loan plus interest.
          <h4 className='homeloan-subheading'>Step 4: Technical and Legal Check</h4>
          The bank undertakes legal and technical inspections before disbursing the loan money. The property for which you have requested a loan will be verified by the bank representatives. If the property is under construction, they will inspect the construction progress and work quality.
          <br></br><br></br>
          The bank representatives will analyze the actual value of the property during the technical check. The property's status (under construction or for sale) will also be considered.
          <br></br><br></br>
          If the property is a resale, the bank will look at the age and upkeep of the property. In case of a resale, the bank may additionally investigate if the property has previously been mortgaged. They will also investigate the ownership rights of the property to see if there is any conflicting information in the documents and proofs provided.
          <h4 className='homeloan-subheading'>Step 5: Payment of Home Loan Processing Fee</h4>
          After successfully verifying the paperwork and legal check, the applicant will have to pay the home loan processing fee to the bank. This processing fee is collected to maintain the loan account of the applicant. 
          <br></br><br></br>
          Usually, the processing fee for a home loan ranges from 0.25 % to 0.50 % of the loan amount.
          <br></br><br></br>
          For example, suppose you have applied for a home loan of Rs. 15 lahks, then you will have to pay a processing fee of Rs. 3,750 (at 0.25%) and Rs. 7,500 (at 0.50%), respectively.
          <h4 className='homeloan-subheading'>Step 6: Disbursal of Loan Amount</h4>
          This is the final step of the home loan application process. After you have met all the eligibility criteria, a formal agreement letter will be sent to you. Following that, your loan will be disbursed to your bank account. You will receive a complete home loan EMI schedule at your registered email address.
          </p>
      </p>

      <h2 className="homeloan-main-heading">Methods to Calculate Home Loan Interest Rate</h2>
      <p>
      There are two major methods for the calculation of the housing loan interest rate, and they are:
      <h4 className='homeloan-subheading'>a) Home Loan Interest Rate Formula for All Bank Calculations</h4>
      This is a manual form of calculation, and the below-mentioned formula is used:
      
      [P x r x (1+r)^n]/[(1+r)^n-1]

      Here, p = Principal, R = Rate, and n = term.
      <h4 className='homeloan-subheading'>b) EMI Calculator for the Current Home Loan Interest Rate Calculations</h4>
      This is an online EMI calculator that is used to calculate the interest rate, monthly EMI, and total payable amount. You can find an EMI calculator option on your Bank's online website. You will have to enter these details to calculate your monthly EMI:
      <ul>
        <li>Rate of Housing Loan Interest Rate</li>
        <li>Total Loan Amount</li>
        <li>Total Tenure for Loan Repayment</li>
      </ul>
      </p>
      <div className="emi"><EMICalculator /></div>

      <h2 className="homeloan-main-heading">Factors Affecting the Housing Loan Interest Rates</h2>
      <p>
      <br></br>
       The following are the factors that determine your home loan eligibility and the final housing loan interest rates that will be offered:
      <br></br><br></br>
      <ul>
        <li>
          <b>Employment and Income:</b>
          Lenders consider your salary, type of employment, and employer profile when determining your home loan eligibility. Therefore, you must provide appropriate employment details for successful verification.
        </li>
        <br></br>
        <li>
        <b>Interest Rate Type:</b>
        The interest rate you choose for your home loan will impact how quickly you can repay your lender. In fixed-rate house loans, EMIs remain constant throughout the loan term. On the other hand, floating rates fluctuate in response to changes in the lending rate, such as the Repo Linked Lending Rate (RLLR). Lenders will usually charge higher interest rates on fixed-rate house loans due to the higher interest rate risk inherent with fixed-rate home loans.
        </li>
        <br></br>
        <li>
        <b>Loan Amount:</b>
        The amount of money you want to borrow might also affect the interest rate on your home loan. House loans up to Rs. 30 lakhs often have cheaper interest rates than larger home loans. 
        </li>
        <br></br>
        <li>
          <b>Credit Score</b>
          The credit or CIBIL score is a number that represents your credit history. Paying your EMIs on time will help you maintain a positive credit score. If your credit score is 750 or higher, the chances of getting a housing loan can be high. Many banks and HFCs offer lower-interest home loans to candidates with higher credit scores.
        </li>
      </ul>
      <br></br>
      You must check all the eligibility conditions before applying for a housing loan. You should go through the current home loan interest rates of all the banks and decide accordingly. You can also visit any bank branch in your city and seek professional assistance to get the options and offers available.
      </p>

      <h2 className="homeloan-main-heading">FAQs</h2>
        
        <div>
      <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          <div
            className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
            style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default HomeLoanInterestRates;
