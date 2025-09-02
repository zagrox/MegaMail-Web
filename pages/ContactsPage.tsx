
import React from 'react';
import { CTA_URL } from '../constants';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';

// --- SVG & Icon Components ---

const ContactsHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از داشبورد مدیریت مخاطبان">
        <defs>
            <linearGradient id="contacts-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>
            <filter id="contacts-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#3B82F6" floodOpacity="0.15"/>
            </filter>
        </defs>
        
        {/* Background shape */}
        <path d="M 50,200 C 50,100 150,50 250,50 S 450,100 450,200 S 350,350 250,350 S 50,300 50,200 Z" className="fill-blue-50 dark:fill-gray-800/50" />

        {/* Central UI (Contacts List) */}
        <g style={{ filter: 'url(#contacts-shadow)' }}>
            <rect x="125" y="80" width="250" height="240" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            
            {/* Header */}
            <rect x="140" y="95" width="220" height="30" rx="8" className="fill-gray-100 dark:fill-gray-800" />
            <rect x="150" y="105" width="80" height="10" rx="5" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="300" y="102" width="50" height="16" rx="8" fill="url(#contacts-hero-gradient)" />
            
            {/* Contact Row 1 */}
            <g transform="translate(140, 140)">
                <circle cx="15" cy="15" r="12" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="35" y="8" width="100" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="35" y="22" width="60" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
                <circle cx="190" cy="15" r="5" fill="#2DD4BF" />
            </g>

             {/* Contact Row 2 */}
            <g transform="translate(140, 185)">
                <circle cx="15" cy="15" r="12" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="35" y="8" width="120" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="35" y="22" width="80" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
                 <circle cx="190" cy="15" r="5" fill="#3B82F6" />
            </g>
            
             {/* Contact Row 3 */}
            <g transform="translate(140, 230)">
                <circle cx="15" cy="15" r="12" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="35" y="8" width="90" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="35" y="22" width="50" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
                 <circle cx="190" cy="15" r="5" fill="#A5B4FC" />
            </g>
        </g>
        
        {/* Floating elements */}
        <g transform="translate(60, 100)" style={{ filter: 'url(#contacts-shadow)' }}>
             <rect x="0" y="0" width="60" height="40" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M 15 15 H 45 M 15 25 H 35" stroke="#2DD4BF" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        
        <g transform="translate(400, 250)" style={{ filter: 'url(#contacts-shadow)' }}>
             <rect x="0" y="0" width="60" height="40" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M20.5 10H19V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5" transform="translate(10, 5) scale(1.2)" fill="none" stroke="#818CF8" strokeWidth="1.5"/>
        </g>
    </svg>
);

const MarketingBenefitsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از مزایای بازاریابی مانند افزایش تعامل و فروش">
        <defs>
            <linearGradient id="mkt-ben-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="mkt-ben-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#3B82F6" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 100 350 C 150 250, 350 250, 400 350 L 400 50 C 350 150, 150 150, 100 50 Z" className="fill-blue-50 dark:fill-gray-800/50" />
        <g style={{ filter: 'url(#mkt-ben-shadow)' }}>
            <rect x="150" y="80" width="200" height="240" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
            <path d="M 170 280 L 210 240 L 250 260 L 290 220 L 330 240" stroke="url(#mkt-ben-grad)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            
            <g transform="translate(170, 100)">
                <circle cx="15" cy="15" r="15" className="fill-teal-100 dark:fill-teal-900"/>
                <path d="M10 15 L 15 20 L 20 10" stroke="#14B8A6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="40" y="12" width="100" height="6" rx="3" className="fill-gray-300 dark:fill-gray-600" />
            </g>
             <g transform="translate(170, 140)">
                <circle cx="15" cy="15" r="15" className="fill-blue-100 dark:fill-blue-900"/>
                <path d="M10 15 L 20 15 M15 10 L 15 20" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="40" y="12" width="120" height="6" rx="3" className="fill-gray-300 dark:fill-gray-600" />
            </g>
             <g transform="translate(170, 180)">
                <circle cx="15" cy="15" r="15" className="fill-indigo-100 dark:fill-indigo-900"/>
                <path d="M12 18v-3m0-3v3m0 0h3m-3 0H9" stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="40" y="12" width="90" height="6" rx="3" className="fill-gray-300 dark:fill-gray-600" />
            </g>
        </g>
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);
const VipIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V2L8 10h8L12 22v-8h-4z"/><path d="m18 8 2-6-6 4"/></svg>
);
const EngagedIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
);
const ReEngageIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/><path d="m14 4-2-2-2 2"/></svg>
);
const HeartIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
);
const TrendingUpIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const ShieldCheckIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const UserCheckIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
);

