
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CTA_URL } from '../constants';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';

// --- Feature Icon Components ---

const ContactManagementIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a3.004 3.004 0 015.288 0M12 14a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
);
  
const EmailBuilderIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

const CampaignCreationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

const ReportsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);


const featureData = [
    { name: 'مدیریت مخاطبین', description: 'به راحتی لیست مخاطبین خود را وارد، دسته‌بندی و مدیریت کنید.', icon: ContactManagementIcon },
    { name: 'ایمیل ساز قدرتمند', description: 'با ویرایشگر کشیدن و رها کردن، ایمیل‌های زیبا و واکنش‌گرا بسازید.', icon: EmailBuilderIcon },
    { name: 'ایجاد کمپین', description: 'کمپین‌های جذاب بسازید، ارسال کنید و نتایج آن را دنبال نمایید.', icon: CampaignCreationIcon },
    { name: 'تحلیل و گزارش‌دهی', description: 'عملکرد کمپین‌های خود را با گزارش‌های دقیق و قابل فهم دنبال کنید.', icon: ReportsIcon },
];

const accordionData = [
  {
    title: 'مدیریت لیست‌های مخاطبین',
    content: 'به راحتی مخاطبین خود را در لیست‌های مختلف دسته‌بندی کنید تا کمپین‌های هدفمند ارسال نمایید و نرخ تعامل را افزایش دهید.'
  },
  {
    title: 'مدیریت سگمنت‌های بازاریابی',
    content: 'بر اساس رفتار، مشخصات دموگرافیک یا تاریخچه خرید، سگمنت‌های پویا ایجاد کنید و پیام‌های شخصی‌سازی شده ارسال کنید.'
  },
  {
    title: 'ایجاد قوانین شرطی',
    content: 'قوانین پیچیده برای افزودن یا حذف خودکار مخاطبین از لیست‌ها بر اساس فعالیت‌های آن‌ها تعریف کنید.'
  },
  {
    title: 'ورود و خروج مخاطبین',
    content: 'به سادگی لیست‌های بزرگ مخاطبین را از فایل‌های CSV وارد کنید یا از اطلاعات موجود خروجی بگیرید.'
  },
  {
    title: 'مدیریت وضعیت مخاطبین',
    content: 'وضعیت هر مخاطب (فعال، غیرفعال، لغو اشتراک) را مشاهده و مدیریت کنید تا لیست‌های سالم و کارآمد داشته باشید.'
  }
];

const templateAccordionData = [
    {
        title: 'ویرایشگر مدرن کشیدن و رها کردن',
        content: 'با ویرایشگر بصری ما، ایمیل‌های حرفه‌ای را بدون نیاز به دانش کدنویسی طراحی کنید. المان‌ها را به سادگی بکشید و در جای خود قرار دهید.'
    },
    {
        title: 'ایجاد و مدیریت قالب‌ها',
        content: 'قالب‌های سفارشی خود را بسازید و آن‌ها را برای استفاده مجدد در کمپین‌های آینده ذخیره کنید. مدیریت قالب‌ها هرگز به این سادگی نبوده است.'
    },
    {
        title: 'گالری قالب‌های آماده',
        content: 'از میان ده‌ها قالب از پیش طراحی شده و حرفه‌ای، یکی را انتخاب کنید و آن را مطابق با برند خود سفارشی‌سازی نمایید.'
    },
    {
        title: 'طراحی کاملاً واکنش‌گرا',
        content: 'تمام قالب‌های ساخته شده با مگامیل به طور خودکار بر روی تمامی دستگاه‌ها، از دسکتاپ تا موبایل، به زیبایی نمایش داده می‌شوند.'
    },
    {
        title: 'ورود/خروج، پیش‌نمایش و کد',
        content: 'قالب‌های خود را به صورت HTML وارد یا از آن‌ها خروجی بگیرید. قبل از ارسال، پیش‌نمایش موبایل و دسکتاپ را مشاهده کرده و به کد منبع دسترسی داشته باشید.'
    }
];

