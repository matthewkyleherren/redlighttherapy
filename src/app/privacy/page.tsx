import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy & Terms',
  description:
    "A digital family office for the world's best athletes investing in the world's best startups, advancing humanity.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="privacyMain">
        <article className="privacyContent">
          <h1>Privacy policy</h1>
          <h3>Last updated Feb 04, 2026</h3>

          <p>
            Sequel Technologies, Inc. and its affiliates (&quot;sequel,&quot; &quot;we,&quot; &quot;our,&quot; and/or &quot;us&quot;) value the privacy of individuals who use our application, websites, and related services (collectively, our &quot;Services&quot;). This privacy policy (the &quot;Privacy Policy&quot;) explains how we collect, use, and disclose information from users of our Services (&quot;Users&quot;). For information about how we collect, use, share, and otherwise process your personal information as a financial institution, please refer to our{' '}
            <a href="/privacy/glba">GLBA</a> Privacy Notice. By using our Services, you agree to the collection, use, disclosure, and procedures this Privacy Policy describes.
          </p>

          <h2>Information we collect</h2>
          <p>We may collect a variety of information from or about you or your devices from various sources, as described below.</p>

          <h4>A. Information you provide to us</h4>

          <h4>Registration</h4>
          <p>
            If you apply to access the sequel application, we ask you for your first and last name, email address, phone number, affiliated sport and sport league or club, and credit card information. We may also ask you the name of who referred you to our platform, information related to your past investments in start-ups, your interests in joining the sequel digital family office, the geographies of where you are interested in investing, and the types of companies you are in which you are interested in investing. If you are approved, then you will be able to create an account on the sequel application.
          </p>

          <h4>Account information</h4>
          <p>
            When you download the app and create an account, we ask you for your phone number to confirm your account. We may also ask you for annual pre-tax income and how much of your annual pre-tax income you would like to invest. We may ask for other information about your previous investments or your investment preferences.
          </p>

          <h4>Investment information</h4>
          <p>
            When you commit to invest, we will send you additional documents requesting additional information about you such as, but not limited to, a valid ID (passport) and a valid proof of Address (a utility bill that is less than 3 months old). If you invest through an entity, we may ask you for the same additional information regarding the other persons who have significant control in the entity. If you are a user of our platform Sigma, you may also provide us with your client&apos;s names, as well as documents related to yours or your clients&apos; investments outside of the sequel platform - this may include subscription agreements or shareholder agreements or any document you wish to provide us. If you are a premium member, you may send us the name of investment opportunities you are considering and would like us to review and you may attach any relevant material (decks etc) to our request.
          </p>

          <h4>Careers</h4>
          <p>
            If you decide that you wish to apply for a job with us, you may submit your contact information and your resume online. We will collect the information you choose to provide on your resume, such as your education and employment experience.
          </p>

          <h4>Communications</h4>
          <p>
            If you contact us by email, we may receive additional information about you, such as your name, email address, the contents of a message or attachments that you may send to us, and other information you choose to provide. When you communicate with us through third party vendors, such as WhatsApp, the third party vendors receive and store these communications. When we send you emails, we may track whether you open them to learn how to deliver a better customer experience and improve our Services.
          </p>

          <h4>Start-up information</h4>
          <p>
            If you decide to submit a deck to sequel for investment and marketing purposes, we ask you for a name and description of your start-up, the first and last name(s) of the founder(s), a contact email, your funding stage, the amount you are raising, information about the lead investor in your start-up, and a copy of your presentation or deck about your start-up. We may also ask for additional classification information and information about how you heard about our platform.
          </p>

          <h4>B. Information we collect when you use our services</h4>

          <p>
            <strong>Personal information.</strong> We require your personal information such as, name, address, phone number and email address to provide you access to our services, as well as for compliance and regulatory purposes.
          </p>

          <p>
            <strong>Location information.</strong> When you use our Services, we may infer your general location information, for example by using your internet protocol (IP) address.
          </p>

          <p>
            <strong>Device information.</strong> We receive information about the device and software you use to access our Services, including IP address, web browser type, operating system version, phone carrier and manufacturer, application installations, device identifiers, and push notification tokens.
          </p>

          <p>
            <strong>Investment information.</strong> If you are a Sigma user, we receive information about the investments your clients made outside the sequel platform so that we can make them easily accessible for you to review. We&apos;ll collect information such as amount, company name, fees, type of shares and any other information necessary.
          </p>

          <p>
            <strong>Usage information.</strong> To help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with our Services, like the pages or other content you view, the searches you conduct, purchases you make, and the dates and times of your visits.
          </p>

          <h2>Cookies &amp; Similar Technologies</h2>
          <p>
            We and our third-party partners collect information using cookies, pixel tags, or similar technologies. Our third-party partners, such as analytics partners, may use these technologies to collect information about your online activities over time and across different services. Cookies are small text files containing a string of alphanumeric characters. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to our Services.
          </p>
          <p>
            Please review your web browser&apos;s &quot;Help&quot; file to learn how you may modify your cookie settings. Please note that if you delete or choose not to accept cookies from the Service, you may not be able to utilize the features of the Service to their fullest potential.
          </p>

          <h2>Payment Information</h2>
          <p>Credit card information, bank account information.</p>

          <h2>How We Use Information</h2>
          <p>We use the information we collect:</p>
          <ul>
            <li>To provide, maintain, improve, and enhance our Services;</li>
            <li>To personalize your experience on our Services such as by providing tailored content and recommendations;</li>
            <li>To understand and analyze how you use our Services and develop new products, services, features, and functionality;</li>
            <li>To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide customer support;</li>
            <li>To facilitate the connection of affiliated third-party services, such as for investment transactions and advice;</li>
            <li>For marketing purposes, such as developing and providing promotional materials that may be relevant, valuable or otherwise of interest to you;</li>
            <li>To generate anonymized or aggregate data containing only de-identified, non-personal information that we may use for any lawful purposes such as to publish reports;</li>
            <li>To send you text messages and push notifications;</li>
            <li>To facilitate transactions and payments;</li>
            <li>To find and prevent fraud and abuse, and respond to trust and safety issues that may arise;</li>
            <li>For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and</li>
            <li>For other purposes for which we provide specific notice at the time the information is collected.</li>
          </ul>

          <p>
            <strong>Text messaging consent.</strong> When you provide your mobile number and consent to receive text messages or WhatsApp messages from us, we use that consent solely to send you the messages you have agreed to receive (for example, account verification codes, transactional messages, and service-related updates). We do not share, sell, or transfer your text messaging or WhatsApp opt-in/consent information with third parties, except as necessary for our own service providers to send these messages on our behalf and only in compliance with applicable law and industry guidelines, including the{' '}
            <a href="https://www.ctia.org/about-ctia/our-mission" target="_blank" rel="noopener noreferrer">CTIA Handbook.</a>
          </p>

          <h2>Third-Party Services and Tools We Use</h2>
          <p>
            We use several tools in our App. Such tools allow us to store important data in order to provide you with our services and to make the use of our App more comfortable for you.
          </p>
          <p>
            In addition, we use tools that are technically absolutely required to provide our service through the App. For example, to recognize you when you visit us, to make your data available to you, to monitor incoming and outgoing payments or to ensure the security of our App. In the following, we provide you with more transparent details on each of our tools:
          </p>
          <ol>
            <li>
              We use the tool <strong>Firebase</strong> to monitor the security and safeness of the app and be aware of potential problems that we may wish to fix, such as crashes. This also provides us with analytics and reporting in aggregated form. More information is available here:{' '}
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>.
            </li>
            <li>
              We use the tool <strong>Sentry</strong> to monitor the functionality of the app and track bugs and crashes in order to fix them more efficiently. This also provides us with analytics and reporting in aggregate. More information is available here:{' '}
              <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">https://sentry.io/privacy/</a>.
            </li>
            <li>
              We also use the tool <strong>Codepush</strong> from Microsoft to ensure the correct function of your app in case of updates. More information about this can be found here:{' '}
              <a href="https://www.microsoft.com/de-de/trustcenter/privacy/where-your-data-is-located" target="_blank" rel="noopener noreferrer">https://www.microsoft.com/de-de/trustcenter/privacy/where-your-data-is-located</a>.
            </li>
            <li>
              Based on your consent, we use <strong>Amplitude</strong>, an analysis service of Amplitude Inc. to analyze your user behavior in our App. This data tells us how you interact with our App. When you open our App, information (device related data, such as device type, model operating system, browser type and version of Amplitude, device groups Usage-related information (such as geographical location, language, pages used) is gathered. The Privacy Policy of Amplitude can be found here:{' '}
              <a href="https://amplitude.com/privacy" target="_blank" rel="noopener noreferrer">https://amplitude.com/privacy</a>.
            </li>
            <li>
              When you provide us with your bank account information at the onboarding stage, we use <strong>Plaid</strong> to perform Account Authentication to verify that the account information you provided is correct and related to an account in your name (see{' '}
              <a href="https://plaid.com/docs/auth/" target="_blank" rel="noopener noreferrer">https://plaid.com/docs/auth/</a>). Before we process a payment for an investment, we also use Plaid to verify your bank account balance to verify that you have sufficient funds before you invest (see more info on this here:{' '}
              <a href="https://plaid.com/docs/api/products/balance/" target="_blank" rel="noopener noreferrer">https://plaid.com/docs/api/products/balance/</a>). In the UK only, we use Plaid to process your payment using Open Banking Account to Account payments (see{' '}
              <a href="https://plaid.com/en-gb/products/payment-initiation/" target="_blank" rel="noopener noreferrer">https://plaid.com/en-gb/products/payment-initiation/</a>).
            </li>
            <li>
              We partner with <strong>Increase</strong>.com to perform ACH debit pulls from your account if you are a user based in the US whenever you pay for your membership fees or make an investment. More information is available here:{' '}
              <a href="https://increase.com/privacy" target="_blank" rel="noopener noreferrer">https://increase.com/privacy</a>.
            </li>
            <li>
              We use <strong>Dotfile</strong> to perform KYC and Anti-Money Laundering screenings and monitoring, and we also store the ID and Proof of Address information you gave us at the onboarding stage. More information is available here:{' '}
              <a href="https://www.dotfile.com/privacy" target="_blank" rel="noopener noreferrer">https://www.dotfile.com/privacy</a>.
            </li>
            <li>
              We use <strong>Customer.io</strong> to send push notifications in the app as well as emails to you. More information can be found here:{' '}
              <a href="https://customer.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">https://customer.io/legal/privacy-policy/</a>.
            </li>
            <li>
              We use <strong>Postmark</strong> to send you emails. Their privacy policy can be found here:{' '}
              <a href="https://postmarkapp.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://postmarkapp.com/privacy-policy</a>.
            </li>
            <li>
              We use <strong>Cloudflare</strong> to mitigate denial of service attacks. Their privacy policy can be found here:{' '}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/privacypolicy/</a>.
            </li>
            <li>
              We use <strong>Twilio</strong> to send you WhatsApp messages, more information can be found here:{' '}
              <a href="https://www.twilio.com/en-us/messaging/channels/whatsapp" target="_blank" rel="noopener noreferrer">https://www.twilio.com/en-us/messaging/channels/whatsapp</a>.
            </li>
            <li>
              We use <strong>Vercel</strong> to host the website. More information can be found here:{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>.
            </li>
            <li>
              We use <strong>Algolia</strong> to improve the speed of our search function, more information can be found here:{' '}
              <a href="https://www.algolia.com/policies/privacy" target="_blank" rel="noopener noreferrer">https://www.algolia.com/policies/privacy</a>.
            </li>
          </ol>

          <h2>Information Sharing</h2>
          <p>
            <strong>Affiliates.</strong> We may disclose any information we receive to our current or future affiliates for any of the purposes described in this Privacy Policy.
          </p>
          <p>
            <strong>Vendors and service providers.</strong> We may disclose any information we receive to vendors and service providers retained in connection with the provision of our Services.
          </p>
          <p>
            <strong>Social networks and other online services.</strong> Our Services may allow you to, upon your direction, disclose information to social networking services, such as Twitter, Facebook and Instagram. You understand and agree that the use of your information by any social networking websites will be governed by the privacy policies of these third-party platforms and your settings on that platform. We encourage you to review their privacy policies.
          </p>
          <p>
            <strong>Marketing.</strong> We use analytics services such as Google Analytics to collect and process certain analytics data. You can learn more about Google&apos;s practices by visiting{' '}
            <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/partners/</a>.
          </p>
          <p>
            <strong>Retention period.</strong> Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfill the purposes outlined in this privacy policy or until you request that the Data be deleted. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.
          </p>
          <p>
            <strong>As required by law and similar disclosures.</strong> We may access, preserve, and disclose your information if we believe doing so is required or appropriate to: (a) comply with law enforcement requests and legal process, such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others&apos; rights, property, or safety. For the avoidance of doubt, the disclosure of your information may occur if you post any objectionable content on or through the Services.
          </p>
          <p>
            <strong>Merger, sale, or other asset transfers.</strong> We may transfer your information to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our assets. The use of your information following any of these events will be governed by the provisions of this Privacy Policy in effect at the time the applicable information was collected.
          </p>
          <p>
            <strong>Consent.</strong> We may also disclose your information with your permission.
          </p>

          <h2>Your Rights and Choices</h2>
          <ol>
            <li>
              You have the right to access your personal data that is being processed by us (Art 15 GDPR). Apart from that, you have the right to rectification of inaccurate or incomplete data and - under certain circumstances - the right to erasure (Art 16 and Art 17 GDPR). Additionally, you have the right to restriction of processing (Art 18 GDPR) as well as the right to data portability concerning the data you have provided us with (Art 20 GDPR).
            </li>
            <li>
              Moreover, you have the right to object on grounds relating to your particular situation (Art 21 GDPR). Such an objection can in particular occur relating to processing of data for the purposes of direct marketing.
            </li>
            <li>
              Additionally, you have the right to withdraw your consent at any time with effect for the future.
            </li>
          </ol>
          <p>
            To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address:{' '}
            <a href="mailto:privacy@sequel.co">privacy@sequel.co</a>.
          </p>
          <p>
            If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner&apos;s Office (ICO). The ICO&apos;s contact details can be found on their website at{' '}
            <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/</a>. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it. If you are a resident in the EEA and you wish to make a complaint, the National Data Protection Authorities can be found here: ec.europa.eu/justice/data-protection/bodies/authorities.
          </p>
          <p>
            <strong>Marketing communications.</strong> You can unsubscribe from our promotional emails via the link provided in the emails. Even if you opt out of receiving promotional messages from us, you will continue to receive administrative messages from us.
          </p>

          <h2>Data Security</h2>
          <p>
            We make reasonable efforts to protect your information by using physical and electronic safeguards designed to improve the security of the information we maintain. However, because no electronic transmission or storage of information can be entirely secure, we can make no guarantees as to the security or privacy of your information.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            We do not knowingly collect, maintain, or use personal information from children under 13 years of age, and no part of our Service(s) is directed to children. If you learn that a child has provided us with personal information in violation of this Privacy Policy, then you may alert us at{' '}
            <a href="mailto:privacy@sequel.co">privacy@sequel.co</a>.
          </p>

          <h2>Non-US Visitors</h2>
          <p>
            Our Services are hosted in the United States. If you use the Services from the European Union or other regions of the world with laws governing data collection and use that may differ from U.S. law, then please note that you are transferring your personal information outside of those regions to the U.S. for storage and processing. We may also transfer your data from the U.S. to other countries or regions in connection with storage and processing of data, fulfilling your requests, and operating the Services. By providing any information, including personal information, on or to the Services, you consent to such transfer, storage, and processing.
          </p>

          <h2>Changes to this Policy</h2>
          <p>
            We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when it is posted. If we materially change the ways in which we use or disclose personal information previously collected from you through the Services, we will notify you through the Services, by email, or other communication.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions, comments, or concerns, please email us at{' '}
            <a href="mailto:members@sequel.co">members@sequel.co</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
