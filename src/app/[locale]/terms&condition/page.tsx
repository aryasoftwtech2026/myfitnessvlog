import Link from 'next/link';

export default async function TermsPage({
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
          {locale === 'hi' ? 'नियम और शर्तें' : 'Terms & Conditions'}
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
            <p>Health & Fitness Blog का उपयोग करके आप निम्नलिखित नियम और शर्तों से सहमत होते हैं।</p>

            <h2>1. सामग्री का उपयोग</h2>
            <p>वेबसाइट पर दी गई सारी सामग्री केवल व्यक्तिगत और गैर-व्यावसायिक उपयोग के लिए है। बिना अनुमति के कॉपी या दोबारा प्रकाशित करना मना है।</p>

            <h2>2. कोई गारंटी नहीं</h2>
            <p>हम जानकारी को सही रखने की कोशिश करते हैं, लेकिन किसी भी जानकारी की पूर्ण सटीकता या अपडेट की गारंटी नहीं देते।</p>

            <h2>3. उपयोगकर्ता का व्यवहार</h2>
            <p>आप वेबसाइट का उपयोग किसी अवैध या हानिकारक उद्देश्य के लिए नहीं करेंगे।</p>

            <h2>4. बदलाव का अधिकार</h2>
            <p>हम कभी भी इन नियमों में बदलाव कर सकते हैं। बदलाव के बाद भी वेबसाइट का उपयोग जारी रखने का मतलब है कि आप नए नियमों से सहमत हैं।</p>

            <h2>5. संपर्क</h2>
            <p>किसी भी सवाल के लिए हमें <a href="mailto:contact@healthfitness.com" className="text-green-700">contact@healthfitness.com</a> पर लिखें।</p>
          </>
        ) : (
          <>
            <p>By using Health & Fitness Blog, you agree to the following terms and conditions.</p>

            <h2>1. Use of Content</h2>
            <p>All content on this website is for personal and non-commercial use only. Copying or republishing without permission is not allowed.</p>

            <h2>2. No Guarantees</h2>
            <p>We try to keep information accurate, but we do not guarantee the complete accuracy or update of any content.</p>

            <h2>3. User Conduct</h2>
            <p>You will not use the website for any illegal or harmful purpose.</p>

            <h2>4. Right to Modify</h2>
            <p>We may update these terms at any time. Continued use of the website after changes means you accept the new terms.</p>

            <h2>5. Contact</h2>
            <p>For any questions, write to us at <a href="mailto:contact@healthfitness.com" className="text-green-700">contact@healthfitness.com</a>.</p>
          </>
        )}
      </article>
    </div>
  );
}