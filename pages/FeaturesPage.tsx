

import React from 'react';
import { Link } from 'react-router-dom';
import { CTA_URL } from '../constants';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';

// --- Icon Components ---
const PlatformIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);
const AudienceIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const EmailCreationIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
);
const AnalyticsIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const InfrastructureIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);
const BillingIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
);
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);
const ArrowLeftIcon: React.FC<{ className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

// --- Illustration Components ---
const FeaturesHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از ویژگی‌های پلتفرم">
        <defs>
            <linearGradient id="features-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#007BFF"/>
            </linearGradient>
            <filter id="features-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#007BFF" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 450,200 C 450,310.46 360.46,400 250,400 C 139.54,400 50,310.46 50,200 C 50,89.54 139.54,0 250,0 C 360.46,0 450,89.54 450,200 Z" className="fill-blue-50 dark:fill-gray-800/50" />
        <g style={{ filter: 'url(#features-shadow)' }}>
            <rect x="150" y="100" width="200" height="200" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
            <rect x="170" y="120" width="160" height="10" rx="5" fill="url(#features-grad)"/>
            <rect x="170" y="145" width="120" height="8" rx="4" className="fill-gray-200 dark:fill-gray-500"/>
            <rect x="170" y="165" width="140" height="8" rx="4" className="fill-gray-200 dark:fill-gray-500"/>
            <rect x="170" y="200" width="100" height="12" rx="6" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="170" y="222" width="100" height="12" rx="6" className="fill-gray-300 dark:fill-gray-600"/>
            <rect x="170" y="244" width="100" height="12" rx="6" className="fill-gray-300 dark:fill-gray-600"/>
            <path d="M280 200 l5 5 l10 -10" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M280 222 l5 5 l10 -10" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M280 244 l5 5 l10 -10" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(50, 80)" style={{ filter: 'url(#features-shadow)' }}>
            <rect x="0" y="0" width="80" height="50" rx="10" className="fill-white dark:fill-gray-700"/>
            <path d="M20 15 h40 M20 25 h20 M20 35 h30" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
         <g transform="translate(370, 150)" style={{ filter: 'url(#features-shadow)' }}>
            <rect x="0" y="0" width="80" height="50" rx="10" className="fill-white dark:fill-gray-700"/>
            <circle cx="25" cy="25" r="8" fill="#3B82F6" />
            <circle cx="55" cy="25" r="5" fill="#3B82F6" opacity="0.6"/>
        </g>
         <g transform="translate(50, 270)" style={{ filter: 'url(#features-shadow)' }}>
            <rect x="0" y="0" width="80" height="50" rx="10" className="fill-white dark:fill-gray-700"/>
            <path d="M20 20 L30 30 M30 20 L20 30" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="45" y="18" width="15" height="15" rx="3" fill="#3B82F6" opacity="0.6"/>
        </g>
    </svg>
);

const PlatformIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از داشبورد پلتفرم اصلی">
        <defs>
            <linearGradient id="plat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="plat-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#3B82F6" floodOpacity="0.2"/>
            </filter>
        </defs>
        <rect x="50" y="80" width="400" height="240" rx="20" className="fill-gray-100 dark:fill-gray-800" />
        <g style={{ filter: 'url(#plat-shadow)' }}>
            <rect x="80" y="110" width="340" height="180" rx="15" className="fill-white dark:fill-gray-700/80 stroke-gray-200 dark:stroke-gray-600"/>
            {/* Sidebar */}
            <rect x="95" y="125" width="60" height="150" rx="10" className="fill-gray-100 dark:fill-gray-800" />
            <rect x="105" y="140" width="40" height="8" rx="4" className="fill-blue-300 dark:fill-blue-600" />
            <rect x="105" y="160" width="40" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500" />
            {/* Main content */}
            <rect x="170" y="125" width="235" height="40" rx="10" className="fill-gray-50 dark:fill-gray-800" />
            <rect x="180" y="135" width="100" height="10" rx="5" className="fill-gray-300 dark:fill-gray-500" />
            {/* Chart */}
            <rect x="170" y="180" width="150" height="95" rx="10" className="fill-gray-50 dark:fill-gray-800" />
            <path d="M 180 250 C 195 220, 215 240, 230 210 S 260 190, 275 220" stroke="url(#plat-grad)" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* KPI card */}
            <rect x="335" y="180" width="70" height="95" rx="10" fill="url(#plat-grad)" />
            <text x="370" y="215" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">75%</text>
        </g>
    </svg>
);

const AudienceIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از مدیریت مخاطبان و سگمنت‌سازی">
        <defs>
            <linearGradient id="aud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
        </defs>
        <circle cx="250" cy="200" r="180" className="fill-blue-50 dark:fill-gray-800/50" />
        {/* Central user */}
        <g transform="translate(225, 175)">
            <circle cx="25" cy="25" r="25" fill="url(#aud-grad)" />
            <circle cx="25" cy="18" r="8" fill="white"/>
            <path d="M 10 38 A 15 15 0 0 1 40 38" fill="white"/>
        </g>
        {/* Surrounding users */}
        <g transform="translate(100, 100)" className="opacity-70"><circle cx="15" cy="15" r="15" fill="#A5B4FC" className="dark:fill-indigo-500" /><path d="M 100 115 L 210 180" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4" className="dark:stroke-indigo-500"/></g>
        <g transform="translate(350, 120)" className="opacity-70"><circle cx="15" cy="15" r="15" fill="#A5B4FC" className="dark:fill-indigo-500" /><path d="M 365 135 L 280 190" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4" className="dark:stroke-indigo-500"/></g>
        <g transform="translate(120, 280)" className="opacity-70"><circle cx="15" cy="15" r="15" fill="#A5B4FC" className="dark:fill-indigo-500" /><path d="M 135 295 L 220 220" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4" className="dark:stroke-indigo-500"/></g>
        {/* Segment circles */}
        <circle cx="150" cy="200" r="80" stroke="#2DD4BF" fill="none" strokeWidth="3" className="opacity-50" strokeDasharray="8 8"/>
        <circle cx="350" cy="220" r="60" stroke="#3B82F6" fill="none" strokeWidth="3" className="opacity-50" strokeDasharray="8 8"/>
    </svg>
);

const EmailCreationIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از ایمیل‌ساز کشیدن و رها کردن">
        <defs>
            <linearGradient id="email-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <filter id="email-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#818CF8" floodOpacity="0.2"/>
            </filter>
        </defs>
        <rect x="50" y="50" width="400" height="300" rx="20" className="fill-gray-100 dark:fill-gray-800" />
        <g style={{ filter: 'url(#email-shadow)' }}>
            <rect x="80" y="80" width="340" height="240" rx="15" className="fill-white dark:fill-gray-700"/>
            {/* Content panel */}
            <rect x="290" y="95" width="115" height="210" rx="10" className="fill-gray-50 dark:fill-gray-800" />
            <rect x="305" y="110" width="85" height="40" rx="5" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="305" y="165" width="85" height="40" rx="5" fill="url(#email-grad)" />
            {/* Email canvas */}
            <rect x="95" y="95" width="180" height="210" rx="10" className="fill-gray-50 dark:fill-gray-800" />
            <rect x="110" y="110" width="150" height="60" rx="5" className="fill-indigo-200 dark:fill-indigo-600" />
            <rect x="110" y="180" width="150" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500" />
            <rect x="110" y="200" width="120" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500" />
        </g>
    </svg>
);

const AnalyticsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از داشبورد تحلیل و گزارش‌دهی">
        <defs>
            <linearGradient id="analytics-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>
            <filter id="analytics-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#34D399" floodOpacity="0.2"/>
            </filter>
        </defs>
        <rect x="50" y="50" width="400" height="300" rx="20" className="fill-white dark:fill-gray-800/50 stroke-gray-200 dark:stroke-gray-700" />
        <g style={{ filter: 'url(#analytics-shadow)' }}>
            {/* Line Chart */}
            <rect x="80" y="80" width="220" height="120" rx="10" className="fill-white dark:fill-gray-700" />
            <path d="M 95 180 L 125 140 L 155 160 L 185 120 L 215 140 L 245 100 L 275 120" stroke="url(#analytics-grad)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* KPI Cards */}
            <rect x="315" y="80" width="105" height="55" rx="10" className="fill-white dark:fill-gray-700" />
            <text x="367" y="105" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="16" fontWeight="bold">42%</text>
            <rect x="315" y="145" width="105" height="55" rx="10" className="fill-white dark:fill-gray-700" />
            <text x="367" y="170" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="16" fontWeight="bold">12.5%</text>
            {/* Pie Chart */}
            <rect x="80" y="215" width="220" height="105" rx="10" className="fill-white dark:fill-gray-700" />
            <circle cx="135" cy="267" r="35" className="fill-gray-200 dark:fill-gray-600" />
            <path d="M 135 232 A 35 35 0 0 1 170 267 L 135 267 Z" fill="url(#analytics-grad)" />
            <rect x="185" y="247" width="100" height="6" rx="3" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="185" y="267" width="80" height="6" rx="3" className="fill-gray-200 dark:fill-gray-600" />
        </g>
    </svg>
);

const InfrastructureIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از زیرساخت فنی و ارسال">
        <defs>
            <linearGradient id="infra-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
        <circle cx="250" cy="200" r="180" className="fill-purple-50 dark:fill-gray-800/50" />
        {/* Servers */}
        <g transform="translate(100, 150)">
            <rect x="0" y="0" width="80" height="100" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <rect x="15" y="20" width="50" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500" />
            <circle cx="25" cy="50" r="5" fill="url(#infra-grad)" />
            <circle cx="55" cy="50" r="5" className="fill-gray-400" />
        </g>
        {/* Globe and shield */}
        <g transform="translate(250, 150)">
            <circle cx="100" cy="50" r="80" className="fill-white dark:fill-gray-700" />
            <circle cx="100" cy="50" r="70" fill="url(#infra-grad)" opacity="0.2" />
            <path d="M 100 200 s 80-40 80-100 V 70 l -80 -30 -80 30 v 30 c 0 60 80 100 80 100 z" transform="scale(0.5) translate(100, 10)" fill="url(#infra-grad)" />
            <path d="M90 60 l 10 10 l 20 -20" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        {/* Arrows */}
        <path d="M 180 200 C 220 180, 240 180, 280 200" stroke="url(#infra-grad)" strokeWidth="3" fill="none" strokeDasharray="5 5" />
        <path d="M 285 195 l 5 5 l -5 5" stroke="url(#infra-grad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BillingIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از سیستم صورتحساب و بازارچه ماژول‌ها">
        <defs>
            <linearGradient id="bill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
            <filter id="bill-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#F97316" floodOpacity="0.2"/>
            </filter>
        </defs>
        <rect x="50" y="50" width="400" height="300" rx="20" className="fill-gray-100 dark:fill-gray-800" />
        {/* Credit Card */}
        <g transform="translate(80, 80)">
            <rect x="0" y="0" width="150" height="90" rx="10" className="fill-white dark:fill-gray-700" style={{ filter: 'url(#bill-shadow)' }}/>
            <rect x="15" y="50" width="50" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500"/>
            <rect x="15" y="20" width="120" height="10" rx="5" fill="url(#bill-grad)" />
        </g>
        {/* Module cards */}
        <g transform="translate(250, 150)">
            <rect x="0" y="0" width="120" height="150" rx="10" className="fill-white dark:fill-gray-700" style={{ filter: 'url(#bill-shadow)' }}/>
            <circle cx="60" cy="40" r="20" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="20" y="80" width="80" height="8" rx="4" className="fill-gray-300 dark:fill-gray-500"/>
            <rect x="30" y="105" width="60" height="25" rx="12.5" fill="url(#bill-grad)" />
        </g>
         <g transform="translate(100, 200)">
            <rect x="0" y="0" width="120" height="100" rx="10" className="fill-white/70 dark:fill-gray-700/70" />
            <circle cx="60" cy="30" r="15" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="20" y="60" width="80" height="6" rx="3" className="fill-gray-300 dark:fill-gray-500"/>
        </g>
    </svg>
);


