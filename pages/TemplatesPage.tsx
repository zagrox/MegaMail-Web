import React from 'react';
import { CTA_URL } from '../constants';

// --- SVG & Icon Components ---

const TemplatesHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ویرایشگر ایمیل و قالب‌ها">
        <defs>
            <linearGradient id="tpl-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>
            <filter id="tpl-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#3B82F6" floodOpacity="0.15"/>
            </filter>
        </defs>
        
        {/* Background shape */}
        <path d="M 50,200 C 50,100 150,50 250,50 S 450,100 450,200 S 350,350 250,350 S 50,300 50,200 Z" className="fill-blue-50 dark:fill-gray-800/50" />

        {/* Central UI (Email Builder) */}
        <g style={{ filter: 'url(#tpl-shadow)' }}>
            <rect x="150" y="80" width="260" height="240" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            {/* Toolbar */}
            <rect x="160" y="90" width="50" height="220" rx="10" className="fill-gray-100 dark:fill-gray-800" />
            <rect x="170" y="100" width="30" height="20" rx="5" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="170" y="130" width="30" height="20" rx="5" className="fill-gray-300 dark:fill-gray-600" />
            <rect x="170" y="160" width="30" height="20" rx="5" className="fill-gray-300 dark:fill-gray-600" />
            {/* Canvas */}
            <rect x="225" y="100" width="170" height="80" rx="5" fill="url(#tpl-hero-gradient)" opacity="0.5"/>
            <rect x="225" y="190" width="170" height="10" rx="5" className="fill-gray-200 dark:fill-gray-500" />
            <rect x="225" y="210" width="130" height="10" rx="5" className="fill-gray-200 dark:fill-gray-500" />
        </g>

        {/* Floating elements */}
        <g transform="translate(60, 100)" style={{ filter: 'url(#tpl-shadow)' }}>
             <rect x="0" y="0" width="60" height="40" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M 15 15 L 25 25 M 25 15 L 15 25" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
             <rect x="35" y="18" width="10" height="10" rx="2" fill="#3B82F6" opacity="0.6"/>
        </g>
        
        <g transform="translate(400, 250)" style={{ filter: 'url(#tpl-shadow)' }}>
             <rect x="0" y="0" width="60" height="40" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M 15 15 H 45 M 15 25 H 35" stroke="#2DD4BF" strokeWidth="3" fill="none" strokeLinecap="round" />
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

// --- New Builder Feature Icons & Illustrations ---

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

// Builder Feature Icons
const LayoutIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>
);
const ContentIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/><path d="M12 11h6M12 15h6"/></svg>
);
const StylingIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/><path d="M12 22V12h10c0-5.52-4.48-10-10-10S2 6.48 2 12h10v10z"/></svg>
);
const WorkflowIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);

