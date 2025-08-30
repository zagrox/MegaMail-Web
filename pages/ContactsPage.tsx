import React, { useState } from 'react';
import { CTA_URL } from '../constants';

// --- SVG & Icon Components ---

const ContactsHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از مدیریت مخاطبان، لیست‌ها و سگمنت‌ها">
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

        {/* Central Hub (Contacts) */}
        <g style={{ filter: 'url(#contacts-shadow)' }}>
            <circle cx="250" cy="200" r="50" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <path d="M245 195v-10a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v10m-10 10v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" fill="none" stroke="#3B82F6" strokeWidth="3" /><circle cx="250" cy="190" r="4" fill="none" stroke="#3B82F6" strokeWidth="3"/>
        </g>

        {/* Lists */}
        <g transform="translate(100, 80)" style={{ filter: 'url(#contacts-shadow)' }}>
             <rect x="0" y="0" width="80" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M 20 20 H 60 M 20 30 H 50 M 20 40 H 60" stroke="#2DD4BF" strokeWidth="3" fill="none" strokeLinecap="round" />
             <path d="M 170 110 Q 180 140 150 160" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeDasharray="5 5" className="dark:stroke-gray-500" />
        </g>
        
        {/* Segments */}
        <g transform="translate(320, 260)" style={{ filter: 'url(#contacts-shadow)' }}>
             <rect x="0" y="0" width="80" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M20.5 25H19V21a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5" transform="translate(20, 10) scale(1.5)" fill="none" stroke="#818CF8" strokeWidth="1.5"/>
             <path d="M -160 190 Q -130 190 -110 200" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeDasharray="5 5" className="dark:stroke-gray-500" />
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

const ContactsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const ListIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);
const SegmentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 11H19V7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3.5 11H5v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V11z"/></svg>
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

type Tab = 'contacts' | 'lists' | 'segments';

const tabs: { id: Tab; label: string; Icon: React.FC<{className?: string}> }[] = [
    { id: 'contacts', label: 'مخاطبین', Icon: ContactsIcon },
    { id: 'lists', label: 'لیست‌ها', Icon: ListIcon },
    { id: 'segments', label: 'سگمنت‌ها', Icon: SegmentIcon },
];

const useCases = [
    { Icon: VipIcon, title: "مشتریان VIP", description: "مخاطبانی که در لیست «مشتریان» هستند و مجموع خریدشان بیش از ۱٬۰۰۰٬۰۰۰ تومان است." },
    { Icon: EngagedIcon, title: "خوانندگان درگیر", description: "مخاطبانی که حداقل ۵ خبرنامه از ۱۰ خبرنامه اخیر را باز کرده‌اند." },
    { Icon: ReEngageIcon, title: "کمپین بازیابی تعامل", description: "مخاطبانی که بیش از ۶ ماه پیش اضافه شده‌اند اما در ۱۲۰ روز گذشته هیچ ایمیلی را باز نکرده‌اند." },
];

const marketingBenefits = [
    { 
        Icon: HeartIcon, 
        title: "افزایش تعامل و وفاداری", 
        description: "با ارسال محتوای شخصی‌سازی‌شده، به مشتریان نشان می‌دهید که آن‌ها را درک می‌کنید. این امر منجر به نرخ باز شدن بالاتر و وفاداری قوی‌تر به برند می‌شود." 
    },
    { 
        Icon: TrendingUpIcon, 
        title: "نرخ تبدیل بالاتر", 
        description: "ارسال پیشنهادات هدفمند به سگمنت‌های خاص (مانند مشتریان VIP) بسیار مؤثرتر از پیام‌های عمومی است و فروش شما را مستقیماً افزایش می‌دهد." 
    },
    { 
        Icon: ShieldCheckIcon, 
        title: "کاهش هزینه‌ها و بازگشت سرمایه بهتر", 
        description: "از هدر دادن بودجه برای ایمیل‌های نامرتبط خودداری کنید. هدف‌گیری دقیق تضمین می‌کند که بودجه بازاریابی شما به طور مؤثر هزینه شده و بازگشت سرمایه (ROI) را به حداکثر می‌رساند." 
    },
    { 
        Icon: UserCheckIcon, 
        title: "بهبود حفظ مشتری", 
        description: "مشتریان در معرض خطر را با سگمنت‌های بازیابی تعامل شناسایی کرده و با پیشنهادات ویژه آن‌ها را بازگردانید. این کار ریزش مشتری را کاهش داده و ارزش طول عمر مشتری (LTV) را افزایش می‌دهد." 
    },
];

const ContactsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('contacts');

    return (
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
                            <span className="block text-blue-600 dark:text-blue-400 mt-2">سازماندهی و هدف‌گذاری کنید</span>
                        </h1>
                        <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                           مجموعه ابزارهای قدرتمند مدیریت مخاطبان، لیست‌ها و سگمنت‌ها به شما کمک می‌کند تا با هر فرد در زمان مناسب و با پیام درست ارتباط برقرار کنید.
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

            {/* Synergy Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        قدرت هماهنگی: یک اکوسیستم یکپارچه
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        این سه ماژول به عنوان یک مجموعه قدرتمند و یکپارچه طراحی شده‌اند تا به شما امکان مدیریت، سازماندهی و هدف‌گیری مخاطبان با دقت و اتوماسیون فزاینده را بدهند.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4"><span className="text-2xl font-bold text-blue-600 dark:text-blue-400">۱</span></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">مخاطبین: پایه و اساس</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">هر فردی که با شما در ارتباط است در یک پایگاه داده متمرکز و واحد قرار می‌گیرد.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4"><span className="text-2xl font-bold text-blue-600 dark:text-blue-400">۲</span></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">لیست‌ها: سازماندهی اولیه</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">مخاطبان خود را در گروه‌های ثابت و مشخص دسته‌بندی کنید، مانند «مشترکین خبرنامه».</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4"><span className="text-2xl font-bold text-blue-600 dark:text-blue-400">۳</span></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">سگمنت‌ها: هدف‌گیری هوشمند</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">گروه‌های پویا و خودکار بر اساس رفتار و داده‌ها بسازید، مانند «مشتریان وفادار».</p>
                    </div>
                </div>
            </section>

            {/* Features Tabs Section */}
            <section>
                 <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <nav className="-mb-px flex justify-center gap-6" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group inline-flex items-center justify-center gap-2 py-4 px-1 border-b-2 font-medium text-lg transition-colors
                                    ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`
                                }
                                aria-current={activeTab === tab.id ? 'page' : undefined}
                            >
                                <tab.Icon className="w-6 h-6"/>
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="text-right">
                    {activeTab === 'contacts' && (
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">مخاطبین: مرکز فرماندهی شما</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">این ماژول لایه بنیادی سیستم مدیریت مخاطبان شماست و به عنوان منبع اصلی حقیقت عمل می‌کند - یک پایگاه داده اصلی که شامل هر فردی است که شما اجازه ایمیل زدن به او را دارید.</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">پروفایل یکپارچه با نمای ۳۶۰ درجه</span></li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">تاریخچه کامل فعالیت و تعامل</span></li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">ورود و خروج آسان با فایل CSV</span></li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">مدیریت جزئی (افزودن، ویرایش، حذف)</span></li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">عملیات گروهی برای صرفه‌جویی در زمان</span></li>
                                <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">جستجو و فیلترینگ پیشرفته</span></li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'lists' && (
                         <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">لیست‌های ایمیل: سازماندهی ساده و ایستا</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">لیست‌ها سرراست‌ترین راه برای گروه‌بندی مخاطبین شما هستند. یک لیست مجموعه‌ای ایستا از مخاطبین است که شما به صورت دستی آن را تشکیل می‌دهید و برای دسته‌بندی‌های گسترده و مشخص ایده‌آل است.</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">کنترل کامل و دستی بر اعضای لیست</span></li>
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">روش‌های چندگانه گروه‌بندی (تکی، گروهی، CSV)</span></li>
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">مدیریت مستقل (حذف لیست، مخاطبین را حذف نمی‌کند)</span></li>
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">پایه‌ای برای سگمنت‌سازی پیشرفته</span></li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'segments' && (
                         <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">سگمنت‌ها: هوش پویا و مبتنی بر قوانین</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">سگمنت‌ها قدرتمندترین ابزار مدیریت مخاطب در پلتفرم ما هستند. سگمنت یک گروه پویا است که به طور خودکار بر اساس مجموعه‌ای از قوانین و شرایطی که شما تعریف می‌کنید، پر می‌شود. آن‌ها اساساً «لیست‌های هوشمند» هستند.</p>
                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">قانون‌ساز بصری و ساده</span></li>
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">معیارهای غنی هدف‌گیری (مشخصات، رفتار، عضویت)</span></li>
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">به‌روزرسانی خودکار و لحظه‌ای</span></li>
                               <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">بدون نیاز به نگهداری دستی</span></li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>

             {/* Marketing Benefits Section */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-last">
                        <MarketingBenefitsIllustration />
                    </div>
                    <div className="text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">چگونه مگامیل، مخاطبان شما را به درآمد تبدیل می‌کند؟</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            مدیریت مؤثر مخاطبان فقط سازماندهی اطلاعات نیست؛ بلکه سنگ بنای یک استراتژی بازاریابی موفق است که داده‌های خام را به نتایج قابل اندازه‌گیری تبدیل می‌کند.
                        </p>
                        <ul className="mt-8 space-y-6">
                            {marketingBenefits.map(item => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                        <item.Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        کاربردهای قدرتمند برای هدف‌گیری فوق دقیق
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        با ترکیب لیست‌ها و سگمنت‌ها، می‌توانید به سطح بی‌نظیری از شخصی‌سازی و دقت در بازاریابی خود دست یابید.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map(item => (
                        <BenefitCard key={item.title} Icon={item.Icon} title={item.title} description={item.description} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    آماده‌اید تا مخاطبان خود را مدیریت کنید؟
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                    همین حالا ثبت نام کنید و اولین کمپین هدفمند خود را با ابزارهای پیشرفته مدیریت مخاطب ما ارسال کنید.
                </p>
                <div className="mt-8">
                    <a
                        href={CTA_URL}
                        className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                    >
                        شروع مدیریت مخاطبان
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactsPage;