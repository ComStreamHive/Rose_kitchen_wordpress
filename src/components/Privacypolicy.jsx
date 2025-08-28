import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-8">
      <div className="max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center md:text-left">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800">
          <p className="text-base mb-2">Last Updated: July 24, 2025</p>

          <p>
            Our privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>

          <p>
            This website gathers certain kinds of personal information together with the personal data and use...
          </p>

          <p>
            Our directors and their communications related to our product and services.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <p>
              Donum or its Communication Information we provide when you contact...
            </p>

            <h2 className="text-lg md:text-xl font-semibold text-gray-900">2. Information We Obtain from Third Parties</h2>
            <p>
              When we collect personal information from the website and on social media platforms...
            </p>
          </div>

          {/* Example list */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              4. How We Use Your Personal Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to inquiries.</li>
              <li>Provide and operate services.</li>
              <li>Communicate updates and alerts.</li>
              <li>Process applications and requests.</li>
              <li>Comply with legal processes.</li>
            </ul>
          </div>

          {/* Example final section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">10. Contact Information</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact:
            </p>
            <p>
              Donum Communications<br />
              Phone: (855) 555-5555
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
