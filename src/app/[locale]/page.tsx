import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Home');

  const categories = [
    {
      title: locale === 'hi' ? 'वजन घटाना' : 'Weight Loss',
      desc: locale === 'hi' ? 'घर बैठे वजन कम करने के आसान और असरदार तरीके' : 'Easy & effective ways to lose weight at home',
      emoji: '🔥',
      color: 'from-orange-50 to-red-50',
      border: 'hover:border-orange-300'
    },
    {
      title: locale === 'hi' ? 'योग और एक्सरसाइज' : 'Yoga & Exercise',
      desc: locale === 'hi' ? 'शुरुआती लोगों के लिए बेस्ट योग आसन और रूटीन' : 'Best yoga poses and routines for beginners',
      emoji: '🧘',
      color: 'from-purple-50 to-indigo-50',
      border: 'hover:border-purple-300'
    },
    {
      title: locale === 'hi' ? 'हेल्दी डाइट' : 'Healthy Diet',
      desc: locale === 'hi' ? 'पोषक तत्वों से भरपूर भारतीय खाना और डाइट प्लान' : 'Nutritious Indian food & balanced diet plans',
      emoji: '🥗',
      color: 'from-green-50 to-emerald-50',
      border: 'hover:border-green-300'
    },
    {
      title: locale === 'hi' ? 'मेंटल हेल्थ' : 'Mental Health',
      desc: locale === 'hi' ? 'तनाव, चिंता और नींद की समस्या के उपाय' : 'Tips to reduce stress, anxiety & improve sleep',
      emoji: '🧠',
      color: 'from-blue-50 to-cyan-50',
      border: 'hover:border-blue-300'
    }
  ];

  const featuredPosts = [
    {
      slug: 'weight-loss-tips',
      title: locale === 'hi' ? 'घर बैठे वजन कैसे कम करें' : 'How to Lose Weight at Home',
      excerpt: locale === 'hi' 
        ? 'बिना जिम गए वजन कम करने के असरदार और आसान तरीके जानें। रोज़ाना की छोटी आदतें बड़ा फर्क लाती हैं।' 
        : 'Effective and simple ways to lose weight without going to the gym. Small daily habits make a big difference.',
      date: locale === 'hi' ? '20 अगस्त 2026' : '20 August 2026',
      readTime: locale === 'hi' ? '6 मिनट' : '6 min read',
      category: locale === 'hi' ? 'वजन घटाना' : 'Weight Loss',
      emoji: '🔥'
    },
    {
      slug: 'yoga-for-beginners',
      title: locale === 'hi' ? 'शुरुआती लोगों के लिए योग' : 'Yoga for Beginners',
      excerpt: locale === 'hi' 
        ? 'रोज़ाना सिर्फ 15 मिनट का योग करके अपनी सेहत, लचीलापन और मन की शांति सुधारें।' 
        : 'Improve your health, flexibility and mental peace with just 15 minutes of yoga every day.',
      date: locale === 'hi' ? '18 अगस्त 2026' : '18 August 2026',
      readTime: locale === 'hi' ? '5 मिनट' : '5 min read',
      category: locale === 'hi' ? 'योग' : 'Yoga',
      emoji: '🧘'
    },
    {
      slug: 'healthy-diet-plan',
      title: locale === 'hi' ? 'हेल्दी डाइट प्लान' : 'Healthy Diet Plan',
      excerpt: locale === 'hi' 
        ? 'भारतीय खाने के साथ संतुलित और पौष्टिक डाइट कैसे बनाएं। स्वादिष्ट और हेल्दी दोनों।' 
        : 'How to create a balanced and nutritious diet with Indian food. Delicious and healthy at the same time.',
      date: locale === 'hi' ? '15 अगस्त 2026' : '15 August 2026',
      readTime: locale === 'hi' ? '7 मिनट' : '7 min read',
      category: locale === 'hi' ? 'डाइट' : 'Diet',
      emoji: '🥗'
    }
  ];

  const benefits = [
    {
      icon: '✅',
      title: locale === 'hi' ? 'आसान भाषा' : 'Simple Language',
      desc: locale === 'hi' 
        ? 'सभी जानकारी आसान, साफ और समझने योग्य भाषा में दी जाती है।' 
        : 'All information is written in simple, clear and easy-to-understand language.'
    },
    {
      icon: '🏠',
      title: locale === 'hi' ? 'घर बैठे टिप्स' : 'Home-Based Tips',
      desc: locale === 'hi' 
        ? 'ऐसे तरीके जो घर पर आसानी से अपनाए जा सकें — बिना महंगे उपकरण के।' 
        : 'Methods you can easily follow at home — no expensive equipment needed.'
    },
    {
      icon: '💚',
      title: locale === 'hi' ? 'प्रैक्टिकल सलाह' : 'Practical Advice',
      desc: locale === 'hi' 
        ? 'सिर्फ थ्योरी नहीं, असली जिंदगी में काम आने वाली असरदार सलाह।' 
        : 'Not just theory — real advice that actually works in daily life.'
    },
    {
      icon: '🇮🇳',
      title: locale === 'hi' ? 'भारतीय संदर्भ' : 'Indian Context',
      desc: locale === 'hi' 
        ? 'हमारी डाइट, संस्कृति और दिनचर्या के हिसाब से बनाई गई सलाह।' 
        : 'Advice tailored to Indian diet, lifestyle and daily routine.'
    }
  ];

  const stats = [
    { value: '50+', label: locale === 'hi' ? 'आर्टिकल्स' : 'Articles' },
    { value: '4', label: locale === 'hi' ? 'मुख्य कैटेगरी' : 'Main Categories' },
    { value: '100%', label: locale === 'hi' ? 'घर बैठे टिप्स' : 'Home Tips' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* ===== HERO SECTION ===== */}
      <section className="relative text-center py-16 md:py-24 overflow-hidden">
        {/* Soft background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-green-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl" />
        </div>

        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-green-100">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {locale === 'hi' ? 'स्वास्थ्य और फिटनेस गाइड' : 'Health & Fitness Guide'}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
          <span className="text-green-700">{t('title')}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all duration-300"
          >
            {locale === 'hi' ? 'आर्टिकल्स पढ़ें' : 'Read Articles'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center justify-center border-2 border-green-600 text-green-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-300"
          >
            {locale === 'hi' ? 'हमारे बारे में' : 'About Us'}
          </Link>
        </div>

        {/* Mini Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14 pt-8 border-t border-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-700">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {locale === 'hi' ? 'लोकप्रिय कैटेगरी' : 'Popular Categories'}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {locale === 'hi' 
              ? 'अपनी जरूरत के हिसाब से टॉपिक चुनें और सही जानकारी पाएं' 
              : 'Choose a topic according to your needs and get the right information'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/${locale}/blog`}
              className={`group relative bg-gradient-to-br ${cat.color} border border-gray-100 rounded-2xl p-6 hover:shadow-xl ${cat.border} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {cat.emoji}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.desc}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                {locale === 'hi' ? 'देखें' : 'Explore'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED POSTS ===== */}
      <section className="py-14">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {locale === 'hi' ? 'ताज़ा आर्टिकल्स' : 'Latest Articles'}
            </h2>
            <p className="text-gray-500 mt-1">
              {locale === 'hi' ? 'नए और उपयोगी आर्टिकल्स' : 'Fresh & useful articles'}
            </p>
          </div>
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1 text-green-600 font-semibold hover:text-green-700 transition-colors group"
          >
            {locale === 'hi' ? 'सभी आर्टिकल्स देखें' : 'View all articles'}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Colored top bar */}
              <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500" />
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                    <span>{post.emoji}</span>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-sm font-semibold text-green-600 group-hover:underline">
                    {locale === 'hi' ? 'पूरा पढ़ें →' : 'Read more →'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHY READ US ===== */}
      <section className="py-16 my-8">
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl px-6 py-12 md:px-12 md:py-16 border border-green-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {locale === 'hi' ? 'हमारी बात क्यों सुनें?' : 'Why Read Us?'}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {locale === 'hi' 
                ? 'हम सिर्फ जानकारी नहीं देते — हम आपको सही दिशा दिखाते हैं' 
                : 'We don’t just give information — we show you the right direction'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <div 
                key={i} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (NEW SECTION) ===== */}
      <section className="py-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {locale === 'hi' ? 'कैसे शुरू करें?' : 'How to Get Started?'}
          </h2>
          <p className="text-gray-500">
            {locale === 'hi' ? 'सिर्फ 3 आसान स्टेप्स' : 'Just 3 simple steps'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

          {[
            {
              step: '01',
              title: locale === 'hi' ? 'कैटेगरी चुनें' : 'Choose a Category',
              desc: locale === 'hi' 
                ? 'वजन घटाना, योग, डाइट या मेंटल हेल्थ — अपनी जरूरत के अनुसार चुनें।' 
                : 'Weight loss, Yoga, Diet or Mental Health — pick what you need.'
            },
            {
              step: '02',
              title: locale === 'hi' ? 'आर्टिकल पढ़ें' : 'Read the Article',
              desc: locale === 'hi' 
                ? 'आसान भाषा में लिखे गए प्रैक्टिकल टिप्स और स्टेप-बाय-स्टेप गाइड पढ़ें।' 
                : 'Read practical tips and step-by-step guides written in simple language.'
            },
            {
              step: '03',
              title: locale === 'hi' ? 'अपनाएं और देखें फर्क' : 'Apply & See Results',
              desc: locale === 'hi' 
                ? 'छोटी-छोटी आदतें अपनाएं और कुछ हफ्तों में बदलाव महसूस करें।' 
                : 'Adopt small habits and feel the difference in a few weeks.'
            }
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-green-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-green-200 relative z-10">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-16 mb-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl px-6 py-14 md:px-12 text-center text-white">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-white/10 rounded-full" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            {locale === 'hi' ? 'आज से ही सेहत का ख्याल रखें' : 'Start Taking Care of Your Health Today'}
          </h2>
          <p className="text-green-50 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            {locale === 'hi' 
              ? 'नियमित रूप से आर्टिकल्स पढ़कर हेल्दी लाइफस्टाइल अपनाएं। छोटी शुरुआत, बड़ा बदलाव।' 
              : 'Read articles regularly and adopt a healthy lifestyle. Small start, big change.'}
          </p>
          <Link
            href={`/${locale}/blog`}
            className="relative z-10 inline-flex items-center gap-2 bg-white text-green-700 px-10 py-3.5 rounded-xl text-lg font-bold hover:bg-green-50 hover:shadow-xl transition-all duration-300"
          >
            {locale === 'hi' ? 'ब्लॉग पर जाएं' : 'Go to Blog'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}