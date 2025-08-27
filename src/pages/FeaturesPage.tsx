import React from 'react';
import { CTA_URL } from '../constants';

// --- Icon Components ---
const PlatformIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);
const AudienceIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const EmailCreationIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
);
const AnalyticsIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const InfrastructureIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);
const BillingIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
);
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

// --- Illustration Components ---
const FeaturesHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ویژگی‌های پلتفرم">
        <defs>
            <linearGradient id="features-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#007BFF"/>
            </linearGradient>
            <filter id="features-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#007BFF" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 450,200 C 450,310.46 360.46,400 250,400 C 139.54,400 50,310.46 50,200 C 50,89.54 139.54,0 250,0 C 360.46,0 450,89.54 450,200 Z" className="fill-blue-50 dark:fill-gray-800/50" />
        <g style={{ filter: 'url(#features-shadow)' }}>
            <rect x="150" y="100" width="200" height="200" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
            <rect x="170" y="120" width="160" height="10" rx="5" fill="url(#features-grad)"/>
            <rect x="170" y="145" width="120" height="8" rx="4" className="fill-gray-200 dark:fill-gray-500"/>
            <rect x="170" y="165" width="140" height="8" rx="4" className="fill-gray-200 dark:fill-gray-500"/>
            <rect x="170" y="200" width="100" height="12" rx="6" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="170" y="222" width="100" height="12" rx="6" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="170" y="244" width="100" height="12" rx="6" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M280 200 l5 5 l10 -10" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M280 222 l5 5 l10 -10" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M280 244 l5 5 l10 -10" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(50, 80)" style={{ filter: 'url(#features-shadow)' }}>
            <rect x="0" y="0" width="80" height="50" rx="10" className="fill-white dark:fill-gray-700"/>
            <path d="M20 15 h40 M20 25 h20 M20 35 h30" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
         <g transform="translate(370, 150)" style={{ filter: 'url(#features-shadow)' }}>
            <rect x="0" y="0" width="80" height="50" rx="10" className="fill-white dark:fill-gray-700"/>
            <circle cx="25" cy="25" r="8" fill="#3B82F6" />
            <circle cx="55" cy="25" r="5" fill="#3B82F6" opacity="0.6"/>
        </g>
         <g transform="translate(50, 270)" style={{ filter: 'url(#features-shadow)' }}>
            <rect x="0" y="0" width="80" height="50" rx="10" className="fill-white dark:fill-gray-700"/>
            <path d="M20 20 L30 30 M30 20 L20 30" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="45" y="18" width="15" height="15" rx="3" fill="#3B82F6" opacity="0.6"/>
        </g>
    </svg>
);
const PlatformIllustration: React.FC = () => <svg viewBox="0 0 200 200"><rect x="20" y="40" width="160" height="120" rx="10" stroke="#9CA3AF" fill="none" strokeWidth="2" className="dark:stroke-gray-600"/><rect x="20" y="40" width="160" height="30" rx="10" fill="#E5E7EB" className="dark:fill-gray-700"/><circle cx="35" cy="55" r="5" fill="#9CA3AF" className="dark:fill-gray-500"/><rect x="50" y="52" width="40" height="6" rx="3" fill="#9CA3AF" className="dark:fill-gray-500"/><rect x="35" y="85" width="130" height="8" rx="4" fill="#3B82F6" className="dark:fill-blue-500"/><rect x="35" y="105" width="100" height="8" rx="4" fill="#3B82F6" className="dark:fill-blue-500" opacity="0.7"/></svg>;
const AudienceIllustration: React.FC = () => <svg viewBox="0 0 200 200"><g transform="translate(65, 65) scale(3)"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="#3B82F6" strokeWidth="1.5"/><circle cx="9" cy="7" r="4" fill="none" stroke="#3B82F6" strokeWidth="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/></g></svg>;
const EmailCreationIllustration: React.FC = () => <svg viewBox="0 0 200 200"><g transform="translate(10, 10)"><rect x="40" y="40" width="120" height="80" rx="5" fill="#fff" className="dark:fill-gray-700" stroke="#E5E7EB" strokeWidth="2" /><rect x="50" y="50" width="100" height="10" rx="3" fill="#3B82F6" opacity="0.7" /><rect x="50" y="70" width="70" height="8" rx="3" fill="#D1D5DB" className="dark:fill-gray-500"/><rect x="140" y="140" width="40" height="40" rx="5" fill="#3B82F6"/></g></svg>;
const AnalyticsIllustration: React.FC = () => <svg viewBox="0 0 200 200"><rect x="20" y="20" width="160" height="160" rx="10" fill="none" stroke="#E5E7EB" strokeWidth="2" className="dark:stroke-gray-700"/><path d="M 40 140 L 70 100 L 100 120 L 130 80 L 160 100" stroke="#3B82F6" strokeWidth="4" fill="none" strokeLinecap="round"/><rect x="50" y="50" width="100" height="10" rx="3" fill="#F3F4F6" className="dark:fill-gray-800"/><rect x="50" y="70" width="70" height="8" rx="3" fill="#F3F4F6" className="dark:fill-gray-800"/></svg>;
const InfrastructureIllustration: React.FC = () => <svg viewBox="0 0 200 200"><rect x="30" y="70" width="140" height="20" rx="5" fill="#fff" className="dark:fill-gray-700" stroke="#E5E7EB" strokeWidth="2"/><circle cx="45" cy="80" r="4" fill="#3B82F6"/><rect x="30" y="110" width="140" height="20" rx="5" fill="#fff" className="dark:fill-gray-700" stroke="#E5E7EB" strokeWidth="2"/><circle cx="45" cy="120" r="4" fill="#3B82F6"/></svg>;
const BillingIllustration: React.FC = () => <svg viewBox="0 0 200 200"><rect x="30" y="50" width="140" height="100" rx="10" fill="none" stroke="#E5E7EB" strokeWidth="2" className="dark:stroke-gray-600"/><rect x="30" y="80" width="140" height="1" fill="#E5E7EB" className="dark:fill-gray-600"/><rect x="45" y="100" width="60" height="8" rx="3" fill="#D1D5DB" className="dark:fill-gray-500"/><rect x="120" y="100" width="35" height="20" rx="5" fill="#3B82F6"/></svg>;


