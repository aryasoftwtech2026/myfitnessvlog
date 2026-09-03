import Link from 'next/link';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const values = [
    {
      icon: '✅',
      title: locale === 'hi' ? 'आसान भाषा' : 'Simple Language',
      desc: locale === 'hi'
        ? 'हम जटिल शब्दों से बचते हैं। हर आर्टिकल साफ और समझने योग्य भाषा में लिखा जाता है।'
        : 'We avoid complicated words. Every article is written in clear and easy-to-understand language.'
    },
    {
      icon: '🏠',
      title: locale === 'hi' ? 'घर बैठे लागू' : 'Home Friendly',
      desc: locale === 'hi'
        ? 'सारी सलाह ऐसी है जो घर पर आसानी से अपनाई जा सके — बिना महंगे उपकरण या जिम के।'
        : 'All advice is practical and can be followed at home — no expensive equipment or gym needed.'
    },
    {
      icon: '💚',
      title: locale === 'hi' ? 'प्रैक्टिकल सलाह' : 'Practical Advice',
      desc: locale === 'hi'
        ? 'सिर्फ थ्योरी नहीं। हम वो बातें बताते हैं जो असली जिंदगी में काम आती हैं।'
        : 'Not just theory. We share things that actually work in real life.'
    },
    {
      icon: '🇮🇳',
      title: locale === 'hi' ? 'भारतीय संदर्भ' : 'Indian Context',
      desc: locale === 'hi'
        ? 'हमारी डाइट, दिनचर्या और संस्कृति को ध्यान में रखकर सलाह दी जाती है।'
        : 'Advice is tailored keeping Indian diet, lifestyle and culture in mind.'
    }
  ];

  const topics = [
    { emoji: '🔥', name: locale === 'hi' ? 'वजन घटाना' : 'Weight Loss' },
    { emoji: '🧘', name: locale === 'hi' ? 'योग और एक्सरसाइज' : 'Yoga & Exercise' },
    { emoji: '🥗', name: locale === 'hi' ? 'हेल्दी डाइट' : 'Healthy Diet' },
    { emoji: '🧠', name: locale === 'hi' ? 'मेंटल हेल्थ' : 'Mental Health' },
    { emoji: '☀️', name: locale === 'hi' ? 'मॉर्निंग रूटीन' : 'Morning Routine' },
    { emoji: '💪', name: locale === 'hi' ? 'होम वर्कआउट' : 'Home Workouts' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">

      {/* ===== HERO ===== */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-green-100">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          {locale === 'hi' ? 'हमारी कहानी' : 'Our Story'}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
          {locale === 'hi' ? 'हमारे बारे में' : 'About Us'}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {locale === 'hi'
            ? 'स्वास्थ्य और फिटनेस की सही जानकारी आसान भाषा में सब तक पहुंचाना — यही हमारा मकसद है।'
            : 'Our mission is to make reliable health and fitness information accessible to everyone in simple language.'}
        </p>
      </section>

      {/* ===== MAIN CONTENT CARD ===== */}
      <section className="mb-14">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
          {locale === 'hi' ? (
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong className="text-gray-900">Health & Fitness Blog</strong> में आपका स्वागत है। 
                हमारा मकसद है कि हर व्यक्ति को सही, सरल और भरोसेमंद स्वास्थ्य संबंधी जानकारी मिले — 
                चाहे वह गांव में हो या शहर में।
              </p>
              <p>
                यहां आपको वजन घटाने, योग, हेल्दी डाइट, मानसिक स्वास्थ्य और रोज़मर्रा की फिटनेस से जुड़ी 
                टिप्स मिलेंगी। सभी आर्टिकल्स आसान भाषा में लिखे जाते हैं ताकि कोई भी आसानी से समझ सके और अपना सके।
              </p>
              <p>
                हम सिर्फ वही सलाह देते हैं जो प्रैक्टिकल हो और आम इंसान अपनी व्यस्त जिंदगी में आसानी से फॉलो कर सके। 
                कोई चरम डाइट नहीं, कोई अव्यावहारिक रूटीन नहीं — सिर्फ छोटी-छोटी आदतें जो लंबे समय तक टिकें।
              </p>
            </div>
          ) : (
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                Welcome to <strong className="text-gray-900">Health & Fitness Blog</strong>. 
                Our goal is to provide simple, reliable and practical health information that anyone can understand and follow — 
                whether you live in a city or a small town.
              </p>
              <p>
                Here you will find helpful articles on weight loss, yoga, healthy diet, mental health, 
                and everyday fitness tips. Everything is explained in clear and easy language so that 
                anyone can apply it in daily life.
              </p>
              <p>
                We only share practical advice that real people can follow in their busy schedules. 
                No extreme diets, no unrealistic routines — just small, sustainable habits that create lasting results.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {locale === 'hi' ? 'हमारे सिद्धांत' : 'What We Stand For'}
          </h2>
          <p className="text-gray-500">
            {locale === 'hi' ? 'ये बातें हमें गाइड करती हैं' : 'These principles guide everything we write'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-green-50/80 to-white border border-green-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TOPICS WE COVER ===== */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {locale === 'hi' ? 'हम किन विषयों पर लिखते हैं' : 'Topics We Cover'}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-700 transition-colors"
            >
              <span>{topic.emoji}</span>
              {topic.name}
            </div>
          ))}
        </div>
      </section>

      {/* ===== MISSION BANNER ===== */}
      <section className="mb-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl px-6 py-12 md:px-12 text-center text-white">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
            {locale === 'hi' ? 'हमारा मिशन' : 'Our Mission'}
          </h2>
          <p className="text-green-50 text-lg max-w-xl mx-auto relative z-10 leading-relaxed">
            {locale === 'hi'
              ? 'हर व्यक्ति तक स्वास्थ्य की सही जानकारी पहुंचाना — आसान भाषा में, बिना किसी भ्रम के, और ऐसी सलाह के साथ जो वाकई काम करे।'
              : 'To make accurate health information accessible to everyone — in simple language, without confusion, and with advice that actually works.'}
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {locale === 'hi' ? 'तैयार हैं शुरू करने के लिए?' : 'Ready to start?'}
        </h2>
        <p className="text-gray-600 mb-7 max-w-md mx-auto">
          {locale === 'hi'
            ? 'आर्टिकल्स पढ़ें और छोटी-छोटी आदतों से अपनी सेहत सुधारना शुरू करें।'
            : 'Read our articles and start improving your health with small daily habits.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            {locale === 'hi' ? 'आर्टिकल्स पढ़ें' : 'Read Articles'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center border-2 border-green-600 text-green-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-green-50 transition-all"
          >
            {locale === 'hi' ? 'होम पेज' : 'Home'}
          </Link>
        </div>
      </section>

    </div>
  );
}