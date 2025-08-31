
import React, { useState } from 'react';
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

// --- NEW ILLUSTRATIONS ---
const StartupsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از یک راکت که نماد استارتاپ است">
        <defs>
            <linearGradient id="startup-rocket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <linearGradient id="startup-flame-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F87171" />
            </linearGradient>
        </defs>
        <path d="M 100,400 C 150,300 200,350 250,250 C 300,150 350,200 400,100" stroke="#E5E7EB" className="dark:stroke-gray-700" strokeWidth="2" fill="none" strokeDasharray="5 5" />
        <g transform="translate(250, 200) rotate(-45)">
            <path d="M 0 -80 L 40 40 C 40 60 20 80 0 80 C -20 80 -40 60 -40 40 Z" fill="url(#startup-rocket-grad)" />
            <circle cx="0" cy="-35" r="15" fill="#fff" className="dark:fill-gray-700" />
            <path d="M -40 40 C -40 20 -20 20 0 40 Z" fill="#A5B4FC" className="dark:fill-indigo-400" />
            <path d="M 40 40 C 40 20 20 20 0 40 Z" fill="#A5B4FC" className="dark:fill-indigo-400" />
            <path d="M 0 80 C 20 100 10 140 0 160 C -10 140 -20 100 0 80" fill="url(#startup-flame-grad)" />
        </g>
        <circle cx="150" cy="150" r="10" fill="#FBBF24" opacity="0.8" />
        <circle cx="400" cy="300" r="15" fill="#A5B4FC" opacity="0.8" />
        <circle cx="120" cy="350" r="8" fill="#818CF8" opacity="0.8" />
    </svg>
);

const EnterprisesIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" role="img" aria-label="تصویر انتزاعی از چرخ‌دنده‌ها که نماد شرکت‌های بزرگ است">
        <defs>
            <linearGradient id="enterprise-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <symbol id="gear">
                <path d="M 0 -50 L 10 -50 L 15 -40 L -15 -40 L -10 -50 Z" />
                <path d="M 0 50 L 10 50 L 15 40 L -15 40 L -10 50 Z" />
                <path d="M 50 0 L 50 10 L 40 15 L 40 -15 L 50 -10 Z" />
                <path d="M -50 0 L -50 10 L -40 15 L -40 -15 L -50 -10 Z" />
                <path d="M 35.35 -35.35 L 42.42 -28.28 L 28.28 -28.28 L 28.28 -42.42 Z" transform="rotate(45)" />
                <path d="M -35.35 35.35 L -42.42 28.28 L -28.28 28.28 L -28.28 42.42 Z" transform="rotate(45)" />
                <path d="M 35.35 35.35 L 42.42 28.28 L 28.28 28.28 L 28.28 42.42 Z" transform="rotate(-45)" />
                <path d="M -35.35 -35.35 L -42.42 -28.28 L -28.28 -28.28 L -28.28 -42.42 Z" transform="rotate(-45)" />
            </symbol>
        </defs>
        <rect x="50" y="50" width="400" height="300" rx="20" className="fill-blue-50 dark:fill-gray-800/50" />
        <g transform="translate(250, 200)" fill="url(#enterprise-grad)" opacity="0.2">
            <use href="#gear" transform="scale(2.5)" />
        </g>
        <g transform="translate(150, 150)" fill="url(#enterprise-grad)" opacity="0.5">
            <use href="#gear" transform="scale(1.5)" />
        </g>
        <g transform="translate(350, 250)" fill="url(#enterprise-grad)" opacity="0.8">
            <use href="#gear" transform="scale(1)" />
        </g>
        <circle cx="250" cy="200" r="30" fill="#fff" className="dark:fill-gray-800" />
        <circle cx="150" cy="150" r="20" fill="#fff" className="dark:fill-gray-800" />
        <circle cx="350" cy="250" r="15" fill="#fff" className="dark:fill-gray-800" />
    </svg>
);

// --- NEW ICONS ---
const CorePlatformIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
);
const ModularExpansionIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10.5h-5v-5h5v5zm-5 5h5v5h-5v-5zm5 0h5v5h-5v-5zm0-10.5h5v5h-5v-5zm-5 5H5v-5h4.5v5zM5 10.5H0v5h5v-5zm10.5 5H24v-5h-4.5v5zm5-10.5H24v5h-5v-5z"/></svg>
);
const CreditBasedUnlockingIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12h-4a2 2 0 100 4h4a2 2 0 100-4h-4a2 2 0 110-4h4a2 2 0 110 4z"/></svg>
);
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