// Builder Feature Illustrations
const LayoutIllustration: React.FC = () => (
    <svg viewBox="0 0 200 200" role="img" aria-label="تصویر انتزاعی از چیدمان و ساختار ایمیل"><g transform="translate(10,10)"><rect x="10" y="10" width="160" height="180" rx="10" fill="none" stroke="#E5E7EB" strokeWidth="2" className="dark:stroke-gray-700"/><rect x="10" y="10" width="160" height="30" rx="5" fill="#F3F4F6" className="dark:fill-gray-800"/><rect x="25" y="55" width="45" height="120" rx="5" fill="#3B82F6" opacity="0.2"/><rect x="80" y="55" width="75" height="60" rx="5" fill="#3B82F6" opacity="0.4"/><rect x="80" y="125" width="75" height="50" rx="5" fill="#3B82F6" opacity="0.4"/><g transform="translate(160, 40) rotate(90)"><path d="M5 9l-3 3 3 3M2 12h10" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g></g></svg>
);
const ContentIllustration: React.FC = () => (
    <svg viewBox="0 0 200 200" role="img" aria-label="تصویر انتزاعی از محتوا و رسانه ایمیل"><g transform="translate(10,10)"><rect x="10" y="10" width="160" height="180" rx="10" fill="#fff" stroke="#E5E7EB" strokeWidth="2" className="dark:fill-gray-800 dark:stroke-gray-700"/><rect x="25" y="25" width="130" height="60" rx="5" fill="#A5B4FC" className="dark:fill-indigo-500"/><path d="M 40 70 L 60 50 L 80 65 L 110 45 L 140 70" fill="none" stroke="#fff" strokeWidth="3" /><rect x="25" y="100" width="130" height="8" rx="3" fill="#D1D5DB" className="dark:fill-gray-600"/><rect x="25" y="115" width="100" height="8" rx="3" fill="#D1D5DB" className="dark:fill-gray-600"/><rect x="60" y="140" width="60" height="25" rx="12.5" fill="#3B82F6"/></g></svg>
);
const StylingIllustration: React.FC = () => (
    <svg viewBox="0 0 200 200" role="img" aria-label="تصویر انتزاعی از استایل‌دهی و سفارشی‌سازی ایمیل"><g transform="translate(10,10)"><rect x="10" y="10" width="120" height="180" rx="10" fill="#fff" stroke="#E5E7EB" strokeWidth="2" className="dark:fill-gray-800 dark:stroke-gray-700"/><rect x="25" y="25" width="90" height="8" rx="3" fill="#3B82F6" /><rect x="25" y="45" width="70" height="8" rx="3" fill="#D1D5DB" className="dark:fill-gray-600"/><rect x="140" y="30" width="50" height="140" rx="8" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" className="dark:fill-gray-700 dark:stroke-gray-600"/><circle cx="165" cy="55" r="8" fill="#EF4444"/><circle cx="165" cy="80" r="8" fill="#3B82F6"/><circle cx="165" cy="105" r="8" fill="#10B981"/><rect x="150" y="130" width="30" height="6" rx="3" fill="#9CA3AF" className="dark:fill-gray-500"/><path d="M120 49 L 140 49" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2 2"/></g></svg>
);
const WorkflowIllustration: React.FC = () => (
    <svg viewBox="0 0 200 200" role="img" aria-label="تصویر انتزاعی از گردش کار و ابزارهای ایمیل‌ساز"><g transform="translate(10,10)"><path d="M25 90 A 65 65 0 1 1 155 90" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4 4"/><circle cx="90" cy="90" r="30" fill="#3B82F6" /><path d="M85 85 L 95 90 L 85 95 Z" fill="#fff" /><g transform="translate(10, 10)"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" transform="scale(1.2)" fill="#A5B4FC" className="dark:fill-indigo-500"/></g><g transform="translate(140, 10)"><line x1="22" y1="2" x2="11" y2="13" transform="scale(1.2)" stroke="#A5B4FC" strokeWidth="1.5" className="dark:stroke-indigo-500"/><polygon points="22 2 15 22 11 13 2 9 22 2" transform="scale(1.2)" fill="#A5B4FC" className="dark:fill-indigo-500"/></g><g transform="translate(75, 140)"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" transform="scale(1.2)" fill="#A5B4FC" className="dark:fill-indigo-500"/></g></g></svg>
);

// Templates Icons
const SaveIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
);
const CampaignFromTemplateIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="23" y1="11" x2="17" y2="17"/><polyline points="23 17 23 11 17 11"/></svg>
);
const ManagementIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><circle cx="12" cy="12" r="3"/><line x1="14.12" y1="14.12" x2="16" y2="16"/></svg>
);
const ConsistencyIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><path d="M16 2v4h4"/><path d="M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M12 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M16 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
);

