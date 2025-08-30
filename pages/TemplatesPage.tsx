
import React from 'react';
import { CTA_URL } from '../constants';

// --- SVG & Icon Components ---

const TemplatesHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ویرایشگر ایمیل و قالب‌ها">
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
const ReuseIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
);
const GalleryIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 12H3"/><path d="M12 3v18"/></svg>
);
const ResponsiveIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
);
const CodeIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

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
                            <span className="block">ایمیل‌های حرفه‌ای بسازید،</span>
                            <span className="block text-blue-600 dark:text-blue-400 mt-2">بدون نیاز به کدنویسی</span>
                        </h1>
                        <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                           با ویرایشگر کشیدن و رها کردن ما، ایمیل‌های زیبا و کاملاً واکنش‌گرا طراحی کنید. از قالب‌های آماده استفاده کرده یا قالب‌های خود را برای استفاده مجدد ذخیره نمایید.
                        </p>
                        <div className="flex justify-start pt-4">
                            <a
                                href={CTA_URL}
                                className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                            >
                                ویرایشگر را امتحان کنید
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      سریع و آسان ایمیل بسازید
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        تنها در سه مرحله ساده، از ایده تا یک ایمیل حرفه‌ای و آماده ارسال پیش بروید.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
                    <div className="flex flex-col items-center text-center">
                         <StepIcon number={1}>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">انتخاب کنید</h3>
                        </StepIcon>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">از گالری قالب‌های آماده یکی را انتخاب کنید، از قالب‌های ذخیره شده خود استفاده نمایید یا از یک صفحه خالی شروع کنید.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                         <StepIcon number={2}>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">طراحی کنید</h3>
                        </StepIcon>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">با ویرایشگر بصری، محتوای خود را اضافه کرده، استایل‌ها را سفارشی کنید و پیش‌نمایش زنده را در موبایل و دسکتاپ ببینید.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                         <StepIcon number={3}>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">ذخیره و ارسال کنید</h3>
                        </StepIcon>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">طرح خود را به عنوان یک قالب برای استفاده‌های بعدی ذخیره کرده و آن را در کمپین‌های ایمیلی خود به کار ببرید.</p>
                    </div>
                </div>
            </section>
            
            {/* Builder Features Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        یک ویرایشگر قدرتمند با امکانات کامل
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        تمام ابزارهای لازم برای طراحی ایمیل‌های جذاب و مؤثر، از ساختار و محتوا گرفته تا استایل‌دهی و گردش کار، در اختیار شماست.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     {/* Feature 1: Layout */}
                    <div className="lg:order-last flex justify-center"><LayoutIllustration /></div>
                    <div className="text-right">
                        <div className="inline-flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center"><LayoutIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" /></div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">چیدمان و ساختار</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">ساختار چند ستونه و کاملاً واکنش‌گرا</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">بلوک‌های ساختاری از پیش تعریف شده</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">کنترل کامل بر پدینگ، مارجین و حاشیه‌ها</span></li>
                        </ul>
                    </div>
                     {/* Feature 2: Content */}
                    <div className="flex justify-center"><ContentIllustration /></div>
                    <div className="text-right">
                         <div className="inline-flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center"><ContentIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" /></div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">محتوا و رسانه</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">بلوک‌های متن، تصویر، دکمه، جداکننده و HTML سفارشی</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">پشتیبانی از محتوای پویا با Merge Tags</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">مدیریت رسانه یکپارچه برای تصاویر</span></li>
                        </ul>
                    </div>
                     {/* Feature 3: Styling */}
                     <div className="lg:order-last flex justify-center"><StylingIllustration /></div>
                    <div className="text-right">
                         <div className="inline-flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center"><StylingIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" /></div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">استایل‌دهی و سفارشی‌سازی</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">انتخاب فونت، رنگ، اندازه و ترازبندی متن</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">استایل‌های سراسری برای هماهنگی برند</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">کنترل کامل بر رنگ پس‌زمینه و حاشیه‌ها</span></li>
                        </ul>
                    </div>
                     {/* Feature 4: Workflow */}
                     <div className="flex justify-center"><WorkflowIllustration /></div>
                     <div className="text-right">
                         <div className="inline-flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center"><WorkflowIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" /></div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">گردش کار و ابزارها</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">ذخیره و مدیریت قالب‌های سفارشی</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">پیش‌نمایش زنده برای دسکتاپ و موبایل</span></li>
                            <li className="flex items-start"><CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><span className="mr-3">دسترسی به کد HTML برای تنظیمات پیشرفته</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Template Management Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        مدیریت قالب‌ها: مرکز فرماندهی خلاقیت شما
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        قالب‌ها فقط برای طراحی نیستند؛ آن‌ها دارایی‌های ارزشمندی هستند که به شما کمک می‌کنند تا پیام برند خود را به طور مداوم و کارآمد منتقل کنید.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BenefitCard Icon={SaveIcon} title="ذخیره طرح‌های سفارشی" description="هر ایمیلی که طراحی می‌کنید را می‌توان به عنوان یک قالب سفارشی ذخیره کرد و سنگ بنای کمپین‌های آینده شما خواهد بود." />
                    <BenefitCard Icon={ReuseIcon} title="استفاده مجدد و صرفه‌جویی در زمان" description="به جای شروع از صفر، از قالب‌های ذخیره شده خود استفاده کنید. این کار ثبات برند را تضمین کرده و ساعت‌ها در زمان شما صرفه‌جویی می‌کند." />
                    <BenefitCard Icon={GalleryIcon} title="گالری قالب‌های آماده" description="از مجموعه‌ای از قالب‌های حرفه‌ای و از پیش طراحی شده برای شروع سریع الهام بگیرید و آن‌ها را مطابق با نیاز خود سفارشی کنید." />
                    <BenefitCard Icon={ResponsiveIcon} title="واکنش‌گرایی تضمین شده" description="تمام قالب‌های ساخته شده در مگامیل به طور خودکار برای نمایش بی‌نقص در هر دستگاهی، از موبایل تا دسکتاپ، بهینه‌سازی می‌شوند." />
                    <BenefitCard Icon={CodeIcon} title="ورود و خروج HTML" description="کنترل کامل را در دست بگیرید. قالب‌های HTML خود را وارد کنید یا از طرح‌های ساخته شده در ویرایشگر ما خروجی HTML بگیرید." />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    آماده‌اید تا ایمیل‌های بهتری بسازید؟
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                    همین حالا ثبت نام کنید و به ابزارهای قدرتمند طراحی ایمیل ما دسترسی پیدا کنید.
                </p>
                <div className="mt-8">
                    <a
                        href={CTA_URL}
                        className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
                    >
                        شروع کنید و قالب‌ها را کاوش کنید
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TemplatesPage;
