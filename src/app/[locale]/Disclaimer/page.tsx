import Link from 'next/link';

export default async function DisclaimerPage({
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
          {locale === 'hi' ? 'डिस्क्लेमर' : 'Disclaimer'}
        </h1>
        <p className="text-sm text-gray-500">
          {locale === 'hi' ? 'अंतिम अपडेट: सितंबर 2026' : 'Last updated: September 2026'}
        </p>
      </section>

      <article className="prose prose-lg max-w-none pb-16
        prose-headings:font-bold prose-headings:text-gray-900
        prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
        prose-p:text-gray-700 prose-p:leading-relaxed
      ">
        {locale === 'hi' ? (
          <>
            <p>Health & Fitness Blog पर दी गई सभी जानकारी केवल सामान्य सूचना के उद्देश्य से है।</p>

            <h2>1. चिकित्सा सलाह नहीं</h2>
            <p>इस वेबसाइट पर दी गई सामग्री पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। किसी भी स्वास्थ्य समस्या के लिए योग्य डॉक्टर से सलाह लें।</p>

            <h2>2. व्यक्तिगत परिणाम अलग हो सकते हैं</h2>
            <p>वजन घटाने, योग या डाइट से जुड़े नतीजे हर व्यक्ति में अलग-अलग हो सकते हैं। हम किसी भी खास परिणाम की गारंटी नहीं देते।</p>

            <h2>3. अपनी जिम्मेदारी</h2>
            <p>इस वेबसाइट की जानकारी का उपयोग आप अपनी जिम्मेदारी पर करते हैं। किसी भी नुकसान या समस्या के लिए हम जिम्मेदार नहीं होंगे।</p>

            <h2>4. बाहरी लिंक</h2>
            <p>वेबसाइट पर मौजूद बाहरी लिंक की सामग्री के लिए हम जिम्मेदार नहीं हैं।</p>
          </>
        ) : (
          <>
            <p>All information on Health & Fitness Blog is for general informational purposes only.</p>

            <h2>1. Not Medical Advice</h2>
            <p>The content on this website is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor for any health concerns.</p>

            <h2>2. Individual Results May Vary</h2>
            <p>Results related to weight loss, yoga, or diet can differ from person to person. We do not guarantee any specific outcomes.</p>

            <h2>3. Your Responsibility</h2>
            <p>You use the information on this website at your own risk. We are not responsible for any loss or issues arising from its use.</p>

            <h2>4. External Links</h2>
            <p>We are not responsible for the content of any external links present on the website.</p>
          </>
        )}
      </article>
    </div>
  );
}