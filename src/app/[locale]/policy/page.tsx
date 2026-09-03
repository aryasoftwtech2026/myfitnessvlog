import Link from 'next/link';

export default async function PrivacyPolicyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">

      <section className="pt-10 pb-8 md:pt-14">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-700 mb-6 transition-colors"
        >
          ← {locale === 'hi' ? 'होम' : 'Home'}
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          {locale === 'hi' ? 'प्राइवेसी पॉलिसी' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-gray-500">
          {locale === 'hi' ? 'अंतिम अपडेट: सितंबर 2026' : 'Last updated: September 2026'}
        </p>
      </section>

      <article className="prose prose-lg max-w-none pb-16
        prose-headings:font-bold prose-headings:text-gray-900
        prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
        prose-p:text-gray-700 prose-p:leading-relaxed
        prose-ul:text-gray-700
      ">
        {locale === 'hi' ? (
          <>
            <p>Health & Fitness Blog आपकी प्राइवेसी का सम्मान करता है। यह पेज बताता है कि हम कौन सी जानकारी इकट्ठा करते हैं और उसका उपयोग कैसे करते हैं।</p>

            <h2>1. जानकारी जो हम इकट्ठा करते हैं</h2>
            <p>हम निम्नलिखित जानकारी इकट्ठा कर सकते हैं:</p>
            <ul>
              <li>वेबसाइट के उपयोग से जुड़ा डेटा (जैसे पेज व्यूज)</li>
              <li>डिवाइस और ब्राउज़र की सामान्य जानकारी</li>
              <li>अगर आप हमें ईमेल करते हैं तो आपका ईमेल पता और मैसेज</li>
            </ul>

            <h2>2. जानकारी का उपयोग</h2>
            <p>हम इस जानकारी का उपयोग वेबसाइट सुधारने, सामग्री बेहतर बनाने और आपके सवालों का जवाब देने के लिए करते हैं।</p>

            <h2>3. कुकीज़</h2>
            <p>हमारी वेबसाइट कुकीज़ का उपयोग कर सकती है ताकि यूजर अनुभव बेहतर हो। आप ब्राउज़र सेटिंग्स से कुकीज़ को नियंत्रित कर सकते हैं।</p>

            <h2>4. थर्ड पार्टी सेवाएं</h2>
            <p>हम एनालिटिक्स या विज्ञापन सेवाओं का उपयोग कर सकते हैं जो अपनी प्राइवेसी पॉलिसी के अनुसार डेटा इकट्ठा करती हैं।</p>

            <h2>5. डेटा सुरक्षा</h2>
            <p>हम आपकी जानकारी की सुरक्षा के लिए उचित उपाय करते हैं, लेकिन कोई भी ऑनलाइन तरीका 100% सुरक्षित नहीं होता।</p>

            <h2>6. संपर्क</h2>
            <p>अगर प्राइवेसी से जुड़ा कोई सवाल हो तो हमें <a href="mailto:contact@healthfitness.com" className="text-green-700">contact@healthfitness.com</a> पर लिखें।</p>
          </>
        ) : (
          <>
            <p>Health & Fitness Blog respects your privacy. This page explains what information we collect and how we use it.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Website usage data (such as page views)</li>
              <li>Basic device and browser information</li>
              <li>Your email address and message if you contact us</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>We use this information to improve the website, enhance content, and respond to your queries.</p>

            <h2>3. Cookies</h2>
            <p>Our website may use cookies to improve user experience. You can control cookies through your browser settings.</p>

            <h2>4. Third-Party Services</h2>
            <p>We may use analytics or advertising services that collect data according to their own privacy policies.</p>

            <h2>5. Data Security</h2>
            <p>We take reasonable measures to protect your information, but no online method is 100% secure.</p>

            <h2>6. Contact</h2>
            <p>If you have any privacy-related questions, write to us at <a href="mailto:contact@healthfitness.com" className="text-green-700">contact@healthfitness.com</a>.</p>
          </>
        )}
      </article>
    </div>
  );
}