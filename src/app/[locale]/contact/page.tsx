import Link from 'next/link';

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <section className="pt-10 pb-10 md:pt-14 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-green-100">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          {locale === 'hi' ? 'संपर्क करें' : 'Get in Touch'}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {locale === 'hi' ? 'हमसे संपर्क करें' : 'Contact Us'}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          {locale === 'hi'
            ? 'कोई सवाल, सुझाव या फीडबैक हो तो हमें लिखें। हम जल्द से जल्द जवाब देने की कोशिश करेंगे।'
            : 'Have a question, suggestion or feedback? Write to us. We’ll try to reply as soon as possible.'}
        </p>
      </section>

      {/* Contact Card */}
      <section className="mb-16">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
          
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl shrink-0">
                📧
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {locale === 'hi' ? 'ईमेल' : 'Email'}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {locale === 'hi' ? 'हमें ईमेल भेजें' : 'Send us an email'}
                </p>
                <a 
                  href="mailto:contact@healthfitness.com" 
                  className="text-green-700 font-semibold hover:underline"
                >
                  contact@healthfitness.com
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl shrink-0">
                ⏱️
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {locale === 'hi' ? 'जवाब का समय' : 'Response Time'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'hi'
                    ? 'हम आमतौर पर 24–48 घंटों में जवाब देने की कोशिश करते हैं।'
                    : 'We usually try to reply within 24–48 hours.'}
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-2xl shrink-0">
                💡
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {locale === 'hi' ? 'नोट' : 'Note'}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {locale === 'hi'
                    ? 'यह एक सूचनात्मक ब्लॉग है। हम चिकित्सा सलाह नहीं देते। किसी भी स्वास्थ्य समस्या के लिए डॉक्टर से सलाह लें।'
                    : 'This is an informational blog. We do not provide medical advice. Please consult a doctor for any health concerns.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 text-center">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
        >
          {locale === 'hi' ? '← ब्लॉग पर वापस जाएं' : '← Back to Blog'}
        </Link>
      </section>
    </div>
  );
}