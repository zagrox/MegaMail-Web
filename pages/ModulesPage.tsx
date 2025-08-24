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
            <filter id="modules-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#007BFF" floodOpacity="0.15"/>
            </filter>
        </defs>
        <circle cx="250" cy="200" r="180" className="fill-blue-50 dark:fill-gray-800" />
        <g style={{ filter: 'url(#modules-shadow)' }}>
            {/* Main dashboard */}
            <rect x="150" y="100" width="200" height="150" rx="15" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <rect x="165" y="115" width="80" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500" />
            <rect x="165" y="135" width="170" height="6" rx="3" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="165" y="150" width="170" height="6" rx="3" className="fill-gray-200 dark:fill-gray-600" />

            {/* Floating Modules */}
            <g transform="translate(80, 80) rotate(-10)">
                <rect x="0" y="0" width="80" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
                <circle cx="20" cy="20" r="8" className="fill-teal-300 dark:fill-teal-600"/>
                <rect x="35" y="16" width="30" height="5" rx="2.5" className="fill-gray-300 dark:fill-gray-500" />
            </g>
            <g transform="translate(340, 150) rotate(15)">
                <rect x="0" y="0" width="80" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
                <circle cx="20" cy="20" r="8" className="fill-indigo-300 dark:fill-indigo-600"/>
                <rect x="35" y="16" width="30" height="5" rx="2.5" className="fill-gray-300 dark:fill-gray-500" />
            </g>
             <g transform="translate(100, 250) rotate(5)">
                <rect x="0" y="0" width="80" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
                <path d="M12 20h9" stroke="#fbbf24" strokeWidth="2"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#fbbf24" strokeWidth="2" fill="none" transform="scale(1.2) translate(5 5)"></path>
            </g>
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