const featureCategories = [
    {
        Icon: PlatformIcon,
        Illustration: PlatformIllustration,
        title: "پلتفرم اصلی و تجربه کاربری",
        description: "یک مرکز فرماندهی مدرن با تمام ابزارهای لازم برای مدیریت حساب کاربری، تیم و یکپارچه‌سازی‌های خارجی.",
        features: [
            "داشبورد مدرن و قابل تنظیم",
            "مدیریت کامل پروفایل و تنظیمات",
            "احراز هویت دو عاملی (2FA) برای امنیت",
            "مدیریت تیم و نقش‌های کاربری",
            "دسترسی کامل به API برای توسعه‌دهندگان",
            "وب‌هوک‌ها برای رویدادهای لحظه‌ای",
            "مرکز اعلان‌ها برای رویدادهای مهم",
            "پشتیبانی از حالت روشن و تاریک",
            "رابط کاربری چند زبانه",
            "اپلیکیشن قابل نصب (PWA)",
            "نماهای قابل جاسازی (Embeddable)",
            "مستندات جامع برای توسعه‌دهندگان"
        ]
    },
    {
        Icon: AudienceIcon,
        Illustration: AudienceIllustration,
        title: "مدیریت مخاطبین و مخاطبان",
        description: "ابزارهای قدرتمند برای سازماندهی، فیلتر کردن و درک عمیق مخاطبان برای کمپین‌های هدفمند و شخصی‌سازی شده.",
        features: [
            "مدیریت کامل پروفایل مخاطبین",
            "فیلدهای سفارشی نامحدود",
            "برچسب‌گذاری (Tagging) برای دسته‌بندی",
            "امتیازدهی به مخاطبین (Contact Scoring)",
            "ورود و خروج آسان با CSV",
            "سازماندهی در لیست‌های ایستا",
            "بخش‌بندی پیشرفته و پویا",
            "مدیریت لیست‌های سرکوب (Suppression Lists)",
            "رهگیری فعالیت‌های لحظه‌ای",
            "بررسی سلامت و کیفیت مخاطبین"
        ],
        detailsPagePath: '/contacts',
        detailsPageLabel: 'آشنایی با مدیریت مخاطبان'
    },
    {
        Icon: EmailCreationIcon,
        Illustration: EmailCreationIllustration,
        title: "ساخت ایمیل و ارسال کمپین",
        description: "یک ویرایشگر بصری پیشرفته و مجموعه‌ای از ابزارهای ارسال هوشمند برای طراحی و اجرای کمپین‌های تأثیرگذار.",
        features: [
            "ایمیل‌ساز کشیدن و رها کردن",
            "سفارشی‌سازی کامل استایل‌ها",
            "پیش‌نمایش زنده موبایل و دسکتاپ",
            "ذخیره طرح‌ها به عنوان قالب",
            "تست A/B برای موضوع و محتوا",
            "محتوای پویا (Merge Tags)",
            "ارسال به لیست‌ها یا سگمنت‌ها",
            "زمان‌بندی ارسال بر اساس منطقه زمانی",
            "دستیار هوش مصنوعی برای تولید محتوا",
            "بلوک‌های محتوایی قابل استفاده مجدد",
            "کنترل رهگیری کلیک و UTM",
            "پشتیبانی از AMP برای ایمیل"
        ],
        detailsPagePath: '/templates',
        detailsPageLabel: 'آشنایی با ایمیل‌ساز و قالب‌ها'
    },
    {
        Icon: AnalyticsIcon,
        Illustration: AnalyticsIllustration,
        title: "تحلیل و گزارش‌دهی",
        description: "گزارش‌های جامع و بصری برای سنجش عملکرد کمپین‌ها، درک رفتار مخاطبان و اتخاذ تصمیمات داده‌محور.",
        features: [
            "داشبورد آمار با نمودارها",
            "فیلتر زمانی پیشرفته",
            "رهگیری کامل (ارسال، باز شدن، کلیک)",
            "نقشه‌های کلیک (Click Maps)",
            "گزارش‌های جغرافیایی",
            "گزارش دستگاه‌ها و کلاینت‌های ایمیل",
            "تحلیل نرخ پرش و لغو اشتراک",
            "گزارش‌های تفکیکی کمپین",
            "خروجی داده‌ها به صورت CSV",
            "یکپارچه‌سازی با گوگل آنالیتیکس"
        ]
    },
    {
        Icon: InfrastructureIcon,
        Illustration: InfrastructureIllustration,
        title: "زیرساخت فنی و ارسال",
        description: "ابزارهای فنی برای افزایش اعتبار ارسال، تضمین تحویل‌پذیری بالا و یکپارچه‌سازی با سایر سرویس‌ها.",
        features: [
            "مدیریت و تأیید دامنه‌های ارسال",
            "ارائه رکوردهای DNS (SPF, DKIM, DMARC)",
            "گزینه آی‌پی اختصاصی (Dedicated IP)",
            "نظارت بر اعتبار آی‌پی (IP Reputation)",
            "دسترسی به اطلاعات SMTP",
            "وب‌هوک‌های لحظه‌ای برای رویدادهای ارسال",
            "مدیریت رسانه و فایل‌ها با CDN جهانی",
            "راهنمای تنظیم BIMI برای نمایش لوگو"
        ]
    },
    {
        Icon: BillingIcon,
        Illustration: BillingIllustration,
        title: "صورتحساب و سفارشی‌سازی",
        description: "یک سیستم منعطف مبتنی بر اعتبار که به شما امکان می‌دهد پلتفرم را مطابق با نیازهای خود شکل دهید و هزینه‌ها را مدیریت کنید.",
        features: [
            "سیستم پرداخت به ازای مصرف (PAYG)",
            "خرید بسته‌های اعتباری متنوع",
            "شارژ خودکار اعتبار در صورت نیاز",
            "تاریخچه کامل تراکنش‌ها و فاکتورها",
            "بازارچه ماژول‌ها برای فعال‌سازی ویژگی‌ها",
            "روش‌های پرداخت متنوع",
            "تخمین‌گر هزینه برای برنامه‌ریزی",
            "امکان هدیه دادن اعتبار به کاربران دیگر"
        ]
    }
];

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
    "name": "ویژگی‌های پلتفرم ایمیل مارکتینگ مگامیل",
    "description": "مگامیل یک پلتفرم کامل با ویژگی‌هایی برای مدیریت مخاطبین، ساخت ایمیل‌های حرفه‌ای، ارسال کمپین‌های هوشمند، تحلیل دقیق نتایج، و زیرساخت ارسال قدرتمند است."
};

