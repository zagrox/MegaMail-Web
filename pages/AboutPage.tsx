
import React from 'react';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';
import { CTA_URL } from '../constants';

const AboutHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ماموریت و چشم‌انداز شرکت">
        <defs>
            <linearGradient id="about-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>
            <filter id="about-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#3B82F6" floodOpacity="0.15"/>
            </filter>
        </defs>
        <circle cx="250" cy="200" r="180" className="fill-blue-50 dark:fill-gray-800/50" />
        <g style={{ filter: 'url(#about-shadow)' }} transform="translate(175, 125)">
            <rect x="0" y="0" width="150" height="150" rx="75" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
            <path d="M50 75 L75 100 L100 50" stroke="url(#about-hero-gradient)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
         <g transform="translate(100, 100)" opacity="0.5"><circle cx="15" cy="15" r="15" fill="#A5B4FC" className="dark:fill-indigo-500" /></g>
        <g transform="translate(350, 280)" opacity="0.5"><circle cx="15" cy="15" r="15" fill="#A5B4FC" className="dark:fill-indigo-500" /></g>
    </svg>
);

const organizationSchema = {
    "@type": "Organization",
    "name": "مگامیل",
    "url": "https://www.megamail.ir",
    "logo": logoSrc,
    "description": "مگامیل یک پلتفرم هوشمند بازاریابی ایمیلی است که به کسب‌وکارها کمک می‌کند تا با ابزارهای قدرتمند و مدلی منعطف، کمپین‌های موثری را اجرا کرده و رشد کنند.",
    "sameAs": []
};

const AboutPage: React.FC = () => {
    return (
        <>
            <SEO
                title="درباره مگامیل | ماموریت ما"
                description="با ماموریت و چشم‌انداز مگامیل آشنا شوید. ما به دنبال توانمندسازی کسب‌وکارها با ابزارهای بازاریابی ایمیلی ساده, هوشمند و قدرتمند هستیم."
                schemas={[organizationSchema]}
            />
            <div className="py-8 space-y-24 sm:space-y-32">
                {/* Hero Section */}
                <section className="py-12 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last">
                            <AboutHeroIllustration />
                        </div>
                        <div className="text-right space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                <span className="block">توانمندسازی کسب‌وکارها</span>
                                <span className="block text-blue-600 dark:text-blue-400 mt-2">از طریق ارتباطات هوشمند</span>
                            </h1>
                            <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                               مگامیل با یک هدف ساده متولد شد: ارائه ابزارهای بازاریابی ایمیلی قدرتمند و در عین حال ساده که به کسب‌وکارها در هر اندازه‌ای کمک می‌کند تا رشد کنند.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="text-center max-w-4xl mx-auto">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        ماموریت ما
                    </h2>
                    <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        ماموریت ما در مگامیل، دموکراتیزه کردن بازاریابی ایمیلی است. ما معتقدیم که هر کسب‌وکاری، از یک استارتاپ نوپا تا یک شرکت بزرگ، باید به ابزارهایی دسترسی داشته باشد که به آن‌ها اجازه دهد پیام خود را به گوش مخاطبانشان برسانند. ما این کار را با یک پلتفرم منعطف، مدلی منصفانه (پرداخت به ازای مصرف) و تمرکز بی‌وقفه بر تجربه کاربری انجام می‌دهیم.
                    </p>
                </section>

                {/* Values Section */}
                <section className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl py-16 sm:py-20 px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                          ارزش‌های ما
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">سادگی</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">ما پیچیدگی را به چالش می‌کشیم تا ابزارهایی بسازیم که استفاده از آن‌ها لذت‌بخش و شهودی باشد.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">شفافیت</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">از قیمت‌گذاری گرفته تا عملکرد پلتفرم، ما به شفافیت کامل در هر کاری که انجام می‌دهیم، اعتقاد داریم.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">نوآوری</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">ما دائماً در حال کاوش و پیاده‌سازی فناوری‌های جدید هستیم تا به مشتریان خود کمک کنیم یک قدم جلوتر باشند.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        به ما بپیوندید
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                        آماده‌اید تا بخشی از جامعه رو به رشد ما باشید و بازاریابی خود را متحول کنید؟
                    </p>
                    <div className="mt-8">
                        <a
                            href={CTA_URL}
                            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                        >
                            رایگان شروع کنید
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;