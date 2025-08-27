import React from 'react';
import { CTA_URL } from '../constants';

// --- SVG & Icon Components ---

const ModulesHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ماژول‌های قابل انتخاب">
        <defs>
            <linearGradient id="modules-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#007BFF" />
            </linearGradient>
            <linearGradient id="modules-grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
             <linearGradient id="modules-grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <filter id="modules-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#007BFF" floodOpacity="0.15"/>
            </filter>
        </defs>
        
        {/* Background shape */}
        <path d="M 50,200 C 50,100 150,50 250,50 S 450,100 450,200 S 350,350 250,350 S 50,300 50,200 Z" className="fill-blue-50 dark:fill-gray-800/50" />

        {/* Central Hub */}
        <g style={{ filter: 'url(#modules-shadow)' }}>
            <rect x="175" y="125" width="150" height="150" rx="30" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <circle cx="250" cy="200" r="20" fill="url(#modules-hero-gradient)" />
        </g>

        {/* Connecting Lines */}
        <path d="M 150 100 Q 200 150 225 180" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeDasharray="5 5" className="dark:stroke-gray-500" />
        <path d="M 350 100 Q 300 150 275 180" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeDasharray="5 5" className="dark:stroke-gray-500" />
        <path d="M 150 300 Q 200 250 225 220" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeDasharray="5 5" className="dark:stroke-gray-500" />
        <path d="M 350 300 Q 300 250 275 220" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeDasharray="5 5" className="dark:stroke-gray-500" />

        {/* Modules (Puzzle Pieces) */}
        <g transform="translate(100, 50)" style={{ filter: 'url(#modules-shadow)' }}>
            <path d="M 0 10 C 0 4.477 4.477 0 10 0 H 40 C 45.523 0 50 4.477 50 10 V 20 H 60 V 30 H 50 V 40 C 50 45.523 45.523 50 40 50 H 10 C 4.477 50 0 45.523 0 40 V 10 Z" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <circle cx="25" cy="25" r="8" fill="url(#modules-grad-teal)" />
        </g>
        
        <g transform="translate(350, 50)" style={{ filter: 'url(#modules-shadow)' }}>
            <path d="M 10 0 H 40 C 45.523 0 50 4.477 50 10 V 40 C 50 45.523 45.523 50 40 50 H 10 C 4.477 50 0 45.523 0 40 V 30 H -10 V 20 H 0 V 10 C 0 4.477 4.477 0 10 0 Z" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <rect x="18" y="18" width="14" height="14" rx="3" fill="url(#modules-grad-indigo)" />
        </g>

        <g transform="translate(100, 250)" style={{ filter: 'url(#modules-shadow)' }}>
            <path d="M 0 10 C 0 4.477 4.477 0 10 0 H 20 V -10 H 30 V 0 H 40 C 45.523 0 50 4.477 50 10 V 40 C 50 45.523 45.523 50 40 50 H 10 C 4.477 50 0 45.523 0 40 V 10 Z" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <path d="M 20 20 L 30 20 L 25 30 Z" fill="url(#modules-hero-gradient)" />
        </g>
        
        <g transform="translate(350, 250)" style={{ filter: 'url(#modules-shadow)' }}>
            <path d="M 10 0 H 40 C 45.523 0 50 4.477 50 10 V 40 C 50 45.523 45.523 50 40 50 H 30 V 60 H 20 V 50 H 10 C 4.477 50 0 45.523 0 40 V 10 C 0 4.477 4.477 0 10 0 Z" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <line x1="18" y1="18" x2="32" y2="32" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
             <line x1="32" y1="18" x2="18" y2="32" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        </g>
    </svg>
);


const StepIcon: React.FC<{ number: number, children: React.ReactNode }> = ({ number, children }) => (
    <div className="flex items-center">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
            {number}
        </div>
        <div className="ml-4 rtl:mr-4 rtl:ml-0">
            {children}
        </div>
    </div>
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

// Icons
const FlexibilityIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/><path d="M4 12v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"/><path d="M12 18v4"/><path d="M12 2v4"/></svg>
);
const CostIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
);
const TransparencyIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const InstantIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const ScalabilityIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
);
const DiscoveryIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.09 14.37a5 5 0 0 1-6.18 0M1.05 14.37a10 10 0 0 1 1.95-3.03M21 11.34a10 10 0 0 1-1.95 3.03"/><path d="M8 14.37V9a4 4 0 0 1 8 0v5.37"/><path d="M12 19.37V14.37"/></svg>
);

