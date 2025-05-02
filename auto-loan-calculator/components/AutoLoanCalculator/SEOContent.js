import React from 'react';
import Head from 'next/head';

const SEOContent = () => {
  return (
    <Head>
      <title>Auto Loan Calculator</title>
      <meta name="description" content="Calculate your auto loan payments with our easy-to-use auto loan calculator. Get detailed information on monthly payments, total interest, and amortization schedule." />
      <meta name="keywords" content="auto loan calculator, car loan calculator, loan payment calculator, auto loan, car loan" />
      <meta name="author" content="Auto Loan Calculator Team" />
      <meta property="og:title" content="Auto Loan Calculator" />
      <meta property="og:description" content="Calculate your auto loan payments with our easy-to-use auto loan calculator. Get detailed information on monthly payments, total interest, and amortization schedule." />
      <meta property="og:image" content="/images/calculator-icon.svg" />
      <meta property="og:url" content="http://localhost:3000/calculator" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Auto Loan Calculator",
            "url": "http://localhost:3000/calculator",
            "description": "Calculate your auto loan payments with our easy-to-use auto loan calculator. Get detailed information on monthly payments, total interest, and amortization schedule.",
            "author": {
              "@type": "Organization",
              "name": "Auto Loan Calculator Team"
            }
          }
        `}
      </script>
    </Head>
  );
};

export default SEOContent;