const builderSections = [
    {
        Icon: LayoutIcon,
        Illustration: LayoutIllustration,
        title: "چیدمان و ساختار",
        description: "با ابزارهای بصری و منعطف، ساختار ایمیل‌های خود را به دقت طراحی کنید و از نمایش بی‌نقص آن در تمام دستگاه‌ها اطمینان حاصل کنید.",
        features: [
            "رابط کاربری کشیدن و رها کردن برای ساخت بصری ایمیل",
            "پیش‌نمایش زنده و همزمان برای دسکتاپ و موبایل",
            "چیدمان‌های چند ستونی با نسبت‌های عرض قابل تنظیم",
            "قابلیت کشیدن بلوک‌ها برای پوشش تمام عرض محتوا",
            "جابجایی و مرتب‌سازی آسان بلوک‌های محتوا",
            "کنترل دقیق فاصله‌گذاری عمودی بین المان‌ها",
            "افزودن جداکننده‌های افقی برای تقسیم‌بندی بصری"
        ]
    },
    {
        Icon: ContentIcon,
        Illustration: ContentIllustration,
        title: "محتوا و رسانه",
        description: "مجموعه کاملی از بلوک‌های محتوایی برای پوشش تمام نیازهای شما، از متن و تصویر گرفته تا دکمه‌های فراخوان و محصولات.",
        features: [
            "ویرایشگر متن غنی با گزینه‌های کامل استایل‌دهی",
            "آپلود مستقیم تصاویر از کامپیوتر شما",
            "افزودن تصویر از طریق URL بدون نیاز به آپلود",
            "تبدیل هر تصویر به یک لینک قابل کلیک",
            "دکمه‌های فراخوان (CTA) با قابلیت سفارشی‌سازی کامل",
            "بلوک یکپارچه برای افزودن سریع آیکون‌های اجتماعی",
            "سفارشی‌سازی آیکون‌ها و لینک‌های شبکه‌های اجتماعی",
            "بلوک آماده و تخصصی برای نمایش محصولات فروشگاهی"
        ]
    },
    {
        Icon: StylingIcon,
        Illustration: StylingIllustration,
        title: "استایل‌دهی و سفارشی‌سازی",
        description: "با کنترل کامل بر روی استایل‌های سراسری و جزئی، ایمیل‌هایی طراحی کنید که کاملاً با هویت بصری برند شما هماهنگ باشند.",
        features: [
            "کنترل رنگ پس‌زمینه کلی ایمیل و ناحیه محتوای اصلی",
            "تعریف فونت و رنگ پیش‌فرض برای تمام متون",
            "تنظیم رنگ پس‌زمینه منحصر به فرد برای هر بلوک",
            "تنظیم دقیق پدینگ (فاصله داخلی) برای هر المان",
            "افزودن متن جایگزین (Alt Text) برای دسترسی‌پذیری",
            "ترازبندی افقی تصاویر (چپ، مرکز، راست)",
            "پنل تنظیمات هوشمند که فقط گزینه‌های مرتبط را نمایش می‌دهد"
        ]
    },
    {
        Icon: WorkflowIcon,
        Illustration: WorkflowIllustration,
        title: "گردش کار و ابزارها",
        description: "ابزارهایی که فرآیند طراحی را سرعت می‌بخشند، از اشتباهات جلوگیری می‌کنند و به شما کمک می‌کنند تا کمپین‌ها را سریع‌تر اجرا کنید.",
        features: [
            "ذخیره هر طرح به عنوان یک قالب برای استفاده مجدد",
            "تکثیر سریع هر بلوک محتوایی با یک کلیک",
            "ارسال ایمیل آزمایشی به هر آدرس برای بررسی نهایی",
            "مشاهده و خروجی گرفتن از کد HTML تمیز و واکنش‌گرا",
            "قابلیت بازگشت به عقب و جلو (Undo/Redo) برای اصلاح اشتباهات",
            "نوار ابزار سازمان‌یافته برای دسترسی سریع به تمام بلوک‌ها",
            "ویرایش مستقیم و سریع متن‌ها بر روی پیش‌نمایش ایمیل",
            "مشاهده پیش‌نمایش تمام‌صفحه و بدون مزاحمت"
        ]
    },
];

const templatesFeatures = [
    { Icon: SaveIcon, title: "ذخیره و استفاده مجدد از هر طرح", description: "هر ایمیلی که می‌سازید را به عنوان یک قالب ذخیره کنید تا کتابخانه‌ای از طرح‌های آماده برای خود بسازید." },
    { Icon: CampaignFromTemplateIcon, title: "ایجاد کمپین از روی قالب‌ها", description: "به جای شروع از صفر، یک قالب را انتخاب کنید، ویرایش‌های جزئی انجام دهید و در زمان خود صرفه‌جویی کنید." },
    { Icon: ManagementIcon, title: "مدیریت متمرکز", description: "در یک داشبورد سازمان‌یافته، قالب‌های خود را به سرعت جستجو، پیش‌نمایش، ویرایش یا حذف کنید." },
    { Icon: ConsistencyIcon, title: "حفظ ثبات برند", description: "با استفاده از قالب‌ها، اطمینان حاصل کنید که تمام ایمیل‌های شما از دستورالعمل‌های برندتان پیروی می‌کنند." },
];