// --- MOVED ICONS & DATA ---
const ListIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);
const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);
const ContactsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
  </svg>
);
const ReportsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
const TemplatesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"></path><rect x="1" y="3" width="22" height="5" rx="2" ry="2"></rect>
  </svg>
);
const CampaignsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);
const MediaManagerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);
const SegmentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 11H19V7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/>
    <path d="M3.5 11H5v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V11z"/>
  </svg>
);
const SmtpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line><line x1="8" y1="16" x2="13" y2="16"></line>
  </svg>
);
const DomainsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const EmailBuilderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);
const AIAssistantIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4m-2 8v4m-2-2h4m5-12l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const features = [
    { title: 'گزارشات', description: 'عملکرد کمپین‌های خود را با گزارش‌های دقیق و آمارهای لحظه‌ای مانند نرخ باز شدن، کلیک و لغو اشتراک دنبال کنید.', Icon: ReportsIcon },
    { title: 'مخاطبین', description: 'وضعیت هر مخاطب (فعال، غیرفعال، لغو اشتراک) را مشاهده و مدیریت کنید تا لیست‌های سالم و کارآمد داشته باشید.', Icon: ContactsIcon },
    { title: 'ارسال ایمیل', description: 'کمپین‌های خود را فوراً ارسال کنید، برای زمان مشخصی در آینده زمان‌بندی نمایید یا به عنوان پیش‌نویس ذخیره کنید.', Icon: SendIcon },
    { title: 'لیست ایمیل', description: 'مخاطبین خود را به سادگی در لیست‌های مختلف دسته‌بندی کنید تا کمپین‌های هدفمند ارسال نمایید و نرخ تعامل را افزایش دهید.', Icon: ListIcon },
    { title: 'سگمنت', description: 'بر اساس رفتار، مشخصات دموگرافیک یا تاریخچه خرید، سگمنت‌های پویا ایجاد کرده و پیام‌های شخصی‌سازی شده ارسال کنید.', Icon: SegmentIcon },
    { title: 'مدیریت رسانه', description: 'تصاویر و فایل‌های مورد نیاز برای کمپین‌های خود را در یک مکان مرکزی آپلود، سازماندهی و مدیریت نمایید.', Icon: MediaManagerIcon },
    { title: 'کمپین‌ها', description: 'به سادگی کمپین‌های A/B تست ایجاد کرده، لیست‌ها و سگمنت‌های هدف را انتخاب و عملکرد آن‌ها را دنبال کنید.', Icon: CampaignsIcon },
    { title: 'قالب‌ها', description: 'قالب‌های سفارشی خود را بسازید و آن‌ها را برای استفاده مجدد در کمپین‌های آینده ذخیره کرده و به راحتی مدیریت کنید.', Icon: TemplatesIcon },
    { title: 'ایمیل ساز', description: 'بدون نیاز به دانش کدنویسی و با ویرایشگر بصری ما، ایمیل‌های حرفه‌ای و کاملاً واکنش‌گرا برای موبایل و دسکتاپ طراحی کنید.', Icon: EmailBuilderIcon },
    { title: 'دامنه‌ها', description: 'با افزودن و تأیید دامنه‌های ارسال خود، اعتبار برندتان را افزایش داده و نرخ تحویل ایمیل‌ها را بهبود ببخشید.', Icon: DomainsIcon },
    { title: 'اتصال خارجی', description: 'از طریق SMTP اختصاصی ما به راحتی به سرویس‌های دیگر متصل شوید و از تحویل‌پذیری بالای ایمیل‌ها اطمینان حاصل کنید.', Icon: SmtpIcon },
    { title: 'دستیار هوش مصنوعی', description: 'با کمک هوش مصنوعی، موضوع و محتوای جذاب برای ایمیل‌های خود بنویسید و بهترین زمان ارسال را پیدا کنید.', Icon: AIAssistantIcon },
];

