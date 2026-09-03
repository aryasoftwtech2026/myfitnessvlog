import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const posts: Record<string, any> = {
  'weight-loss-tips': {
    en: {
      title: 'How to Lose Weight at Home',
      date: '20 August 2026',
      readTime: '6 min read',
      category: 'Weight Loss',
      emoji: '🔥',
      excerpt: 'Easy and effective ways to lose weight without going to the gym. Small daily habits create big results.',
      content: `
        <p>Losing weight at home is completely possible if you stay consistent. You don’t need a gym membership or expensive supplements. The key is building small, sustainable habits that you can follow every day.</p>
        
        <h2>1. Control Your Calorie Intake</h2>
        <p>The basic rule is simple — eat fewer calories than your body burns. You don’t have to starve yourself. Just become more aware of what you eat.</p>
        <ul>
          <li>Reduce sugary drinks and packaged juices</li>
          <li>Limit fried food and late-night snacks</li>
          <li>Use smaller plates to control portion size</li>
          <li>Eat more vegetables and protein-rich foods</li>
        </ul>
        
        <h2>2. Walk Every Day</h2>
        <p>Walking 30–45 minutes daily is one of the easiest and most effective ways to burn fat and improve heart health. You can walk in your colony, park, or even on the terrace.</p>
        
        <h2>3. Do Home Workouts</h2>
        <p>Bodyweight exercises require no equipment and can be done in a small space. Aim for 3–4 sessions per week:</p>
        <ul>
          <li>Squats – 3 sets of 15</li>
          <li>Push-ups (or knee push-ups) – 3 sets</li>
          <li>Planks – hold for 20–40 seconds</li>
          <li>Lunges – 10 per leg</li>
        </ul>
        
        <h2>4. Sleep Properly</h2>
        <p>Lack of sleep increases hunger hormones (ghrelin) and reduces the hormone that makes you feel full (leptin). Aim for 7–8 hours of quality sleep every night.</p>
        
        <h2>5. Stay Consistent</h2>
        <p>Results take time. Extreme diets usually fail because they are not sustainable. Focus on small daily habits instead. Even 1% improvement every day compounds into big results over months.</p>
        
        <blockquote>
          <p>“You don’t have to be extreme, just consistent.”</p>
        </blockquote>
      `
    },
    hi: {
      title: 'घर बैठे वजन कैसे कम करें',
      date: '20 अगस्त 2026',
      readTime: '6 मिनट',
      category: 'वजन घटाना',
      emoji: '🔥',
      excerpt: 'बिना जिम गए वजन कम करने के आसान और असरदार तरीके। छोटी आदतें बड़ा बदलाव लाती हैं।',
      content: `
        <p>घर बैठे वजन कम करना पूरी तरह संभव है अगर आप नियमित रहें। जिम या महंगे सप्लीमेंट की जरूरत नहीं है। असली कुंजी छोटी और टिकाऊ आदतें बनाना है।</p>
        
        <h2>1. कैलोरी कंट्रोल करें</h2>
        <p>मूल नियम सरल है — जितनी कैलोरी शरीर जलाता है उससे कम खाएं। भूखे रहने की जरूरत नहीं, बस होश में खाएं।</p>
        <ul>
          <li>मीठे पेय और पैकेज्ड जूस कम करें</li>
          <li>तला हुआ खाना और रात के नाश्ते को सीमित करें</li>
          <li>छोटे प्लेट का इस्तेमाल करें</li>
          <li>अधिक सब्जियां और प्रोटीन लें</li>
        </ul>
        
        <h2>2. रोज़ वॉक करें</h2>
        <p>रोज़ाना 30–45 मिनट चलना वजन कम करने और दिल की सेहत के लिए बहुत असरदार है। कॉलोनी, पार्क या छत पर चल सकते हैं।</p>
        
        <h2>3. घर पर एक्सरसाइज करें</h2>
        <p>बॉडीवेट एक्सरसाइज के लिए किसी उपकरण की जरूरत नहीं। हफ्ते में 3–4 बार करें:</p>
        <ul>
          <li>स्क्वाट्स – 3 सेट × 15</li>
          <li>पुश-अप्स – 3 सेट</li>
          <li>प्लैंक – 20–40 सेकंड</li>
          <li>लंजेस – हर पैर पर 10</li>
        </ul>
        
        <h2>4. अच्छी नींद लें</h2>
        <p>नींद की कमी भूख बढ़ाने वाले हार्मोन को बढ़ाती है। रोज़ 7–8 घंटे की अच्छी नींद लें।</p>
        
        <h2>5. नियमित बने रहें</h2>
        <p>नतीजे समय लेते हैं। चरम डाइट आमतौर पर फेल हो जाती है क्योंकि वो टिकाऊ नहीं होती। छोटी-छोटी आदतों पर फोकस करें।</p>
        
        <blockquote>
          <p>“चरम होने की जरूरत नहीं, नियमित होना काफी है।”</p>
        </blockquote>
      `
    }
  },

  'yoga-for-beginners': {
    en: {
      title: 'Yoga for Beginners',
      date: '18 August 2026',
      readTime: '5 min read',
      category: 'Yoga',
      emoji: '🧘',
      excerpt: 'Improve your health, flexibility and mental peace with just 15 minutes of yoga every day.',
      content: `
        <p>Yoga is one of the best ways to improve flexibility, reduce stress, and build strength — even if you are a complete beginner. You don’t need to be flexible to start yoga. You start yoga to become flexible.</p>
        
        <h2>1. Start with Basic Asanas</h2>
        <p>Begin with these simple and safe poses:</p>
        <ul>
          <li><strong>Mountain Pose (Tadasana)</strong> – Improves posture</li>
          <li><strong>Cat-Cow Pose</strong> – Great for spine mobility</li>
          <li><strong>Child’s Pose (Balasana)</strong> – Relaxes the body and mind</li>
          <li><strong>Downward Dog</strong> – Strengthens arms and stretches hamstrings</li>
        </ul>
        
        <h2>2. Practice Daily for 15 Minutes</h2>
        <p>You don’t need long sessions. Even 15 minutes every day can make a big difference in flexibility, mood, and energy levels within a few weeks.</p>
        
        <h2>3. Focus on Breathing</h2>
        <p>Breathing is the most important part of yoga. Inhale and exhale slowly and deeply through the nose. Never hold your breath while doing asanas.</p>
        
        <h2>4. Be Patient with Your Body</h2>
        <p>Don’t force any pose. Progress comes with regular practice. Listen to your body and respect its limits.</p>
      `
    },
    hi: {
      title: 'शुरुआती लोगों के लिए योग',
      date: '18 अगस्त 2026',
      readTime: '5 मिनट',
      category: 'योग',
      emoji: '🧘',
      excerpt: 'रोज़ाना सिर्फ 15 मिनट के योग से सेहत, लचीलापन और मन की शांति सुधारें।',
      content: `
        <p>योग लचीलापन बढ़ाने, तनाव कम करने और ताकत बनाने का सबसे अच्छा तरीका है — भले ही आप बिलकुल नए हों। लचीला होने की जरूरत नहीं है योग शुरू करने के लिए। योग शुरू करो लचीला बनने के लिए।</p>
        
        <h2>1. बेसिक आसन से शुरू करें</h2>
        <p>इन आसान और सुरक्षित आसनों से शुरुआत करें:</p>
        <ul>
          <li><strong>ताड़ासन</strong> – मुद्रा सुधारता है</li>
          <li><strong>मार्जरीआसन (कैट-काउ)</strong> – रीढ़ की हड्डी के लिए बढ़िया</li>
          <li><strong>बालासन</strong> – शरीर और मन को आराम देता है</li>
          <li><strong>अधोमुख श्वानासन</strong> – हाथ मजबूत करता है और हैमस्ट्रिंग स्ट्रेच करता है</li>
        </ul>
        
        <h2>2. रोज़ 15 मिनट करें</h2>
        <p>लंबे सेशन की जरूरत नहीं। रोज़ सिर्फ 15 मिनट भी कुछ हफ्तों में लचीलापन, मूड और एनर्जी में बड़ा फर्क डाल सकते हैं।</p>
        
        <h2>3. सांस पर ध्यान दें</h2>
        <p>योग में सांस सबसे महत्वपूर्ण है। नाक से धीरे-धीरे और गहरी सांस लें। आसन करते समय सांस न रोकें।</p>
        
        <h2>4. धैर्य रखें</h2>
        <p>किसी भी आसन पर जोर न डालें। नियमित अभ्यास से प्रगति होती है। शरीर की बात सुनें।</p>
      `
    }
  },

  'healthy-diet-plan': {
    en: {
      title: 'Healthy Diet Plan',
      date: '15 August 2026',
      readTime: '7 min read',
      category: 'Diet',
      emoji: '🥗',
      excerpt: 'How to create a balanced and nutritious diet with Indian food. Delicious and healthy together.',
      content: `
        <p>A healthy diet doesn’t mean giving up Indian food. You can eat roti, dal, rice and still stay fit. The secret is balance and portion control.</p>
        
        <h2>1. Eat Balanced Meals</h2>
        <p>Every meal should ideally contain:</p>
        <ul>
          <li><strong>Protein</strong> – Dal, paneer, eggs, curd, chicken</li>
          <li><strong>Complex Carbs</strong> – Roti, brown rice, millets</li>
          <li><strong>Vegetables</strong> – At least half of your plate</li>
          <li><strong>Healthy Fats</strong> – A little ghee or nuts</li>
        </ul>
        
        <h2>2. Reduce Oil and Sugar</h2>
        <p>Most Indian households use more oil than needed. Try these simple changes:</p>
        <ul>
          <li>Measure oil with a spoon instead of pouring freely</li>
          <li>Avoid sugary sweets on weekdays</li>
          <li>Replace soft drinks with lemon water or buttermilk</li>
        </ul>
        
        <h2>3. Drink Enough Water</h2>
        <p>Drink 3–4 litres of water daily. Start your morning with a glass of warm water. Proper hydration keeps metabolism active and reduces unnecessary snacking.</p>
      `
    },
    hi: {
      title: 'हेल्दी डाइट प्लान',
      date: '15 अगस्त 2026',
      readTime: '7 मिनट',
      category: 'डाइट',
      emoji: '🥗',
      excerpt: 'भारतीय खाने के साथ संतुलित और पौष्टिक डाइट कैसे बनाएं।',
      content: `
        <p>हेल्दी डाइट का मतलब भारतीय खाना छोड़ना नहीं है। आप रोटी, दाल, चावल खाकर भी फिट रह सकते हैं। असली राज़ है संतुलन और मात्रा पर नियंत्रण।</p>
        
        <h2>1. संतुलित भोजन करें</h2>
        <p>हर भोजन में ये चीजें शामिल करें:</p>
        <ul>
          <li><strong>प्रोटीन</strong> – दाल, पनीर, अंडे, दही, चिकन</li>
          <li><strong>कॉम्प्लेक्स कार्ब्स</strong> – रोटी, ब्राउन राइस, मिलेट्स</li>
          <li><strong>सब्जियां</strong> – प्लेट का आधा हिस्सा</li>
          <li><strong>हेल्दी फैट</strong> – थोड़ा घी या मेवे</li>
        </ul>
        
        <h2>2. तेल और चीनी कम करें</h2>
        <p>अधिकतर घरों में जरूरत से ज्यादा तेल इस्तेमाल होता है। ये छोटे बदलाव अपनाएं:</p>
        <ul>
          <li>तेल को मुट्ठी से नहीं, चम्मच से डालें</li>
          <li>वीकडेज़ पर मीठा कम करें</li>
          <li>ठंडे पेय की जगह नींबू पानी या छाछ लें</li>
        </ul>
        
        <h2>3. पर्याप्त पानी पिएं</h2>
        <p>रोज़ 3–4 लीटर पानी पिएं। सुबह उठकर गुनगुना पानी पिएं। सही हाइड्रेशन मेटाबॉलिज्म तेज रखता है।</p>
      `
    }
  },

  'reduce-stress': {
    en: {
      title: 'How to Reduce Stress',
      date: '12 August 2026',
      readTime: '5 min read',
      category: 'Mental Health',
      emoji: '🧠',
      excerpt: 'Simple home remedies and practical ways to reduce stress and anxiety.',
      content: `
        <p>Stress is common in today’s fast-paced life, but you can manage it effectively with simple daily habits. You don’t need expensive therapy or apps to start feeling better.</p>
        
        <h2>1. Practice Deep Breathing</h2>
        <p>Spend just 5–10 minutes daily doing deep breathing or simple meditation. Sit quietly, close your eyes, and focus on slow inhalations and exhalations.</p>
        
        <h2>2. Limit Social Media</h2>
        <p>Too much screen time and constant comparison increase anxiety. Try a short digital detox every day — even 30–60 minutes without the phone helps.</p>
        
        <h2>3. Stay Physically Active</h2>
        <p>Walking, yoga, or any form of movement helps release endorphins — the body’s natural stress-relieving hormones. Even a 20-minute walk can significantly improve your mood.</p>
      `
    },
    hi: {
      title: 'तनाव कैसे कम करें',
      date: '12 अगस्त 2026',
      readTime: '5 मिनट',
      category: 'मेंटल हेल्थ',
      emoji: '🧠',
      excerpt: 'तनाव और चिंता कम करने के आसान घरेलू और प्रैक्टिकल तरीके।',
      content: `
        <p>आजकल तनाव आम बात है, लेकिन सरल रोज़मर्रा की आदतों से इसे कंट्रोल किया जा सकता है। महंगी थेरेपी या ऐप की जरूरत नहीं।</p>
        
        <h2>1. गहरी सांस लें</h2>
        <p>रोज़ सिर्फ 5–10 मिनट गहरी सांस या सरल मेडिटेशन करें। आंखें बंद करके धीरे-धीरे सांस लें और छोड़ें।</p>
        
        <h2>2. सोशल मीडिया सीमित करें</h2>
        <p>ज्यादा स्क्रीन टाइम और तुलना चिंता बढ़ाती है। रोज़ थोड़ी देर डिजिटल डिटॉक्स करें — 30–60 मिनट बिना फोन के भी फर्क पड़ता है।</p>
        
        <h2>3. शारीरिक रूप से सक्रिय रहें</h2>
        <p>वॉक, योग या कोई भी मूवमेंट एंडोर्फिन रिलीज करता है — शरीर के प्राकृतिक तनाव कम करने वाले हार्मोन। 20 मिनट की वॉक भी मूड सुधार सकती है।</p>
      `
    }
  }
};

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  const post = posts[slug]?.[locale];

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">

      {/* Back Link */}
      <div className="pt-8 pb-6">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-700 transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'hi' ? 'वापस ब्लॉग पर' : 'Back to Blog'}
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100">
            <span>{post.emoji}</span>
            {post.category}
          </span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
          {post.title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-green-500 pl-4">
          {post.excerpt}
        </p>
      </header>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

      {/* Article Content */}
      <article>
        <div
          className="
            prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
            prose-ul:my-5 prose-ul:space-y-2
            prose-li:text-gray-700
            prose-strong:text-gray-900
            prose-blockquote:border-l-4 prose-blockquote:border-green-500
            prose-blockquote:bg-green-50 prose-blockquote:py-3 prose-blockquote:px-5
            prose-blockquote:rounded-r-xl prose-blockquote:not-italic
            prose-blockquote:text-gray-700
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Bottom Navigation */}
      <div className="mt-16 pt-10 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'hi' ? 'सभी आर्टिकल्स देखें' : 'View all articles'}
          </Link>

          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            {locale === 'hi' ? 'होम पेज' : 'Home'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Soft CTA Card */}
      <div className="mt-12 mb-16 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6 md:p-8 text-center">
        <p className="text-gray-700 mb-4">
          {locale === 'hi'
            ? 'क्या यह आर्टिकल उपयोगी लगा? और ऐसे ही प्रैक्टिकल टिप्स पढ़ते रहें।'
            : 'Found this article useful? Keep reading more practical tips like this.'}
        </p>
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-green-700 font-bold hover:underline"
        >
          {locale === 'hi' ? 'और आर्टिकल्स देखें →' : 'Explore more articles →'}
        </Link>
      </div>
    </div>
  );
}