const featureCategories = [
    {
        Icon: PlatformIcon,
        Illustration: PlatformIllustration,
        title: "پلتفرم اصلی و تجربه کاربری",
        description: "یک مرکز فرماندهی مدرن با تمام ابزارهای لازم برای مدیریت حساب کاربری و شروعی آسان.",
        features: ["داشبورد مدرن", "مدیریت کامل پروفایل", "احراز هویت امن", "فرآیند ورود گام به گام", "پشتیبانی از حالت روشن و تاریک", "رابط کاربری چند زبانه", "اپلیکیشن قابل نصب (PWA)", "نماهای قابل جاسازی"]
    },
    {
        Icon: AudienceIcon,
        Illustration: AudienceIllustration,
        title: "مدیریت مخاطبین و مخاطبان",
        description: "ابزارهای قدرتمند برای سازماندهی، فیلتر کردن و درک عمیق مخاطبان برای کمپین‌های هدفمند.",
        features: ["مدیریت کامل مخاطبین", "ورود و خروج آسان CSV", "سازماندهی در لیست‌های ایستا", "بخش‌بندی پیشرفته و پویا"]
    },
    {
        Icon: EmailCreationIcon,
        Illustration: EmailCreationIllustration,
        title: "ساخت ایمیل و ارسال کمپین",
        description: "یک ویرایشگر بصری پیشرفته برای طراحی ایمیل‌های زیبا و واکنش‌گرا بدون نیاز به کدنویسی.",
        features: ["ایمیل‌ساز کشیدن و رها کردن", "سفارشی‌سازی کامل استایل‌ها", "پیش‌نمایش زنده موبایل", "ذخیره طرح‌ها به عنوان قالب", "ارسال به لیست‌ها یا سگمنت‌ها", "بهینه‌سازی زمان ارسال", "کنترل رهگیری و UTM"]
    },
    {
        Icon: AnalyticsIcon,
        Illustration: AnalyticsIllustration,
        title: "تحلیل و گزارش‌دهی",
        description: "گزارش‌های جامع و بصری برای سنجش عملکرد کمپین‌ها و اتخاذ تصمیمات داده‌محور.",
        features: ["داشبورد آمار با نمودارها", "فیلتر زمانی پیشرفته", "رهگیری کامل (ارسال، باز شدن، کلیک)", "گزارش‌های تفکیکی کمپین"]
    },
    {
        Icon: InfrastructureIcon,
        Illustration: InfrastructureIllustration,
        title: "زیرساخت فنی و ارسال",
        description: "ابزارهای فنی برای افزایش اعتبار ارسال و یکپارچه‌سازی با سایر سرویس‌ها.",
        features: ["مدیریت و تأیید دامنه‌های ارسال", "ارائه رکوردهای DNS (SPF, DKIM)", "دسترسی به اطلاعات SMTP", "مدیریت رسانه و فایل‌ها"]
    },
    {
        Icon: BillingIcon,
        Illustration: BillingIllustration,
        title: "صورتحساب و سفارشی‌سازی",
        description: "یک سیستم منعطف مبتنی بر اعتبار که به شما امکان می‌دهد پلتفرم را مطابق با نیازهای خود شکل دهید.",
        features: ["سیستم پرداخت به ازای مصرف", "خرید بسته‌های اعتباری", "تاریخچه کامل تراکنش‌ها", "بازارچه ماژول‌ها برای فعال‌سازی ویژگی‌ها"]
    }
];

const FeaturesPage: React.FC = () => {
    return (
        <div className="py-8 space-y-24 sm:space-y-32">
            {/* Hero Section */}
            <section className="py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <FeaturesHeroIllustration />
                    </div>
                    <div className="text-right space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            <span className="block">یک پلتفرم،</span>
                            <span className="block text-blue-600 dark:text-blue-400 mt-2">تمام نیازهای شما</span>
                        </h1>
                        <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                            مگامیل ترکیبی از ابزارهای اصلی بازاریابی با یک سیستم ماژولار و مبتنی بر اعتبار است که به شما امکان می‌دهد پلتفرم را دقیقاً مطابق با نیازهای خود سفارشی کنید.
                        </p>
                        <div className="flex justify-start pt-4">
                            <a
                                href={CTA_URL}
                                className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                            >
                                رایگان شروع کنید
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section>
                <div className="space-y-20 md:space-y-28">
                    {featureCategories.map((category, index) => (
                        <div key={category.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className={`lg:order-${index % 2 === 0 ? 'last' : 'first'}`}>
                                <div className="flex items-center justify-center">
                                    <category.Illustration />
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="inline-flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                        <category.Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                </div>
                                <p className="text-lg text-gray-600 dark:text-gray-400">{category.description}</p>
                                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                                    {category.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="mr-3 rtl:mr-3 rtl:ml-0 text-gray-700 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    ابزارهای قدرتمند ایمیل مارکتینگ در دستان شما
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                    همین حالا ثبت نام کنید و با یک کلیک، کمپین‌های ایملی خود را به سطح بالاتری ببرید.
                </p>
                <div className="mt-8">
                    <a
                        href={`${CTA_URL}/`}
                        className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                    >
                        رایگان شروع کنید
                    </a>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;