const campaignAccordionData = [
    {
        title: 'ایجاد کمپین و ارسال ایمیل انبوه',
        content: 'کمپین‌های خود را در چند مرحله ساده ایجاد کنید و به صورت انبوه برای مخاطبین خود ارسال نمایید.'
    },
    {
        title: 'ارسال با نام دامنه شخصی (وایت لیبل)',
        content: 'ایمیل‌ها را با استفاده از دامنه اختصاصی خود ارسال کنید تا اعتبار برندتان را افزایش دهید.'
    },
    {
        title: 'انتخاب لیست‌ها، سگمنت‌ها و قالب‌ها',
        content: 'به سادگی لیست‌ها، سگمنت‌های هدف، قالب‌های جذاب و اطلاعات فرستنده را برای هر کمپین مشخص کنید.'
    },
    {
        title: 'بهینه‌سازی ابزارهای ارسال',
        content: 'از ابزارها و گزینه‌های پیشرفته برای بهینه‌سازی نرخ تحویل و تعامل کمپین‌های خود بهره‌مند شوید.'
    },
    {
        title: 'ارسال فوری، زمان‌بندی شده یا پیش‌نویس',
        content: 'کمپین‌ها را فوراً ارسال کنید، برای زمان مشخصی در آینده زمان‌بندی نمایید یا به عنوان پیش‌نویس ذخیره کنید.'
    },
    {
        title: 'مدیریت با گزارشات آماری لحظه‌ای',
        content: 'عملکرد کمپین‌های خود را با گزارش‌های دقیق و آمارهای لحظه‌ای مانند نرخ باز شدن، کلیک و ... دنبال کنید.'
    },
    {
        title: 'ایجاد کمپین‌های A/B تست',
        content: 'با ایجاد کمپین‌های A/B تست، بهترین نسخه از ایمیل خود را شناسایی کرده و نتایج بهتری کسب کنید.'
    }
];


const HeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از داشبورد بازاریابی ایمیلی">
      <defs>
        <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#007BFF" />
        </linearGradient>
        <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#007BFF" floodOpacity="0.2"/>
        </filter>
      </defs>
      <path d="M 150,350 Q 50,250 150,150 Q 250,50 350,150 Q 450,250 350,350 Z" className="fill-blue-50 dark:fill-gray-800" transform="rotate(15, 250, 250)" />
      <g style={{ filter: 'url(#soft-shadow)' }}>
        <rect x="100" y="80" width="300" height="200" rx="20" className="fill-white dark:fill-gray-700/50 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
        <rect x="120" y="100" width="80" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
        <path d="M 130 200 C 160 160, 190 220, 220 180 S 280 120, 310 160 L 370 140" stroke="url(#hero-gradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <circle cx="360" cy="115" r="15" className="fill-indigo-300 dark:fill-indigo-500" />
        <rect x="120" y="240" width="260" height="8" rx="4" className="fill-gray-200 dark:fill-gray-600"/>
        <rect x="120" y="225" width="200" height="8" rx="4" className="fill-gray-200 dark:fill-gray-600"/>
      </g>
      <g transform="translate(50, 100) rotate(-30)">
         <path d="M 0,0 L 40,10 L 30,50 L -10,40 Z" fill="#007BFF" opacity="0.8"/>
      </g>
      <g transform="translate(420, 280) rotate(45)">
        <rect x="0" y="0" width="50" height="50" rx="15" className="fill-indigo-300 dark:fill-indigo-500" opacity="0.7"/>
      </g>
    </svg>
  );

const ContactsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از مدیریت مخاطبین">
        <defs>
            <linearGradient id="contacts-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="contacts-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#3B82F6" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 350,350 Q 450,250 350,150 Q 250,50 150,150 Q 50,250 150,350 Z" className="fill-blue-50 dark:fill-gray-800" transform="rotate(-15, 250, 250)" />
        <g style={{ filter: 'url(#contacts-shadow)' }}>
            <rect x="100" y="80" width="300" height="240" rx="20" className="fill-white dark:fill-gray-700/50 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
            <g transform="translate(120, 100)">
                <circle cx="15" cy="15" r="15" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="40" y="10" width="120" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="40" y="25" width="80" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
            </g>
            <g transform="translate(120, 155)">
                <circle cx="15" cy="15" r="15" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="40" y="10" width="180" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="40" y="25" width="140" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
            </g>
            <g transform="translate(120, 210)">
                <circle cx="15" cy="15" r="15" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="40" y="10" width="150" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="40" y="25" width="100" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
            </g>
             <g transform="translate(120, 265)">
                <circle cx="15" cy="15" r="15" className="fill-gray-200 dark:fill-gray-600" />
                <rect x="40" y="10" width="100" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
                <rect x="40" y="25" width="70" height="5" rx="2.5" className="fill-gray-200 dark:fill-gray-500"/>
            </g>
        </g>
        <g transform="translate(70, 280) rotate(30)">
            <path d="M 0,0 L 50,10 L 40,60 L -10,50 Z" fill="url(#contacts-gradient)" opacity="0.8"/>
        </g>
        <g transform="translate(400, 100) rotate(20)">
            <circle cx="0" cy="0" r="25" className="fill-indigo-300 dark:fill-indigo-500" opacity="0.7"/>
        </g>
    </svg>
);

const TemplatesIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از قالب‌های ایمیل">
        <defs>
            <linearGradient id="templates-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <filter id="templates-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#4F46E5" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 120,380 Q 20,280 120,180 Q 220,80 320,180 Q 420,280 320,380 Z" className="fill-indigo-50 dark:fill-gray-800" transform="scale(1.2) translate(-40, -50)" />
        <g style={{ filter: 'url(#templates-shadow)' }}>
            <rect x="120" y="60" width="260" height="280" rx="20" className="fill-white dark:fill-gray-700/50 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
            <rect x="140" y="80" width="220" height="100" rx="10" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="140" y="200" width="220" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
            <rect x="140" y="220" width="180" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
            <rect x="140" y="250" width="100" height="30" rx="8" fill="url(#templates-gradient)" />
        </g>
        <g transform="translate(80, 100) rotate(-45)">
            <rect x="0" y="0" width="50" height="50" rx="15" className="fill-indigo-300 dark:fill-indigo-500" opacity="0.7"/>
        </g>
        <g transform="translate(400, 300) rotate(10)">
            <path d="M 0,0 L 40,10 L 30,50 Z" fill="url(#templates-gradient)" opacity="0.8"/>
        </g>
    </svg>
);

const CampaignsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از مدیریت کمپین‌ها">
        <defs>
            <linearGradient id="campaigns-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <filter id="campaigns-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#0D9488" floodOpacity="0.2"/>
            </filter>
        </defs>
        <circle cx="250" cy="200" r="180" className="fill-teal-50 dark:fill-gray-800" />
        <g style={{ filter: 'url(#campaigns-shadow)' }}>
            <rect x="90" y="90" width="320" height="220" rx="20" className="fill-white dark:fill-gray-700/50 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
            <rect x="110" y="110" width="150" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500"/>
            <path d="M 120 250 C 150 200, 180 260, 210 220 S 270 160, 300 200 L 360 180" stroke="url(#campaigns-gradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <circle cx="330" cy="125" r="30" className="fill-gray-200 dark:fill-gray-600" />
            <path d="M330 125 L 330 95 A 30 30 0 0 1 360 125 Z" fill="url(#campaigns-gradient)" />
        </g>
        <g transform="translate(60, 100) rotate(15)">
            <path d="M0 0 L 20 -10 L 40 30 L 0 20 Z" fill="url(#campaigns-gradient)" opacity="0.8" />
        </g>
        <g transform="translate(420, 300) rotate(-30)">
            <rect x="0" y="0" width="40" height="40" rx="10" className="fill-teal-200 dark:fill-teal-700" opacity="0.7"/>
        </g>
    </svg>
);

const organizationSchema = {
    "@type": "Organization",
    "name": "مگامیل",
    "url": "https://www.megamail.ir", // This should be the final, canonical domain
    "logo": logoSrc,
};

const webSiteSchema = {
    "@type": "WebSite",
    "name": "مگامیل",
    "url": "https://www.megamail.ir",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.megamail.ir/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
};

