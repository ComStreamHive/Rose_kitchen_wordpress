import React from 'react';
import Navbar from './Navbar1'
import Navbar2 from './Navbar2'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <div className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-8">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 text-left md:text-left">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800 text-left md:text-justify">

          <p className="text-base mb-2">Last Updated: August 28, 2025</p>

          <p>
            Our privacy policy has been compiled to better serve those who are concerned with how their
             'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law 
             and information security, is information that can be used on its own or with other information to identify, 
             contact, or locate a single person, or to identify an individual in context. Please read our privacy policy 
             carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally 
             Identifiable Information in accordance with our website.
          </p>

          <p>
            By providing and opting in your mobile phone number, you consent to receive periodic SMS/MMS messages from Rose Kitchen.
             These messages may include important updates, exclusive offers, promotions tailored to your interests, and other communications related to our products and services.

          </p>

   
          {/* Sections */}
          <div className="space-y-6">
           <h2 className="text-xl font-bold text-gray-800">1. Information we collect</h2>
          <p>
            Contact Information: Such as your first and last name, email address, and phone number.<br/>
            Feedback or Correspondence: Information you provide when you contact the Client or Rose Kitchens in connection with the Site or Services with questions, feedback, or other inquiries.<br/>
            Marketing Information: Such as your preferences for receiving communications about the Client’s activities, events, and publications, and details about how you engage with such communications.<br/>
            Other Information: Any additional information you may provide voluntarily or that is necessary in connection with your interactions with the Client through the Site or Services.
          </p>

          <h2 className="text-xl font-bold text-gray-800">2. Information We Obtain from Third Parties</h2>
          <p>
            Social Media Information: Our Client may maintain pages on social media platforms (e.g., Facebook, LinkedIn, Instagram). When you visit or interact with these pages on those platforms, the platform providers’ privacy policies will apply to your interactions and their collection, use, and processing of your personal information. You or the platforms may provide us (on behalf of the Client) with information through the platform, and we will treat such information in accordance with this Privacy Policy.<br/>
            Other Sources: We may obtain your personal information from other third parties, such as third-party analytics services, the Client’s marketing partners, publicly available sources, and data providers.
          </p>

        

          <h2 className="text-xl font-bold text-gray-800">3. Automatic Data Collection</h2>
          
          <p>
            We, the Client’s advertising partners, and our service providers may automatically log information about you, your computer or mobile device, and your interaction over time with our Services, our communications, and other online services, such as:
<ul className="list-disc list-inside space-y-2 ml-4">
<li>Device Data: Information such as your computer’s or mobile device’s operating system type and version, 
    manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type 
    (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), 
    language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 4G), and general
    location information such as city, state, or geographic area.</li>

<li>Online Activity Data: Information such as pages or screens you viewed, how long you spent on a page or screen, 
    browsing history, navigation paths between pages or screens, access times, duration of access, and whether 
    you have opened our marketing emails or clicked links within them.</li>
We use the following tools for automatic data collection:
<li>Cookies: Text files that websites store on a visitor’s device to uniquely identify the visitor’s browser 
    or to store information or settings for the purpose of helping you navigate between pages efficiently, 
    remembering your preferences, enabling functionality, understanding user activity and patterns, and 
    facilitating online advertising.</li>
<li>Local Storage Technologies: Such as HTML5, which provide cookie-equivalent functionality and can store larger amounts of data, 
    including on your device outside of your browser in connection with specific applications.</li>
<li>Also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage or email was accessed or opened, or that certain content was viewed or clicked.</li>
          </ul>
          </p>
          

        
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">4. How We Use Your Personal Information</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            Rose Kitchens uses your personal information for the following purposes:
            <li>To Operate and Improve Our Services: To provide, operate, and improve our Services and our business.</li>
            <li>To Communicate with You: Including sending announcements, updates, security alerts, and support and administrative messages.</li>
            <li>To Provide Support: To respond to requests, questions, and feedback.</li>
            <li>To Comply with Law: To comply with applicable laws, lawful requests, and legal processes, such as responding to subpoenas or requests from government authorities.</li>
            <li>For Marketing: If you have provided your contact information to us or our Client, we may, from time to time, send you direct marketing communications on behalf of our Client as permitted by law, including through phone, email, and text messages. If you would like to opt out of marketing communications, please contact our Client.</li>
            <li>For Compliance, Fraud Prevention, and Safety: To protect our, your, or others’ rights, privacy, safety, or property (including by making and defending legal claims); enforce the terms and conditions governing our Services; and protect, investigate, and deter fraudulent, harmful, unauthorized, unethical, or illegal activity.</li>
            <li>To Create Anonymous Data: To convert your personal information into anonymous data by removing personally identifiable information. This anonymous data may be used and shared for our lawful business purposes, including to analyze and improve our Services, conduct research, and promote our business</li>
            
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">5. How We Share Your Personal Information</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
          
            We do not “sell” your personal information, and we may share your personal information as described below and elsewhere in this Privacy Policy:
            <li>With Our Client: To facilitate your interactions with the Client.</li>
            <li>With Our Service Providers: Companies and individuals that provide services on our behalf or help us operate our Services or our business (such as hosting, information technology, email delivery, and website analytics services).</li>
            <li>With Professional Advisors: Such as lawyers, bankers, auditors, and insurers, when necessary in the course of the professional services they render to us.</li>
            <li>For Compliance, Fraud Prevention, and Safety: As described above.</li>
            <li>In Business Transfers: In connection with a business transaction (or potential business transaction) such as a corporate divestiture, merger, consolidation, acquisition, reorganization, or sale of assets, or in the event of bankruptcy or dissolution. In such cases, we will make reasonable efforts to require the recipient to honor this Privacy Policy</li>
            Data will not be shared with third parties for marketing or promotional purposes. We will never disclose sensitive personal information such as phone numbers or SMS consent for marketing purposes.
         </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">6. Security</h2>
          <p>
            We employ a number of technical, organizational, and physical safeguards designed to protect the personal information we collect. However, no security measure is completely foolproof, and we cannot guarantee the absolute security of your personal information
          </p>

          <h2 className="text-xl font-bold text-gray-800">7. Children</h2>
          <p>
            Our Services are not intended for use by children under the age of 18. If we become aware that we have collected personal information from a child under 18 without the required parental or guardian consent, we will promptly delete that information.</p>

          <h2 className="text-xl font-bold text-gray-800">8. Changes to This Privacy Policy</h2>
          <p>
           We reserve the right to modify this Privacy Policy at any time. If we make material changes, we will update the “Last Updated” date and post the revised policy on this website. We encourage you to review this policy periodically to stay informed about how we are protecting your personal information.
</p>

          <h2 className="text-xl font-bold text-gray-800">9. How Do We Share Your Mobile Information?</h2>
          <p>
            No mobile information will be obtained from and/or shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. You can always decline or stop receiving messages by responding "STOP" at any time. For more information, reply 'HELP'.
             Message and data rates may apply. Message frequency varies.
            </p>

          <h2 className="text-xl font-bold text-gray-800">10. Contact Information</h2>
          <p>
           If you have any questions or concerns about this Privacy Policy, please contact Rose Kitchens at:<br/>
Email:info@rosekitchen.net<br/>Phone: (845) 418-5588
          </p>
          
          </div>
        </div>
      </div>
    </div>
    <Footer1/>
    <Footer2/>
    <Footer3/>
    </>
  );
};


export default PrivacyPolicy;
