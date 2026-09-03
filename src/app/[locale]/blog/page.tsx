import Link from 'next/link';

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const posts = [
    {
      slug: 'weight-loss-tips',
      title: locale === 'hi' ? 'घर बैठे वजन कैसे कम करें' : 'How to Lose Weight at Home',
      excerpt: locale === 'hi' 
        ? 'बिना जिम गए वजन कम करने के आसान और असरदार तरीके जानें। रोज़ाना की छोटी आदतें बड़ा बदलाव लाती हैं।' 
        : 'Easy and effective ways to lose weight without going to the gym. Small daily habits create big results.',
      date: locale === 'hi' ? '20 अगस्त 2026' : '20 August 2026',
      readTime: locale === 'hi' ? '6 मिनट' : '6 min read',
      category: locale === 'hi' ? 'वजन घटाना' : 'Weight Loss',
      emoji: '🔥',
      color: 'from-orange-400 to-red-500'
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
      emoji: '🧘',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      slug: 'healthy-diet-plan',
      title: locale === 'hi' ? 'हेल्दी डाइट प्लान' : 'Healthy Diet Plan',
      excerpt: locale === 'hi' 
        ? 'भारतीय खाने के साथ संतुलित और पौष्टिक डाइट कैसे बनाएं। स्वादिष्ट भी, हेल्दी भी।' 
        : 'How to create a balanced and nutritious diet with Indian food. Delicious and healthy together.',
      date: locale === 'hi' ? '15 अगस्त 2026' : '15 August 2026',
      readTime: locale === 'hi' ? '7 मिनट' : '7 min read',
      category: locale === 'hi' ? 'डाइट' : 'Diet',
      emoji: '🥗',
      color: 'from-green-400 to-emerald-500'
    },
    {
      slug: 'reduce-stress',
      title: locale === 'hi' ? 'तनाव कैसे कम करें' : 'How to Reduce Stress',
      excerpt: locale === 'hi' 
        ? 'मेंटल हेल्थ के लिए आसान घरेलू उपाय। तनाव और चिंता कम करने के प्रैक्टिकल तरीके।' 
        : 'Simple home remedies for better mental health. Practical ways to reduce stress and anxiety.',
      date: locale === 'hi' ? '12 अगस्त 2026' : '12 August 2026',
      readTime: locale === 'hi' ? '5 मिनट' : '5 min read',
      category: locale === 'hi' ? 'मेंटल हेल्थ' : 'Mental Health',
      emoji: '🧠',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      slug: 'morning-routine',
      title: locale === 'hi' ? 'हेल्दी मॉर्निंग रूटीन' : 'Healthy Morning Routine',
      excerpt: locale === 'hi' 
        ? 'सुबह की अच्छी शुरुआत कैसे करें। 30 मिनट का रूटीन जो पूरे दिन एनर्जी देता है।' 
        : 'How to start your morning right. A 30-minute routine that gives energy for the whole day.',
      date: locale === 'hi' ? '10 अगस्त 2026' : '10 August 2026',
      readTime: locale === 'hi' ? '4 मिनट' : '4 min read',
      category: locale === 'hi' ? 'लाइफस्टाइल' : 'Lifestyle',
      emoji: '☀️',
      color: 'from-amber-400 to-orange-500'
    },
    {
      slug: 'home-workout',
      title: locale === 'hi' ? 'घर पर वर्कआउट रूटीन' : 'Home Workout Routine',
      excerpt: locale === 'hi' 
        ? 'बिना किसी उपकरण के घर पर ही पूरा बॉडी वर्कआउट। शुरुआती और एडवांस्ड दोनों के लिए।' 
        : 'Full body workout at home without any equipment. Suitable for both beginners and advanced.',
      date: locale === 'hi' ? '8 अगस्त 2026' : '8 August 2026',
      readTime: locale === 'hi' ? '8 मिनट' : '8 min read',
      category: locale === 'hi' ? 'एक्सरसाइज' : 'Exercise',
      emoji: '💪',
      color: 'from-rose-400 to-pink-500'
    }
  ];

  const categories = [
    { name: locale === 'hi' ? 'सभी' : 'All', count: posts.length },
    { name: locale === 'hi' ? 'वजन घटाना' : 'Weight Loss', count: 1 },
    { name: locale === 'hi' ? 'योग' : 'Yoga', count: 1 },
    { name: locale === 'hi' ? 'डाइट' : 'Diet', count: 1 },
    { name: locale === 'hi' ? 'मेंटल हेल्थ' : 'Mental Health', count: 1 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* ===== HEADER ===== */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            {locale === 'hi' ? 'स्वास्थ्य ब्लॉग' : 'Health Blog'}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {locale === 'hi' ? 'ब्लॉग आर्टिकल्स' : 'Blog Articles'}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            {locale === 'hi' 
              ? 'वजन घटाना, योग, हेल्दी डाइट और मेंटल हेल्थ पर आसान और प्रैक्टिकल आर्टिकल्स।' 
              : 'Easy and practical articles on weight loss, yoga, healthy diet and mental health.'}
          </p>
        </div>
      </section>

      {/* ===== CATEGORY PILLS (visual only for now) ===== */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              i === 0
                ? 'bg-green-600 text-white shadow-md shadow-green-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-700'
            }`}
          >
            {cat.name}
            <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* ===== POSTS GRID ===== */}
      <section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Colored top accent */}
              <div className={`h-1.5 bg-gradient-to-r ${post.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Category + Read time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gray-50 text-gray-700 px-2.5 py-1 rounded-full">
                    <span>{post.emoji}</span>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all"
                  >
                    {locale === 'hi' ? 'पूरा पढ़ें' : 'Read more'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="pb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl px-6 py-12 md:px-10 text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100/50 rounded-full translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 relative z-10">
            {locale === 'hi' ? 'और आर्टिकल्स जल्द आ रहे हैं' : 'More Articles Coming Soon'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto relative z-10">
            {locale === 'hi' 
              ? 'नियमित रूप से नए और उपयोगी आर्टिकल्स जोड़ते रहते हैं। होम पेज पर वापस जाकर कैटेगरी देखें।' 
              : 'We regularly add new and useful articles. Go back to the home page to explore categories.'}
          </p>
          <Link
            href={`/${locale}`}
            className="relative z-10 inline-flex items-center gap-2 bg-green-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            {locale === 'hi' ? 'होम पेज पर जाएं' : 'Back to Home'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}