const HomePage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openTemplateAccordion, setOpenTemplateAccordion] = useState<number | null>(0);
  const [openCampaignAccordion, setOpenCampaignAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleTemplateAccordion = (index: number) => {
    setOpenTemplateAccordion(openTemplateAccordion === index ? null : index);
  };

  const toggleCampaignAccordion = (index: number) => {
    setOpenCampaignAccordion(openCampaignAccordion === index ? null : index);
  };

  return (
    <>
      <SEO
        title="مگامیل - پلتفرم هوشمند بازاریابی ایمیلی"
        description="مگامیل پلتفرمی جامع برای ساخت، ارسال و تحلیل کمپین‌های ایمیلی شماست. با مدل پرداخت به ازای مصرف، به سادگی فروش خود را افزایش دهید."
        schemas={[organizationSchema, webSiteSchema]}
      />
      <div className="py-8 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                  <HeroIllustration />
              </div>
              <div className="text-right space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                      <span className="block">بازاریابی ایمیلی،</span>
                      <span className="block text-blue-600 dark:text-blue-400 mt-2">ساده، هوشمند و قدرتمند</span>
                  </h1>
                  <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                      مگامیل پلتفرمی جامع برای ساخت، ارسال و تحلیل کمپین‌های ایمیلی شماست. به هزاران کسب‌وکار موفق بپیوندید و فروش خود را افزایش دهید.
                  </p>
                  <div className="flex justify-start gap-4 pt-4">
                      <a
                          href={CTA_URL}
                          className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                      >
                          شروع رایگان
                      </a>
                      <Link
                          to="/features"
                          className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-105"
                      >
                          آشنایی با ویژگی‌ها
                      </Link>
                  </div>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featureData.map((feature) => (
              <div key={feature.name} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Image */}
        <section>
          <div className="mt-12">
            <img 
              src="https://crm.megamail.ir/assets/4e840e43-9923-4441-a2cd-3a5de9d8adbd"
              alt="نمایی از داشبورد مگامیل"
              className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 mx-auto"
            />
          </div>
        </section>

        {/* Contact Management Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              مدیریت پیشرفته مخاطبین
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ابزارهای قدرتمند برای دسته‌بندی، هدف‌گیری و تعامل موثر با مخاطبین خود در اختیار داشته باشید.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ContactsIllustration />
            </div>
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-right py-4"
                    aria-expanded={openAccordion === index}
                    aria-controls={`accordion-content-${index}`}
                  >
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.title}</span>
                    <span className="transition-transform duration-300">
                      {openAccordion === index ? (
                         <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      )}
                    </span>
                  </button>
                  <div
                    id={`accordion-content-${index}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === index ? 'max-h-40' : 'max-h-0'}`}
                  >
                    <p className="pb-4 text-gray-600 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Templates Section */}
        <section>
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              طراحی ایمیل‌های خیره‌کننده
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              با ویرایشگر قدرتمند و گالری قالب‌های ما، ایمیل‌هایی بسازید که مخاطبین شما را مجذوب کند.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                  <TemplatesIllustration />
              </div>
              <div className="space-y-4 md:order-first">
              {templateAccordionData.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                      onClick={() => toggleTemplateAccordion(index)}
                      className="w-full flex justify-between items-center text-right py-4"
                      aria-expanded={openTemplateAccordion === index}
                      aria-controls={`template-accordion-content-${index}`}
                  >
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.title}</span>
                      <span className="transition-transform duration-300">
                      {openTemplateAccordion === index ? (
                          <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                      ) : (
                          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      )}
                      </span>
                  </button>
                  <div
                      id={`template-accordion-content-${index}`}
                      role="region"
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openTemplateAccordion === index ? 'max-h-60' : 'max-h-0'}`}
                  >
                      <p className="pb-4 text-gray-600 dark:text-gray-400">
                      {item.content}
                      </p>
                  </div>
                  </div>
              ))}
              </div>
          </div>
        </section>

        {/* Campaign Management Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              کمپین‌های خود را هوشمندانه مدیریت کنید
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              از ساخت تا ارسال و تحلیل، تمام ابزارهای مورد نیاز برای اجرای کمپین‌های موفق در اختیار شماست.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <CampaignsIllustration />
            </div>
            <div className="space-y-4">
              {campaignAccordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleCampaignAccordion(index)}
                    className="w-full flex justify-between items-center text-right py-4"
                    aria-expanded={openCampaignAccordion === index}
                    aria-controls={`campaign-accordion-content-${index}`}
                  >
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.title}</span>
                    <span className="transition-transform duration-300">
                      {openCampaignAccordion === index ? (
                         <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      )}
                    </span>
                  </button>
                  <div
                    id={`campaign-accordion-content-${index}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openCampaignAccordion === index ? 'max-h-60' : 'max-h-0'}`}
                  >
                    <p className="pb-4 text-gray-600 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 text-white rounded-xl shadow-2xl py-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              آماده شروع هستید؟
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200">
              با مدل پرداخت به ازای مصرف، بدون هیچ هزینه ماهانه و فقط برای ایمیل‌هایی که ارسال می‌کنید هزینه پرداخت کنید. همین حالا ثبت نام کنید و هدیه دریافت نمایید!
            </p>
            <div className="mt-8">
              <a
                href={CTA_URL}
                className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
              >
                دریافت هدیه ثبت نام
              </a>
            </div>
        </section>

        {/* eNamad Trust Seal */}
        <div 
          className="flex justify-center py-8"
          dangerouslySetInnerHTML={{
            __html: `<a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=641485&Code=eeZy5j3VovoLv7VfXxG8kgOU7Lysebts"><img referrerpolicy="origin" src="https://crm.megamail.ir/assets/652f0381-a9fa-48a6-840e-fe041f270a1a" alt="نماد اعتماد الکترونیکی" style="cursor:pointer; width: 125px;" id="eeZy5j3VovoLv7VfXxG8kgOU7Lysebts" /></a>`
          }}
        />

      </div>
    </>
  );
};

export default HomePage;