const stepsData = [
    { number: 1, title: "انتخاب یا شروع", description: "از گالری قالب‌های آماده انتخاب کنید یا یک بوم خالی را باز کنید." },
    { number: 2, title: "طراحی بصری", description: "با ویرایشگر کشیدن و رها کردن، محتوای خود را به راحتی بچینید و استایل دهید." },
    { number: 3, title: "ذخیره و مدیریت", description: "طرح خود را به عنوان یک قالب در کتابخانه شخصی خود ذخیره کنید." },
    { number: 4, title: "ارسال کمپین", description: "در زمان ایجاد کمپین، قالب خود را انتخاب کرده و برای مخاطبین ارسال کنید." },
];

const TemplatesPage: React.FC = () => {
  return (
    <div className="py-8 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-last">
                    <TemplatesHeroIllustration />
                </div>
                <div className="text-right space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        <span className="block">طراحی ایمیل‌های خیره‌کننده،</span>
                        <span className="block text-blue-600 dark:text-blue-400 mt-2">بدون نیاز به کدنویسی</span>
                    </h1>
                    <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                        با ویرایشگر بصری و قدرتمند ما، ایمیل‌های حرفه‌ای و واکنش‌گرا بسازید، آن‌ها را به عنوان قالب ذخیره کنید و کمپین‌های خود را در چند دقیقه اجرا نمایید.
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

        {/* How It Works Section */}
        <section>
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    گردش کار ساده و کارآمد
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    فرآیند ساخت و استفاده از قالب‌ها در چهار مرحله آسان خلاصه می‌شود.
                </p>
            </div>
            <div className="relative">
                {/* The connecting line for desktop view. It's an absolute element that spans the width and sits behind the step numbers. */}
                <div 
                    className="hidden md:block absolute top-8 left-0 w-full h-px bg-transparent"
                    aria-hidden="true"
                >
                    <div className="w-full h-full border-t-2 border-dashed border-gray-300 dark:border-gray-600"></div>
                </div>

                {/* Using a grid to layout the steps. On mobile, they stack. On desktop, they form a 4-column grid. */}
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
                    {stepsData.map(step => (
                        <div key={step.number} className="text-center">
                            {/* The number circle. It has a background that matches the page's BG to "cut through" the connecting line. */}
                            <div className="relative inline-block mb-6">
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl border-8 border-gray-50 dark:border-gray-900">
                                   {step.number}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Builder Features Sections */}
        <section>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    بوم نقاشی خلاق شما: ویرایشگر ایمیل
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    یک ابزار بصری که به شما قدرت می‌دهد تا ایمیل‌های زیبا و حرفه‌ای را بدون نوشتن حتی یک خط کد طراحی کنید. تمام ویژگی‌های مورد نیاز شما برای کنترل کامل بر روی هر جنبه از طراحی در اختیار شماست.
                </p>
            </div>
            <div className="space-y-20 md:space-y-28">
                {builderSections.map((category, index) => (
                    <div key={category.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={`lg:order-${index % 2 === 0 ? 'first' : 'last'}`}>
                            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-xl p-8">
                                <category.Illustration />
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center gap-4 mb-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                    <category.Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-400">{category.description}</p>
                            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
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

         {/* Templates Features Section */}
        <section>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    کتابخانه هوشمند شما: مدیریت قالب‌ها
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    قالب‌ها مرکز مدیریت و استفاده مجدد از طرح‌های شما هستند که برای افزایش سرعت و حفظ ثبات برند طراحی شده‌اند.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {templatesFeatures.map(feature => (
                    <BenefitCard key={feature.title} Icon={feature.Icon} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>

        {/* Image Section */}
        <section>
             <img 
                src="https://crm.mailzila.com/assets/f8747414-a3eb-4f70-8403-e3b83e2cb4a8"
                alt="نمایی از ویرایشگر ایمیل مگامیل"
                className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 mx-auto"
            />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                خلاقیت خود را آزاد کنید
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                همین حالا ثبت نام کنید و اولین کمپین خیره‌کننده خود را با ویرایشگر قدرتمند مگامیل بسازید.
            </p>
            <div className="mt-8">
                <a
                    href={`${CTA_URL}/`}
                    className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                >
                    شروع طراحی رایگان
                </a>
            </div>
        </section>
    </div>
  );
};

export default TemplatesPage;