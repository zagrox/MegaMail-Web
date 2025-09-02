
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

const ZagroxIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از شبکه شرکت زاگرس">
        <defs>
            <linearGradient id="zagrox-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
        </defs>
        <path d="M 50,200 C 50,100 150,50 250,50 S 450,100 450,200 S 350,350 250,350 S 50,300 50,200 Z" className="fill-indigo-50 dark:fill-gray-800/50" />
        <g opacity="0.5">
            <path d="M 250 200 L 150 150" stroke="url(#zagrox-grad)" strokeWidth="2" />
            <path d="M 250 200 L 180 280" stroke="url(#zagrox-grad)" strokeWidth="2" />
            <path d="M 250 200 L 350 250" stroke="url(#zagrox-grad)" strokeWidth="2" />
            <path d="M 250 200 L 320 120" stroke="url(#zagrox-grad)" strokeWidth="2" />
            <path d="M 150 150 L 180 280" stroke="#A5B4FC" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 350 250 L 320 120" stroke="#A5B4FC" strokeWidth="1" strokeDasharray="4 4" />
        </g>
        <circle cx="250" cy="200" r="25" fill="url(#zagrox-grad)" />
        <circle cx="150" cy="150" r="15" fill="url(#zagrox-grad)" />
        <circle cx="180" cy="280" r="15" fill="url(#zagrox-grad)" />
        <circle cx="350" cy="250" r="15" fill="url(#zagrox-grad)" />
        <circle cx="320" cy="120" r="15" fill="url(#zagrox-grad)" />
    </svg>
);

const IR48Illustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از زیرساخت فنی IR48">
        <defs>
            <linearGradient id="ir48-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
        </defs>
        <path d="M 100 50 H 400 A 50 50 0 0 1 400 150 H 100 A 50 50 0 0 1 100 50 Z" className="fill-teal-50 dark:fill-gray-800/50" transform="translate(0, 80)" />
        <g transform="translate(150, 100)">
            <rect x="0" y="0" width="200" height="200" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
            <rect x="20" y="20" width="160" height="20" rx="5" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="20" y="50" width="160" height="20" rx="5" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="20" y="80" width="160" height="20" rx="5" className="fill-gray-200 dark:fill-gray-600" />
            <circle cx="160" cy="30" r="5" fill="url(#ir48-grad)" />
            <circle cx="160" cy="60" r="5" fill="url(#ir48-grad)" />
            <circle cx="160" cy="90" r="5" className="fill-gray-400" />
            <path d="M 20 120 L 180 120 L 160 180 L 40 180 Z" className="fill-gray-100 dark:fill-gray-800" />
        </g>
    </svg>
);


const organizationSchema = {
    "@type": "Organization",
    "name": "مگامیل",
    "url": "https://www.megamail.ir",
    "logo": logoSrc,
    "description": "مگامیل یک پلتفرم هوشمند بازاریابی ایمیلی است که به کسب‌وکارها کمک می‌کند تا با ابزارهای قدرتمند و مدلی منعطف، کمپین‌های موثری را اجرا کرده و رشد کنند.",
    "sameAs": ["https://zagrox.com"]
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

                {/* Behind the Scenes Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            پشت صحنه مگامیل
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                            مگامیل حاصل همکاری و تخصص دو مجموعه بزرگ است که با هدف ارائه بهترین خدمات گرد هم آمده‌اند.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* ZAGROX Card */}
                        <div className="text-right">
                            <div className="mb-8 rounded-lg overflow-hidden"><ZagroxIllustration /></div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">مجموعه اینترنتی زاگرس (ZAGROX)</h3>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                مگامیل بخشی از مجموعه اینترنتی زاگرس است. زاگرس با هدف توسعه و ارائه خدمات نوین و کاربردی در فضای وب ایران فعالیت می‌کند و مجموعه‌ای از برندهای موفق را در کارنامه خود دارد. ما در زاگرس به دنبال ساختن آینده‌ای دیجیتال و روشن برای کسب‌وکارهای ایرانی هستیم.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="https://zagrox.com/about/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    آشنایی بیشتر با زاگرس
                                    <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* IR48.com Card */}
                        <div className="text-right">
                            <div className="mb-8 rounded-lg overflow-hidden"><IR48Illustration /></div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">فناوری و زیرساخت IR48.com</h3>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                تمام زیرساخت‌های فنی، توسعه نرم‌افزار، و خدمات پرداخت در مجموعه زاگرس، از جمله مگامیل، توسط IR48.com پشتیبانی می‌شود. IR48 به عنوان مرکز فناوری و هاب خدماتی ما، پایداری، امنیت و نوآوری مداوم سرویس‌ها را تضمین می‌کند و ستون فقرات فنی محصولات ما محسوب می‌شود.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="https://ir48.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    بازدید از IR48.com
                                    <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                </a>
                            </div>
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