// --- MODULE ICONS (Existing) ---
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

type ModuleCategoryKey = 'core' | 'advanced' | 'technical';

interface ModuleCategory {
    label: string;
    description: string;
    modules: string[];
}

const moduleCategories: Record<ModuleCategoryKey, ModuleCategory> = {
    core: {
        label: 'ابزارهای اصلی',
        description: 'ماژول‌های ضروری برای شروع و اجرای کمپین‌های موفق ایمیلی.',
        modules: ['گزارشات', 'مخاطبین', 'ارسال ایمیل', 'لیست ایمیل', 'کمپین‌ها', 'قالب‌ها', 'ایمیل ساز']
    },
    advanced: {
        label: 'رشد و اتوماسیون',
        description: 'ابزارهای پیشرفته برای هدف‌گیری دقیق‌تر و بهینه‌سازی فرآیندها.',
        modules: ['سگمنت', 'دستیار هوش مصنوعی', 'مدیریت رسانه']
    },
    technical: {
        label: 'فنی و یکپارچه‌سازی',
        description: 'ماژول‌هایی برای افزایش اعتبار ارسال و اتصال به سرویس‌های دیگر.',
        modules: ['دامنه‌ها', 'اتصال خارجی']
    }
};

const startupsAdvantages = [
    { title: "سرمایه‌گذاری اولیه کم و مقرون‌به‌صرفه", description: "استارتاپ‌ها می‌توانند با هزینه ورودی بسیار پایین شروع به کار کنند و فقط برای ویژگی‌های پیشرفته‌ای که نیاز دارند، در زمان نیاز هزینه پرداخت کنند." },
    { title: "عملیات ناب و چابک", description: "پلتفرم فاقد ویژگی‌های اضافی و بلااستفاده است که منجر به تجربه کاربری تمیزتر و شهودی‌تر می‌شود و منحنی یادگیری را کاهش می‌دهد." },
    { title: "مقیاس‌پذیری بر اساس تقاضا", description: "پلتفرم همراه با استارتاپ رشد می‌کند. با رشد کسب‌وکار، می‌توانند به صورت استراتژیک در باز کردن ماژول‌های جدید سرمایه‌گذاری کنند." },
    { title: "بودجه‌بندی شفاف و بازگشت سرمایه (ROI) مشخص", description: "سیستم اعتباری هزینه‌ها را کاملاً قابل پیش‌بینی می‌کند. ROI هر ماژول به راحتی قابل ردیابی است زیرا خرید آن به یک نیاز تجاری خاص گره خورده است." }
];

const enterprisesAdvantages = [
    { title: "راه‌حل‌های سفارشی و متناسب", description: "شرکت‌ها می‌توانند یک راه‌حل بازاریابی ایمیلی سفارشی بسازند که کاملاً با گردش کار پیچیده آن‌ها مطابقت دارد." },
    { title: "کنترل کامل بر هزینه کل مالکیت (TCO)", description: "مدل ما تضمین می‌کند که شرکت‌ها فقط برای قابلیت‌هایی که تیم‌هایشان فعالانه استفاده می‌کنند، هزینه پرداخت کرده و TCO را به شدت کاهش می‌دهد." },
    { title: "پیاده‌سازی و آموزش مرحله‌ای", description: "رویکرد ماژولار امکان پیاده‌سازی مرحله‌ای را فراهم می‌کند و مدیریت تغییر و آموزش کاربران را بسیار ساده‌تر می‌سازد." },
    { title: "امنیت و انطباق پیشرفته", description: "با فعال‌سازی فقط ماژول‌های ضروری، سطح حمله کلی پلتفرم کاهش می‌یابد و امکان کنترل دقیق دسترسی تیم‌ها فراهم می‌شود." },
    { title: "آینده‌نگری و نوآوری", description: "پلتفرم اصلی پایدار باقی می‌ماند، در حالی که نوآوری‌های جدید به عنوان ماژول‌های اختیاری اضافه می‌شوند و شرکت‌ها می‌توانند با سرعت خود فناوری‌های جدید را بپذیرند." },
    { title: "برچسب‌گذاری سفید (White-Labeling) و یکپارچه‌سازی عمیق", description: "معماری ما ذاتاً برای برچسب‌گذاری سفید مناسب است و ماژول‌ها می‌توانند برای یکپارچه‌سازی عمیق با سیستم‌های موجود مانند CRM و ERP طراحی شوند." }
];

const ModulesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ModuleCategoryKey>('core');

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const filteredModules = features.filter(feature => 
        moduleCategories[activeTab].modules.includes(feature.title)
    );

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
                         <div className="flex justify-start pt-4 gap-4">
                            <a
                                href={CTA_URL}
                                className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                            >
                                شروع کنید
                            </a>
                            <a
                                href="#explore-modules"
                                onClick={handleScroll}
                                className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors transform hover:scale-105"
                            >
                                کاوش ماژول‌ها
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Model Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      ابزارهای بازاریابی شما
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        مدل کسب‌وکار ما بر یک فلسفه مدرن و انعطاف‌پذیر بنا شده است: ارائه یک پلتفرم اصلی قدرتمند و امکان ارتقاء آن با قابلیت‌های مشخص از طریق سیستم ماژول‌های قابل بازگشایی. این رویکرد یک راه‌حل سفارشی، مقرون‌به‌صرفه و مقیاس‌پذیر ارائه می‌دهد.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <CorePlatformIcon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4"/>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">۱. پلتفرم اصلی</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">هر کاربر به ویژگی‌های اساسی مانند داشبورد، مدیریت مخاطبین و آمار کمپین دسترسی دارد تا بتواند فوراً شروع به کار کند.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <ModularExpansionIcon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4"/>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">۲. توسعه ماژولار</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">کتابخانه‌ای از ویژگی‌های پیشرفته در قالب ماژول‌های فردی ارائه می‌شود که می‌توانید بر اساس نیازهای خاص خود آن‌ها را فعال کنید.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <CreditBasedUnlockingIcon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4"/>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">۳. بازگشایی مبتنی بر اعتبار</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">به جای طرح‌های اشتراک گران‌قیمت، از یک سیستم اعتباری یک‌باره برای باز کردن دائمی ماژول‌های مورد نیاز خود استفاده کنید.</p>
                    </div>
                </div>
            </section>

          {/* Image Section */}
            <section>
                <img 
                    src="https://crm.megamail.ir/assets/fd937622-c055-4bf2-9ab7-5dcbc54b4964"
                    alt="نمایی از ماژول های بازاریابی ایمیل مگامیل"
                    className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 mx-auto"
                />
            </section>


            {/* Explore Modules Section */}
            <section id="explore-modules">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        بازارچه ماژول‌های ما
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        پلتفرم خود را با فعال‌سازی ماژول‌های قدرتمند، مطابق با نیازهای کسب‌وکار خود سفارشی کنید.
                    </p>
                </div>

                <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
                    {(Object.keys(moduleCategories) as ModuleCategoryKey[]).map(key => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300 -mb-px border-b-2
                                ${activeTab === key 
                                    ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                                    : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                                }`
                            }
                            aria-current={activeTab === key ? 'page' : undefined}
                        >
                            {moduleCategories[key].label}
                        </button>
                    ))}
                </div>

                <div className="text-center mb-12 min-h-[4rem]">
                    <p className="text-gray-600 dark:text-gray-400">{moduleCategories[activeTab].description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredModules.map((feature) => (
                        <div key={feature.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-right">
                            <div className="flex-shrink-0 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                    <feature.Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 flex-grow">{feature.description}</p>
                            <div className="mt-4">
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                                    فعال‌سازی با اعتبار
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advantages for Startups Section */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <StartupsIllustration />
                    </div>
                    <div className="text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">مزایا برای استارتاپ‌ها</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">برای استارتاپ‌ها که چابکی، کنترل بودجه و سرعت در اولویت است، مدل ماژولار ما مزایای قابل توجهی ارائه می‌دهد:</p>
                        <ul className="mt-6 space-y-4">
                            {startupsAdvantages.map(item => (
                                <li key={item.title} className="flex items-start">
                                    <CheckIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div className="mr-4 rtl:mr-4 rtl:ml-0">
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Advantages for Enterprises Section */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-last">
                        <EnterprisesIllustration />
                    </div>
                    <div className="text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">مزایا برای شرکت‌های بزرگ</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">برای شرکت‌های بزرگی که سفارشی‌سازی، امنیت، کنترل هزینه و یکپارچه‌سازی را در اولویت قرار می‌دهند، این مدل به همان اندازه قدرتمند است:</p>
                        <ul className="mt-6 space-y-4">
                            {enterprisesAdvantages.map(item => (
                                <li key={item.title} className="flex items-start">
                                    <CheckIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div className="mr-4 rtl:mr-4 rtl:ml-0">
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                        href={CTA_URL}
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