const FeaturesPage: React.FC = () => {
    return (
        <>
            <SEO
                title="ویژگی‌های مگامیل | پلتفرم کامل ایمیل مارکتینگ"
                description="با تمام ویژگی‌های مگامیل آشنا شوید: از مدیریت مخاطبین و ایمیل‌ساز پیشرفته تا تحلیل‌های دقیق و زیرساخت ارسال قدرتمند."
                schemas={[organizationSchema, serviceSchema]}
            />
            <div className="py-8 space-y-24 sm:space-y-32">
                {/* Hero Section */}
                <section className="py-12 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last">
                            <FeaturesHeroIllustration />
                        </div>
                        <div className="text-right space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                <span className="block">یک پلتفرم،</span>
                                <span className="block text-blue-600 dark:text-blue-400 mt-2">تمام نیازهای شما</span>
                            </h1>
                            <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                                مگامیل ترکیبی از ابزارهای اصلی بازاریابی با یک سیستم ماژولار و مبتنی بر اعتبار است که به شما امکان می‌دهد پلتفرم را دقیقاً مطابق با نیازهای خود سفارشی کنید.
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

                {/* Features Section */}
                <section>
                    <div className="space-y-20 md:space-y-28">
                        {featureCategories.map((category: any, index) => (
                            <div key={category.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={`lg:order-${index % 2 === 0 ? 'last' : 'first'}`}>
                                    <div className="flex items-center justify-center">
                                        <category.Illustration />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                            <category.Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                    </div>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">{category.description}</p>
                                    <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                                        {category.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                                <span className="mr-3 rtl:mr-3 rtl:ml-0 text-gray-700 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {category.detailsPagePath && (
                                        <div className="mt-8">
                                            <Link
                                                to={category.detailsPagePath}
                                                className="inline-flex items-center justify-between px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                                            >
                                                <span>{category.detailsPageLabel}</span>
                                                <ArrowLeftIcon className="w-5 h-5 mr-3" />
                                            </Link>
                                        </div>
                                    )}
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
                        همین حالا ثبت نام کنید و با یک کلیک، کمپین‌های ایملی خود را به سطح بالاتری ببرید.
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

export default FeaturesPage;