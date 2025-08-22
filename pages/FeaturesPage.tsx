
import React from 'react';
import { CTA_URL } from '../constants';

// --- Icon Components ---

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

const FeaturesHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ابزارهای بازاریابی">
        <defs>
            <linearGradient id="features-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#007BFF" />
            </linearGradient>
            <filter id="features-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#007BFF" floodOpacity="0.15"/>
            </filter>
        </defs>
        
        <path d="M 100,300 C 50,200 150,50 250,100 S 450,200 400,300 Z" className="fill-blue-50 dark:fill-gray-800" />
        
        <g style={{ filter: 'url(#features-shadow)' }}>
            <g transform="translate(100 100) rotate(-15)">
                <rect x="0" y="0" width="120" height="80" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
                <rect x="10" y="10" width="50" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500" />
                <circle cx="95" cy="20" r="10" fill="url(#features-hero-gradient)" />
            </g>

            <g transform="translate(250 80) rotate(10)">
                <rect x="0" y="0" width="140" height="100" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
                <path d="M 15 30 C 30 15, 50 40, 65 30 S 95 10, 110 25" stroke="#3B82F6" strokeWidth="4" fill="none" strokeLinecap="round" />
                <rect x="15" y="50" width="110" height="6" rx="3" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="15" y="65" width="80" height="6" rx="3" className="fill-gray-200 dark:fill-gray-600" />
            </g>

            <g transform="translate(180 200) rotate(5)">
                <rect x="0" y="0" width="100" height="100" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
                <circle cx="50" cy="50" r="25" stroke="#007BFF" strokeWidth="5" strokeDasharray="5 5" fill="none" />
                <circle cx="50" cy="50" r="15" fill="#A5B4FC" />
            </g>
        </g>
    </svg>
);
  
// --- Features Data ---
// Order is reversed to appear correctly in an RTL grid layout
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

const FeaturesPage: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8 space-y-16 sm:space-y-24">
            {/* Hero Section */}
            <section className="py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <FeaturesHeroIllustration />
                    </div>
                    <div className="text-right space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            <span className="block">ابزارهای قدرتمند</span>
                            <span className="block text-blue-600 dark:text-blue-400 mt-2">برای رشد کسب‌وکار شما</span>
                        </h1>
                        <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                            مجموعه‌ای کامل از ویژگی‌ها برای ساخت، ارسال و تحلیل کمپین‌های ایمیلی شما. همه چیزهایی که برای موفقیت نیاز دارید در یک پلتفرم جامع.
                        </p>
                        <div className="flex justify-end pt-4">
                            <a
                                href="#explore-tools"
                                onClick={handleScroll}
                                className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                            >
                                کاوش ابزارها
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Tools Section */}
            <section id="explore-tools">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        ابزارهای خود را کاوش کنید
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        مخاطبین، کمپین‌ها و تنظیمات ارسال خود را مدیریت کنید.
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
                    ابزارهای قدرتمند ایمیل مارکتینگ در دستان شما
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
                    همین حالا ثبت نام کنید و با یک کلیک، کمپین‌های ایمیلی خود را به سطح بالاتری ببرید.
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