const ModulesPage: React.FC = () => {
    return (
        <div className="py-8 space-y-24 sm:space-y-32">
            {/* Hero Section */}
            <section className="py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <ModulesHeroIllustration />
                    </div>
                    <div className="text-right space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            <span className="block">ابزار خود را بسازید</span>
                            <span className="block text-blue-600 dark:text-blue-400 mt-2">فقط برای آنچه نیاز دارید هزینه کنید</span>
                        </h1>
                        <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                            با بازارچه ماژول‌های مگامیل، شما کنترل کامل را در دست دارید. فقط ویژگی‌هایی را که واقعاً به آن‌ها نیاز دارید با استفاده از اعتبار خود فعال کنید.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        چگونه کار می‌کند؟
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        فعال‌سازی ماژول‌ها ساده، شفاف و فوری است.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                     <StepIcon number={1}>
                        <h3 className="text-lg font-semibold">کشف ماژول‌ها</h3>
                        <p className="text-gray-600 dark:text-gray-400">در بخش «حساب کاربری» به تب «ماژول‌ها» بروید و کاتالوگ ابزارها را مشاهده کنید.</p>
                     </StepIcon>
                     <StepIcon number={2}>
                        <h3 className="text-lg font-semibold">بررسی گزینه‌ها</h3>
                        <p className="text-gray-600 dark:text-gray-400">هر ماژول دارای توضیحات، قیمت (به اعتبار) و وضعیت فعلی (قفل/باز) است.</p>
                     </StepIcon>
                     <StepIcon number={3}>
                        <h3 className="text-lg font-semibold">باز کردن با یک کلیک</h3>
                        <p className="text-gray-600 dark:text-gray-400">روی دکمه «باز کردن» کلیک کنید. پس از تایید، اعتبار از حساب شما کسر و ماژول فعال می‌شود.</p>
                     </StepIcon>
                     <StepIcon number={4}>
                        <h3 className="text-lg font-semibold">شارژ آسان اعتبار</h3>
                        <p className="text-gray-600 dark:text-gray-400">اگر اعتبار کافی ندارید، به راحتی به صفحه خرید اعتبار هدایت می‌شوید تا حساب خود را شارژ کنید.</p>
                     </StepIcon>
                     <StepIcon number={5}>
                        <h3 className="text-lg font-semibold">دسترسی فوری</h3>
                        <p className="text-gray-600 dark:text-gray-400">پس از فعال‌سازی، ماژول بلافاصله قابل استفاده است. بدون هیچ‌گونه تاخیر!</p>
                     </StepIcon>
                </div>
            </section>

             {/* Key Benefits Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        مزایای کلیدی برای شما
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        این سیستم جدید برای ارائه حداکثر ارزش و کنترل به شما طراحی شده است.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BenefitCard Icon={FlexibilityIcon} title="انعطاف‌پذیری و کنترل کامل" description="یک جعبه ابزار سفارشی بسازید که کاملاً با گردش کار شما مطابقت دارد و ویژگی‌های پیشرفته را فقط در صورت نیاز اضافه کنید." />
                    <BenefitCard Icon={CostIcon} title="مقرون‌به‌صرفه" description="با مدل پرداخت به ازای مصرف، شما فقط برای عملکردی که استفاده می‌کنید هزینه پرداخت می‌کنید و از هزینه‌های اضافی جلوگیری می‌کنید." />
                    <BenefitCard Icon={TransparencyIcon} title="شفافیت کامل" description="قبل از هرگونه تعهد، هزینه دقیق را به اعتبار و موجودی خود مشاهده کنید. هیچ هزینه پنهان یا غافلگیری وجود ندارد." />
                    <BenefitCard Icon={InstantIcon} title="دسترسی آنی" description="هیچ دوره انتظاری وجود ندارد. هنگامی که به ابزار جدیدی نیاز دارید، می‌توانید در چند ثانیه آن را باز کرده و استفاده کنید." />
                    <BenefitCard Icon={ScalabilityIcon} title="مقیاس‌پذیری" description="با رشد کسب‌وکارتان، مگامیل نیز رشد می‌کند. با ویژگی‌های اصلی شروع کنید و ماژول‌های قدرتمندتر را به راحتی اضافه کنید." />
                    <BenefitCard Icon={DiscoveryIcon} title="کشف آسان" description="بازارچه، کشف ویژگی‌های جدید و قدرتمندی را که ممکن است از وجود آن‌ها بی‌خبر باشید، آسان می‌کند." />
                </div>
            </section>
            
            {/* Explore Tools Section - MOVED FROM FEATURES PAGE */}
            <section id="explore-tools">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        برخی از ماژول‌های ما
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        با اعتبار خود می‌توانید ماژول‌های زیر و بسیاری دیگر را فعال کنید.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div key={feature.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
                                </div>
                                <feature.Icon className="w-10 h-10 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    قدرت در دستان شماست
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                    همین حالا ثبت نام کنید و پلتفرم ایمیل مارکتینگ خود را دقیقاً مطابق با نیازهایتان شکل دهید.
                </p>
                <div className="mt-8">
                    <a
                        href={`${CTA_URL}/`}
                        className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                    >
                        شروع کنید و ماژول‌ها را کاوش کنید
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ModulesPage;