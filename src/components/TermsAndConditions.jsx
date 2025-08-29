import React from 'react';
import Navbar from './Navbar1'
import Navbar2 from './Navbar2'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'

const TermsOfService = () => {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <div className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-8">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 text-left md:text-left">
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800 text-left md:text-justify">

          <p></p>

   
          {/* Sections */}
          <div className="space-y-6">
           <h2 className="text-xl font-bold text-gray-800">1. SMS/MMS Consent and Terms</h2>
          <p>
            By voluntarily providing your mobile phone number and explicitly opting in to SMS, you consent to receive periodic SMS/MMS messages from Rose Kitchen . These messages may include important updates, exclusive offers, promotions tailored to your interests, and other communications related to our products and services.
          </p>

          <h2 className="text-xl font-bold text-gray-800">2. Providing Your Telephone Number and Notification Obligations</h2>
          <p> 
            <b>Accuracy:</b> You affirm that the mobile number you provide is accurate and current.<br/>
            <b>Ownership:</b> You represent that you are the authorized subscriber or owner of the telephone number.<br/>
            <b>Notification:</b> If your contact information changes, you agree to notify us immediately by emailing <u>info@rosekitchen.net</u> before the change takes effect.
          </p>

          <h2 className="text-xl font-bold text-gray-800"> 3. Consent to Receive Automated Communications</h2>
          
          <p>
            By voluntarily providing your telephone number(s) and explicitly opting in to SMS you consent to receive recurring automated text messages from Rose Kitchen regarding our products, services, offers, promotions, and your relationship with us.
            <br/><br/>
            <i>Note:</i> Consent to receive these messages is not a condition of purchase. Standard message and data rates may apply.
          </p>
          

        
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">4. Opt-Out Instructions</h2>
         <p>            SMS/MMS: To unsubscribe from our SMS/MMS messages at any time, text STOP in response to any message.<br/>
            Email: Alternatively, you can send an email to <i>info@rosekitchen.net</i> indicating that you wish to opt out of text messages. You will receive a final message confirming your opt-out.
          </p>

        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">5. Privacy Assurance</h2>
          <p>
            Your personal information, including your phone number, will not be shared or sold to third parties. We are committed to safeguarding your privacy and ensuring the confidentiality of your data.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">6. Assistance</h2>
          <p>
            For help:<br/>
            Text: Send "HELP" to the number from which you are receiving messages.<br/>
            Email: Contact us at info@rosekitchen.net.
          </p>

          <h2 className="text-xl font-bold text-gray-800">7. Carrier Participation</h2>
          <p>
            Participating carriers in the United States include, but are not limited to: AT&T, T-Mobile®, Verizon Wireless, Sprint, Boost, U.S. Cellular®, MetroPCS®, InterOp, Cellcom, C Spire Wireless, Cricket, Virgin Mobile.
          </p>

          <h2 className="text-xl font-bold text-gray-800">8. Data Collection and Use</h2>
          <p>
            We may collect your mobile phone number, carrier name, and details such as the date, time, and content of your messages, along with any additional information you provide.
          </p>

          <h2 className="text-xl font-bold text-gray-800">9. Service Modifications and Termination</h2>
          <p>
            By subscribing to or using the service, you acknowledge our right to modify or discontinue the SMS/MMS service, with or without notice, at any time.
          </p>

          <h2 className="text-xl font-bold text-gray-800">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold Rose Kitchen harmless from any claims—including those related to privacy or tort—that arise from:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Providing a telephone number not owned by you.</li>
            <li>Failure to notify us of changes to your telephone number.</li>
            <li>Any issues related to the Federal Telephone Consumer Protection Act or state law equivalents.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800">11. Participation Requirements</h2>
          <p>
            By participating in this service, you affirm that:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You are at least 18 years old.</li>
            <li>You possess a wireless device capable of two-way messaging.</li>
            <li>You are a customer of a participating wireless carrier.</li>
            <li>You have an active text messaging service.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800">12. Miscellaneous</h2>
          <p>
           You warrant that you possess all necessary rights, powers, and authority to agree to these terms, and that doing so does not conflict with any other agreement to which you are bound. If any provision is deemed unenforceable or invalid, it will be limited or removed to the minimum extent necessary, ensuring the remaining provisions remain in full effect.</p>

          

          <h2 className="text-xl font-bold text-gray-800"> Questions or Concerns</h2>
          <p>
            For any questions or concerns, please contact us at:<br/>
            Email:info@rosekitchen.net<br/>
            Phone: (845) 418-5588
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

export default TermsOfService;