const BenefitCard: React.FC<{ Icon: React.FC<{className?: string}>, title: string, description: string }> = ({ Icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{description}</p>
            </div>
        </div>
    </div>
);

const organizationSchema = {
    "@type": "Organization",
    "name": "مگامیل",
    "url": "https://www.megamail.ir",
    "logo": logoSrc,
};

const serviceSchema = {
    "@type": "Service",
    "serviceType": "Email Marketing Platform",
    "provider": {
        "@type": "Organization",
        "name": "مگامیل"
    },
    "name": "مدیریت مخاطبان مگامیل",
    "description": "با ابزارهای قدرتمند مگامیل، مخاطبان خود را مدیریت، دسته‌بندی و هدف‌گیری کنید. لیست‌های ایمیل سالم بسازید و تعامل را افزایش دهید."
};

const ContactsPage: React.FC = () => {
    return (
        <>
            <SEO
                title="مدیریت مخاطبان | مگامیل"
                description="با ابزارهای پیشرفته مگامیل، مخاطبان خود را مدیریت، دسته‌بندی و هدف‌گیری کنید. لیست‌های ایمیل سالم بسازید و تعامل را افزایش دهید."
                schemas={[organizationSchema, serviceSchema]}
            />
            <div className="py-8 space-y-24 sm:space-y-32">
                {/* Hero Section */}
                <section className="py-12 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last">
                            <ContactsHeroIllustration />
                        </div>
                        <div className="text-right space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                <span className="block">مخاطبان خود را بشناسید،</span>
                                <span className="block text-blue-600 dark:text-blue-400 mt-2">و فروش خود را افزایش دهید</span>
                            </h1>
                            <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                               با ابزارهای قدرتمند مدیریت مخاطبان، لیست‌های خود را سازماندهی کنید، سگمنت‌های پویا بسازید و کمپین‌های شخصی‌سازی شده ارسال نمایید.
                            </p>
                            <div className="flex justify-start pt-4">
                                <a
                                    href={CTA_URL}
                                    className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                                >
                                    شروع کنید
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why it matters section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                          قلب تپنده بازاریابی شما
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                           یک لیست مخاطبین سالم و سازماندهی شده، پایه و اساس هر کمپین ایمیلی موفق است. این به معنای ارسال پیام درست، به فرد درست و در زمان درست است.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div><MarketingBenefitsIllustration /></div>
                        <div className="text-right space-y-4">
                            <div className="flex items-start">
                                <CheckIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <div className="mr-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">افزایش نرخ تعامل (Engagement)</h3>
                                    <p className="text-gray-600 dark:text-gray-400">با ارسال محتوای مرتبط به سگمنت‌های دقیق، نرخ باز شدن و کلیک ایمیل‌های خود را به طور چشمگیری افزایش دهید.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <CheckIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <div className="mr-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">شخصی‌سازی و ارتباط عمیق‌تر</h3>
                                    <p className="text-gray-600 dark:text-gray-400">با استفاده از داده‌های مخاطبین، ایمیل‌های خود را شخصی‌سازی کرده و ارتباط قوی‌تری با مشتریان خود برقرار کنید.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <CheckIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <div className="mr-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">بهبود نرخ تحویل (Deliverability)</h3>
                                    <p className="text-gray-600 dark:text-gray-400">با حذف مخاطبین غیرفعال و مدیریت صحیح لیست‌ها، اعتبار فرستنده خود را حفظ کرده و مطمئن شوید ایمیل‌هایتان به اینباکس می‌رسند.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Use Cases Section */}
                <section className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl py-16 sm:py-20 px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                          قدرت سگمنت‌سازی را آزاد کنید
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                            مخاطبان خود را بر اساس رفتارها و ویژگی‌هایشان دسته‌بندی کنید تا پیام‌های هدفمند و موثر ارسال نمایید.
                        </p>
                    </div>
                     <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BenefitCard Icon={VipIcon} title="مشتریان VIP" description="سگمنتی از مشتریان با بیشترین خرید ایجاد کرده و به آن‌ها پیشنهادات انحصاری و دسترسی زودهنگام ارائه دهید." />
                        <BenefitCard Icon={EngagedIcon} title="مخاطبان فعال" description="کاربرانی که در ۳۰ روز گذشته با ایمیل‌های شما تعامل داشته‌اند را جدا کرده و جدیدترین محصولات را به آن‌ها معرفی کنید." />
                        <BenefitCard Icon={ReEngageIcon} title="فعال‌سازی مجدد" description="برای کاربرانی که بیش از ۹۰ روز غیرفعال بوده‌اند، یک کمپین فعال‌سازی مجدد با یک تخفیف ویژه ارسال کنید." />
                    </div>
                </section>

                {/* Features Section */}
                 <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            تمام ابزارهای لازم برای مدیریت مخاطبان
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                            از ورود و سازماندهی گرفته تا تحلیل و بهینه‌سازی، هر آنچه برای ساخت یک لیست مخاطبین قدرتمند نیاز دارید.
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <BenefitCard Icon={UserCheckIcon} title="ورود و مدیریت آسان" description="به سادگی مخاطبین خود را از فایل‌های CSV وارد کنید، فیلدهای سفارشی بسازید و پروفایل هر مخاطب را به صورت کامل مشاهده نمایید." />
                        <BenefitCard Icon={TrendingUpIcon} title="رهگیری فعالیت لحظه‌ای" description="باز شدن ایمیل‌ها، کلیک‌ها و سایر تعاملات مخاطبین را به صورت زنده دنبال کنید تا درک بهتری از رفتار آن‌ها به دست آورید." />
                        <BenefitCard Icon={HeartIcon} title="برچسب‌گذاری و امتیازدهی" description="با برچسب‌گذاری و تخصیص امتیاز به مخاطبین بر اساس فعالیت‌هایشان، وفادارترین مشتریان خود را شناسایی کنید." />
                        <BenefitCard Icon={ShieldCheckIcon} title="مدیریت لیست‌های سرکوب" description="با مدیریت خودکار لغو اشتراک‌ها و ایمیل‌های برگشتی، سلامت لیست خود را حفظ کرده و با قوانین ضد اسپم منطبق بمانید." />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        آماده‌اید تا هوشمندانه بازاریابی کنید؟
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                        همین حالا ثبت نام کنید و اولین لیست مخاطبین خود را به سادگی ایجاد کنید.
                    </p>
                    <div className="mt-8">
                        <a
                            href={CTA_URL}
                            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                        >
                            شروع کنید
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactsPage;
