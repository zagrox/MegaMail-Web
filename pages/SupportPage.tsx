
import React from 'react';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';

// --- Illustrations and Icons ---
const SupportHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از تیم پشتیبانی مشتریان">
        <defs>
            <linearGradient id="support-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="support-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#3B82F6" floodOpacity="0.15"/>
            </filter>
        </defs>
        <circle cx="250" cy="200" r="180" className="fill-blue-50 dark:fill-gray-800/50" />
        <g style={{ filter: 'url(#support-shadow)' }} transform="translate(150, 100)">
            <rect x="0" y="0" width="200" height="200" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
            {/* Chat bubble */}
            <path d="M40 50 a20 20 0 0 1 20 -20 h80 a20 20 0 0 1 20 20 v40 a20 20 0 0 1 -20 20 h-60 l-20 20 v-20 h-20 a20 20 0 0 1 -20 -20 z" fill="url(#support-hero-gradient)" />
            <circle cx="65" cy="80" r="5" fill="white" />
            <circle cx="85" cy="80" r="5" fill="white" />
            <circle cx="105" cy="80" r="5" fill="white" />
        </g>
        {/* Headset icon */}
        <g transform="translate(290, 220)">
            <path d="M20 18.5A2.5 2.5 0 0 1 17.5 21h-2.81a6.47 6.47 0 0 0-1.89-1.46L13.5 19a3 3 0 0 1-3-3l.54-1.3A6.45 6.45 0 0 0 12.5 13H15a2.5 2.5 0 0 1 2.5 2.5v3ZM20 18.5v-3a2.5 2.5 0 0 0-2.5-2.5h-2.5A6.5 6.5 0 0 0 6.5 13H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.5A6.5 6.5 0 0 0 15 21.5h2.5A2.5 2.5 0 0 0 20 19v-.5Z" fill="#A5B4FC" className="dark:fill-indigo-500" transform="scale(3)"/>
        </g>
    </svg>
);

const TicketIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const KnowledgeBaseIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4A2.5 2.5 0 0 1 6.5 2z"/></svg>
);
const EmailIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const SupportCard: React.FC<{ Icon: React.FC<{className?: string}>, title: string, description: string, actionText: string, actionLink: string, isPrimary?: boolean }> = ({ Icon, title, description, actionText, actionLink, isPrimary = false }) => (
    <div className={`flex flex-col text-right bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg ${isPrimary ? 'ring-2 ring-blue-500' : ''}`}>
        <div className="flex-shrink-0 mb-4">
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${isPrimary ? 'bg-blue-600' : 'bg-blue-100 dark:bg-blue-900/50'}`}>
                <Icon className={`w-8 h-8 ${isPrimary ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
            </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400 flex-grow">{description}</p>
        <div className="mt-6">
            <a href={actionLink} className={`inline-block font-bold text-lg px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 ${isPrimary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                {actionText}
            </a>
        </div>
    </div>
);

const faqData = [
    {
        question: 'چگونه می‌توانم یک تیکت پشتیبانی ثبت کنم؟',
        answer: 'بهترین و سریع‌ترین راه برای دریافت پشتیبانی فنی، ثبت تیکت از طریق پنل کاربری شماست. پس از ورود به حساب کاربری خود، به بخش "پشتیبانی" مراجعه کرده و تیکت جدیدی ایجاد کنید.'
    },
    {
        question: 'ساعات کاری تیم پشتیبانی چه زمانی است؟',
        answer: 'تیم پشتیبانی ما در روزهای شنبه تا چهارشنبه از ساعت ۹ صبح تا ۵ بعد از ظهر و در روزهای پنجشنبه از ساعت ۹ صبح تا ۱ بعد از ظهر آماده پاسخگویی به شما عزیزان است.'
    },
    {
        question: 'چه مدت طول می‌کشد تا به تیکت من پاسخ داده شود؟',
        answer: 'ما تمام تلاش خود را می‌کنیم تا در ساعات کاری، به تیکت‌ها در کمتر از چند ساعت پاسخ دهیم. بسته به پیچیدگی موضوع، ممکن است این زمان کمی بیشتر شود، اما همواره اولویت ما پاسخگویی سریع و دقیق است.'
    },
    {
        question: 'آیا مستندات و راهنماهای آموزشی وجود دارد؟',
        answer: 'بله، ما یک پایگاه دانش جامع شامل مقالات آموزشی، راهنماهای گام‌به‌گام و ویدیوها فراهم کرده‌ایم که می‌توانید برای یافتن پاسخ سوالات متداول و یادگیری نحوه استفاده از پلتفرم به آن مراجعه کنید.'
    }
];

const organizationSchema = {
    "@type": "Organization",
    "name": "مگامیل",
    "url": "https://www.megamail.ir",
    "logo": logoSrc,
};

const contactPageSchema = {
    "@type": "ContactPage",
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@megamail.ir",
            "availableLanguage": ["Persian"]
        }
    ]
};


const SupportPage: React.FC = () => {
    return (
        <>
            <SEO
                title="پشتیبانی | مگامیل"
                description="تیم پشتیبانی مگامیل آماده پاسخگویی به سوالات شماست. از طریق تیکت، ایمیل یا پایگاه دانش با ما در ارتباط باشید."
                schemas={[organizationSchema, contactPageSchema]}
            />
            <div className="py-8 space-y-24 sm:space-y-32">
                {/* Hero Section */}
                <section className="py-12 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last">
                            <SupportHeroIllustration />
                        </div>
                        <div className="text-right space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                <span className="block">همیشه در کنار شما هستیم</span>
                                <span className="block text-blue-600 dark:text-blue-400 mt-2">برای موفقیت شما</span>
                            </h1>
                            <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                               موفقیت شما، موفقیت ماست. تیم پشتیبانی متخصص مگامیل آماده است تا به شما در هر مرحله از مسیر بازاریابی ایمیلی کمک کند.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Support Channels Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                          چگونه می‌توانیم به شما کمک کنیم؟
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                           از راه‌های زیر برای دریافت پشتیبانی و یافتن پاسخ سوالات خود استفاده کنید.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SupportCard
                            Icon={TicketIcon}
                            title="تیکت پشتیبانی"
                            description="بهترین راه برای سوالات فنی و مشکلات خاص. تیکت خود را از طریق پنل کاربری ثبت کنید تا کارشناسان ما به سرعت آن را بررسی کنند."
                            actionText="ورود و ثبت تیکت"
                            actionLink="https://app.megamail.ir"
                            isPrimary={true}
                        />
                         <SupportCard
                            Icon={KnowledgeBaseIcon}
                            title="پایگاه دانش"
                            description="پاسخ بسیاری از سوالات شما در راهنماهای جامع و مقالات آموزشی ما موجود است. قبل از تماس، اینجا را جستجو کنید."
                            actionText="مشاهده راهنماها"
                            actionLink="#"
                        />
                         <SupportCard
                            Icon={EmailIcon}
                            title="پشتیبانی ایمیلی"
                            description="برای سوالات عمومی و غیرفوری، می‌توانید از طریق ایمیل با ما در ارتباط باشید. ما در اسرع وقت به شما پاسخ خواهیم داد."
                            actionText="ارسال ایمیل"
                            actionLink="mailto:support@megamail.ir"
                        />
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-gray-100 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">سوالات متداول پشتیبانی</h2>
                    <div className="mt-8 max-w-4xl mx-auto space-y-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                                <h4 className="font-semibold text-lg">{faq.question}</h4>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default SupportPage;
