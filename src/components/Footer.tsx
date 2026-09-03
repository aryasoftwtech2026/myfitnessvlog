// components/Footer.tsx
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-green-700 text-lg">Health & Fitness</p>
            <p className="text-sm text-gray-500 mt-1">
              {locale === 'hi' ? 'सरल स्वास्थ्य जानकारी' : 'Simple health information'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href={`/${locale}/policy`} className="text-gray-600 hover:text-green-700 transition">
              {locale === 'hi' ? 'प्राइवेसी पॉलिसी' : 'Privacy Policy'}
            </Link>
            <Link href={`/${locale}/Disclaimer`} className="text-gray-600 hover:text-green-700 transition">
              {locale === 'hi' ? 'डिस्क्लेमर' : 'Disclaimer'}
            </Link>
            <Link href={`/${locale}/terms&condition`} className="text-gray-600 hover:text-green-700 transition">
              {locale === 'hi' ? 'नियम और शर्तें' : 'Terms & Conditions'}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-green-700 transition">
              {locale === 'hi' ? 'संपर्क' : 'Contact'}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Health & Fitness. {locale === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}