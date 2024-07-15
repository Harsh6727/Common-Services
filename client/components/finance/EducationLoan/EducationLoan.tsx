import React, { useState, useEffect } from 'react';
import '../EducationLoan/EducationLoan.css';
import EMICalculator from '../HomeLoan/EmiCalculator';
import Header from '../Header'

interface FAQItem {
  question: string;
  answer: string;
}

interface PublicLoanData {
  id: number;
  lender: string;
  interest: string;
  link: string;
}

const EducationLoanInterestRates: React.FC = () => {
  const [publicLoanData, setPublicLoanData] = useState<PublicLoanData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/education-loan/education-loans');
        if (!response.ok) {
          throw new Error('Failed to fetch public education loan data');
        }
        const data = await response.json();
        setPublicLoanData(data);
      } catch (error) {
        console.error('Error fetching public education loan data:', error);
        setError('Failed to fetch public education loan data');
      } finally {
        setLoading(false); // Mark loading as complete regardless of success or failure
      }
    };

    fetchPublicData();
  }, []);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is the eligibility criteria for an education loan?',
      answer: `The eligibility criteria for an education loan typically include admission to a recognized institution, a co-borrower (usually a parent or guardian), and a good academic record. 
      The borrower must be an Indian national and provide proof of admission to the desired course. Additionally, banks may require collateral or a third-party guarantee for loans above a certain amount. 
      Meeting these criteria helps ensure that the borrower is capable of successfully completing their education and repaying the loan in the future.`
    },
    {
      question: 'Can I get a loan for studying abroad?',
      answer: `Yes, many banks offer education loans specifically designed for students seeking to pursue higher education abroad. 
      These loans cover expenses such as tuition fees, accommodation, travel, and other related costs. 
      To qualify, applicants typically need to provide proof of admission to a recognized foreign university or institution. 
      Banks may also require a co-borrower (usually a parent or guardian) and collateral for loans above a certain amount. 
      Loans for studying abroad provide an accessible financial solution for students aiming to achieve their educational goals internationally.`
    },
    {
      question: 'What is the interest rate on education loans?',
      answer: `The interest rate on education loans varies depending on the lender, loan amount, repayment period, and the borrower's credit profile. 
      Generally, interest rates for education loans are competitive and lower than other forms of personal loans. 
      Banks may offer fixed or floating interest rates, with floating rates typically tied to a benchmark rate like the Marginal Cost of Funds based Lending Rate (MCLR) or Repo Linked Lending Rate (RLLR). 
      Prospective borrowers are advised to compare rates from different banks to find the most favorable terms for their educational financing needs.`
    },
    {
      question: 'Are there any tax benefits on education loans?',
      answer: `Yes, under Section 80E of the Income Tax Act, borrowers can claim tax benefits on the interest paid towards education loans. 
      The entire interest paid during the year is deductible from taxable income, reducing the overall tax liability. 
      This deduction is available for a maximum of 8 years or until the interest on the loan is fully repaid, whichever is earlier. 
      To claim this benefit, borrowers must ensure that the loan is taken for the higher education of themselves, their spouse, or their children, from a recognized institution, whether in India or abroad.`
    },
    {
      question: 'How long does it take to process an education loan?',
      answer: `The processing time for an education loan can vary depending on the lender's internal processes and the completeness of the borrower's documentation. 
      Typically, the process involves verifying the applicant's admission to the educational institution, assessing the loan amount, evaluating the borrower's creditworthiness, and finalizing the terms of the loan. 
      Once all documentation is in place and meets the lender's requirements, approval and disbursement of the loan can take anywhere from a few days to a few weeks. 
      Prospective borrowers are advised to apply well in advance of their course start date to allow sufficient time for processing and disbursement of funds.`
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
    <div className="educationloan-container">
      <Header />
      <div className="education-loan-interest-rates">
        <h1 className="educationloan-main-heading">Education Loan Interest Rates</h1>
        <p>
          The interest rates applied on education loans depend on several factors, such as the academic record of the applicant, loan amount, tenure, etc. It is suggested that the applicant go through the current education loan interest rates applied by different lenders before applying for an education loan. A slight difference in the interest rates can affect the overall cost of the loan.
          <br /><br />
          Here we have discussed the current education loan interest rates offered by all the banks in India and the methods to calculate them.
        </p>
      </div>
      <p>Here is the list of education loan interest rates 2024 for all the top public banks in India:</p>
      <h2 className="educationloan-main-heading">Education Loan Interest Rates of Top Public Sector Banks 2024</h2>
      <table className="educationloan-table">
        <thead>
          <tr>
            <th className="educationloan_header">Name of Lender</th>
            <th className="educationloan_header">Interest Rates</th>
            <th className="educationloan_header">Visit Site</th>
          </tr>
        </thead>
        <tbody>
          {publicLoanData.map(loan => (
            <tr key={loan.id} className="educationloan_row">
              <td className="educationloan_cell">{loan.lender}</td>
              <td className="educationloan_cell">{loan.interest}</td>
              <td className="educationloan_cell"><a href={loan.link} target="_blank" rel="noopener noreferrer">Visit</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="educationloan-main-heading">How Banks Calculate Education Loan Interest?</h2>
      <p>
        Banks and financial institutions use the reducing balance method to calculate interest rates on education loans. In this method of calculation, <b>the interest is calculated on the outstanding principal amount following each EMI payment.</b> The interest component in an education loan EMI is the highest in the initial few years of the loan tenure and as the outstanding principal decreases with each EMI paid, the interest component in the EMI also decreases.
      </p>
      <h2 className="educationloan-main-heading">Types of Education Loans Interest Rates</h2>
      <p>
        There are three types of education loan interest rates: fixed, floating, and hybrid.
        <ul>
          <li>
            <h4 className="educationloan-subheading">Fixed Interest Rate</h4>
            A fixed interest rate remains consistent throughout the loan tenure, resulting in a steady EMI. When the present education loan rate of interest is fairly low, and an upward trend is expected, applying for a fixed interest rate is preferable.
          </li>
          <li>
            <h4 className="educationloan-subheading">Floating Interest Rate</h4>
            A variable or floating interest rate is subject to current market lending rates and may fluctuate during the loan term. The EMIs on education loans will increase or fall in response to changes in the lending rate.
          </li>
          <li>
            <h4 className="educationloan-subheading">Hybrid Rate</h4>
            A hybrid interest rate starts with a fixed rate for a set period, after which the rate becomes variable.
          </li>
        </ul>
      </p>
      <h2 className="educationloan-main-heading">EMI Calculator</h2>
      <EMICalculator />

      <h2 className="educationloan-main-heading">FAQs</h2>
      <div className="faq-section">
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
  );
};

export default EducationLoanInterestRates;
