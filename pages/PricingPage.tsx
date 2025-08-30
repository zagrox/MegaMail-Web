

import React, { useState, useEffect } from 'react';
import { CTA_URL } from '../constants';
import type { PricingPackage } from '../types';

const PACKAGES_API_URL = 'https://crm.mailzila.com/items/packages';

const formatNumber = (num: number) => new Intl.NumberFormat('fa-IR').format(num);

// --- SVG Components ---

const PricingHeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از قیمت‌گذاری و صرفه‌جویی">
        <defs>
            <linearGradient id="pricing-hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#007BFF" />
            </linearGradient>
            <filter id="pricing-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#007BFF" floodOpacity="0.15"/>
            </filter>
        </defs>
        <path d="M 100,300 C 50,200 150,50 250,100 S 450,200 400,300 Z" className="fill-blue-50 dark:fill-gray-800" transform="rotate(-10, 250, 200)" />
        <g style={{ filter: 'url(#pricing-shadow)' }}>
            <rect x="150" y="80" width="200" height="240" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" strokeWidth="1"/>
            <rect x="170" y="100" width="160" height="40" rx="10" className="fill-gray-100 dark:fill-gray-600" />
            <text x="320" y="128" fontFamily="Vazirmatn, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor" textAnchor="start" className="fill-current text-gray-800 dark:text-gray-100">۳۰</text>
            <rect x="170" y="160" width="75" height="40" rx="8" className="fill-gray-200 dark:fill-gray-500" />
            <rect x="255" y="160" width="75" height="40" rx="8" className="fill-gray-200 dark:fill-gray-500" />
            <rect x="170" y="210" width="75" height="40" rx="8" className="fill-gray-200 dark:fill-gray-500" />
            <rect x="255" y="210" width="75" height="40" rx="8" className="fill-gray-200 dark:fill-gray-500" />
            <rect x="170" y="260" width="160" height="40" rx="8" className="fill-blue-500" />
        </g>
        <circle cx="100" cy="150" r="30" fill="url(#pricing-hero-gradient)" />
        <text x="100" y="158" fontFamily="Vazirmatn, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">%</text>
        <g transform="translate(380, 280)">
             <path d="M20,0C8.96,0,0,8.96,0,20s8.96,20,20,20s20-8.96,20-20S31.04,0,20,0z M20,34c-7.72,0-14-6.28-14-14S12.28,6,20,6s14,6.28,14,14S27.72,34,20,34z" fill="#A5B4FC"/>
             <path d="M22.5,15.5h-2.1c-0.2-1.3-0.5-2.5-1-3.6l1.5-1.5c-0.4-0.4-0.4-1,0-1.4l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0L16.4,9c-1.1-0.5-2.3-0.8-3.6-1V5.9c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v2.1c-1.3,0.2-2.5,0.5-3.6,1L3.7,7.6c-0.4-0.4-1-0.4-1.4,0L0.9,9.1c-0.4,0.4-0.4,1,0,1.4l1.5,1.5c-0.5,1.1-0.8,2.3-1,3.6H0.9c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h2.1c0.2,1.3,0.5,2.5,1,3.6l-1.5,1.5c-0.4,0.4-0.4,1,0,1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0l1.5-1.5c1.1,0.5,2.3,0.8,3.6,1v2.1c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1,1v-2.1c1.3-0.2,2.5,0.5,3.6-1l1.5,1.5c0.4,0.4,1,0.4,1.4,0l1.4-1.4c0.4-0.4,0.4,1,0-1.4l-1.5-1.5c0.5-1.1,0.8-2.3,1-3.6h2.1c0.6,0,1-0.4,1-1v-2C23.5,15.9,23.1,15.5,22.5,15.5z M10,18.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5S12.5,18.5,10,18.5z" fill="#A5B4FC" transform="scale(0.8) translate(5,5)"/>
        </g>
    </svg>
);

const CustomerBenefitsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از مزایای مشتری">
        <defs>
            <linearGradient id="customer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>
            <filter id="customer-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#3B82F6" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 50,200 A 200,150 0 1 1 450,200 A 200,150 0 1 1 50,200" className="fill-blue-50 dark:fill-gray-800" />
        <g style={{ filter: 'url(#customer-shadow)' }}>
            <rect x="125" y="100" width="250" height="200" rx="20" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <rect x="145" y="120" width="80" height="12" rx="6" fill="url(#customer-grad)" />
            <rect x="145" y="150" width="210" height="8" rx="4" className="fill-gray-200 dark:fill-gray-600" />
            <rect x="145" y="170" width="180" height="8" rx="4" className="fill-gray-200 dark:fill-gray-600" />
        </g>
        <g transform="translate(145, 210)">
            <rect width="60" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <path d="M 15 30 L 25 40 L 45 20" stroke="#2DD4BF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
         <g transform="translate(225, 210)">
            <rect width="60" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600" />
            <circle cx="30" cy="30" r="12" stroke="#3B82F6" strokeWidth="6" fill="none" />
        </g>
         <g transform="translate(305, 210)">
            <rect width="60" height="60" rx="10" className="fill-gray-100 dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-600" />
             <path d="M20 20h20M20 30h20M20 40h20" stroke="#9CA3AF" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);

const BusinessBenefitsIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="تصویر انتزاعی از مزایای کسب‌وکار">
        <defs>
            <linearGradient id="business-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#A5B4FC" />
            </linearGradient>
             <filter id="business-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#6366F1" floodOpacity="0.2"/>
            </filter>
        </defs>
        <path d="M 50,50 H 450 V 350 H 50 Z" className="fill-indigo-50 dark:fill-gray-800" transform="skewY(-5)"/>
        <g style={{ filter: 'url(#business-shadow)' }}>
            <path d="M 100 300 L 150 220 L 220 250 L 300 150 L 380 180 L 380 300 Z" fill="url(#business-grad)" opacity="0.3" />
            <path d="M 100 300 L 150 220 L 220 250 L 300 150 L 380 180" stroke="url(#business-grad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <rect x="100" y="80" width="120" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
        <text x="160" y="118" fontFamily="Vazirmatn, sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200">LTV</text>
        <path d="M 190 110 l 15 -15" stroke="#34D399" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <rect x="280" y="250" width="120" height="60" rx="10" className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600"/>
        <path d="M 300 285 h 40" stroke="#6366F1" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M 360 285 l -10 10 m 0 -20 l 10 10" stroke="#6366F1" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
);


const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64 flex-col text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">در حال بارگذاری اطلاعات...</p>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-center text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-6 rounded-lg border border-red-300 dark:border-red-700">
        <p className="font-bold text-lg">خطایی رخ داد!</p>
        <p className="mt-2">{message}</p>
    </div>
);

// --- Icons for Business Model Section ---
const FlexibilityIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/><path d="M4 12v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"/><path d="M12 18v4"/><path d="M12 2v4"/></svg>
);
const CostIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
);
const InstantIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const ScalabilityIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
);
const NoCommitmentIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
);
const UserAcquisitionIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line></svg>
);
const LtvIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
);
const CashFlowIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);
const DataDrivenIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
);
const ChurnIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"/></svg>
);

const StepArrow: React.FC<{className?: string}> = (props) => (
    <svg {...props} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m0 0l4 4m-4-4l4-4"/>
    </svg>
);

const BenefitItem: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({icon, title, description}) => (
    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>
                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{description}</p>
            </div>
        </div>
    </div>
);

const businessModelSteps = [
    {
      number: 1,
      title: 'پلتفرم رایگان',
      description: 'ثبت‌نام کنید و به ابزارهای پایه‌ای به صورت رایگان دسترسی پیدا کنید.',
    },
    {
      number: 2,
      title: 'اقتصاد اعتباری',
      description: <>بسته‌های اعتبار را خریداری کنید. اعتبارها فوراً به حساب شما اضافه شده و برای <strong className="text-blue-400">ارسال هر ایمیل (۱ اعتبار)</strong> یا فعال‌سازی ماژول‌ها استفاده می‌شوند.</>,
    },
    {
      number: 3,
      title: 'بازارچه ماژول‌ها',
      description: 'ویژگی‌های مورد نیاز خود را با قیمت شفاف (به اعتبار) در بازارچه ما انتخاب کنید.',
    },
    {
      number: 4,
      title: 'پرداخت و فعال‌سازی',
      description: 'با پرداخت هزینه یک‌باره، اعتبار فوراً از حساب شما کسر شده و ماژول برای همیشه فعال می‌شود.',
    },
];

const PricingPage: React.FC = () => {
  const [packages, setPackages] = useState<PricingPackage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagesResponse = await fetch(PACKAGES_API_URL);
        
        if (!packagesResponse.ok) throw new Error('خطا در دریافت اطلاعات بسته‌ها.');

        const packagesResult = await packagesResponse.json();
        
        if (!packagesResult.data || packagesResult.data.length === 0) throw new Error('بسته‌ای برای نمایش وجود ندارد.');

        const sortedPackages = packagesResult.data
          .filter((p: any) => p.status === 'published')
          .sort((a: any, b: any) => a.packsize - b.packsize);

        if (sortedPackages.length === 0) throw new Error('بسته‌ فعالی برای نمایش وجود ندارد.');

        setPackages(sortedPackages);
        
        const defaultPackageIndex = sortedPackages.findIndex((p: PricingPackage) => p.packsize === 10000);
        setSelectedIndex(defaultPackageIndex !== -1 ? defaultPackageIndex : 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'یک خطای ناشناخته رخ داد');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndex(Number(event.target.value));
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return <div className="py-8"><LoadingSpinner /></div>;
  if (error) return <div className="py-8"><ErrorMessage message={error} /></div>;
  
  const selectedPackage = packages[selectedIndex];
  if (!selectedPackage) return <div className="py-8"><ErrorMessage message="بسته انتخاب شده معتبر نیست."/></div>;
  
  return (
    <div className="py-8 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-last">
                    <PricingHeroIllustration />
                </div>
                <div className="text-right space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        <span className="block">قیمت‌گذاری شفاف</span>
                        <span className="block text-blue-600 dark:text-blue-400 mt-2">و منعطف</span>
                    </h1>
                    <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 ml-auto">
                       با مدل پرداخت به ازای مصرف, بدون هزینه‌های ماهانه و پنهان, فقط برای آنچه استفاده می‌کنید هزینه پرداخت کنید. هر ارسال ایمیل معادل یک اعتبار است.
                    </p>
                    <div className="flex justify-start pt-4">
                        <a
                            href="#pricing-calculator"
                            onClick={handleScroll}
                            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                        >
                            مشاهده بسته‌ها
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Pricing Calculator Section */}
        <section id="pricing-calculator" className="py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    یک بسته برای شارژ انتخاب کنید
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                    با سیستم پرداخت به ازای مصرف، فقط به اندازه نیازتان هزینه کنید. هر اعتبار برای ارسال یک ایمیل مصرف می‌شود.
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 sm:p-12">
                <div className="text-center">
                <h3 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {formatNumber(selectedPackage.packsize)}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">اعتبار</p>
                <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mt-4">
                    ({formatNumber(selectedPackage.packprice)} تومان)
                </p>
                </div>

                <div className="mt-12">
                    <div className="relative py-2">
                        {/* Dots on the track */}
                        <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2 px-1.5 pointer-events-none">
                            {packages.map((_, index) => (
                                <div key={index} className="w-2 h-2 bg-white/50 dark:bg-gray-800/50 rounded-full"></div>
                            ))}
                        </div>
                        <input
                            type="range"
                            min="0"
                            max={packages.length > 0 ? packages.length - 1 : 0}
                            step="1"
                            value={selectedIndex}
                            onChange={handleSliderChange}
                            className="w-full appearance-none cursor-pointer range-slider"
                            style={{ '--progress': `${packages.length > 1 ? (selectedIndex / (packages.length - 1)) * 100 : 0}%` } as React.CSSProperties}
                            aria-label="انتخاب بسته اعتباری"
                        />
                    </div>
                    <div className="relative h-8 mt-2 text-sm font-medium">
                        {packages.map((pkg, index) => {
                            const position = (index / (packages.length - 1)) * 100;
                            return (
                                <button
                                    key={pkg.id}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 text-center transition-all duration-200 px-1 py-2 rounded-md focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 focus:ring-blue-500 ${
                                        selectedIndex === index
                                            ? 'text-blue-600 dark:text-blue-400 font-bold scale-110'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                                    }`}
                                    style={{
                                        right: `${position}%`,
                                    }}
                                >
                                    {pkg.packname}
                                </button>
                            );
                        })}
                    </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="text-lg">
                    <span className="text-gray-600 dark:text-gray-400">قیمت هر اعتبار: </span>
                    <span className="font-bold text-gray-900 dark:text-white">{formatNumber(selectedPackage.packrate)} تومان</span>
                </div>
                <a
                    href={`${CTA_URL}/?package=${selectedPackage.id}`}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:ring-offset-gray-800 focus:ring-blue-500 transition-colors"
                    >
                    سفارش
                    </a>
                </div>
            </div>
        </section>

        {/* Business Model Section */}
        <section id="business-model" className="py-16 sm:py-20 bg-slate-900 rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        آشنایی با مدل کسب‌وکار ما
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                        ما یک مدل ترکیبی از پرداخت به ازای مصرف (PAYG) و بازارچه ماژولار ارائه می‌دهیم تا حداکثر انعطاف‌پذیری و کنترل را به شما بدهیم.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-center mb-16 text-white">چگونه کار می‌کند؟</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-x-4 text-white">
                        {businessModelSteps.map((step, index) => (
                            <React.Fragment key={step.number}>
                                <div className="flex-1 text-center">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl ring-4 ring-blue-500/30">{step.number}</div>
                                    <h4 className="font-bold text-lg">{step.title}</h4>
                                    <p className="mt-1 text-gray-400 text-sm">{step.description}</p>
                                </div>
                                {index < businessModelSteps.length - 1 && (
                                    <StepArrow className="w-8 h-8 text-gray-600 rotate-90 lg:rotate-0" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Customer Benefits Section */}
        <section>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-last">
                    <CustomerBenefitsIllustration />
                </div>
                <div className="text-right">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">مزایا برای شما (مشتریان)</h2>
                    <div className="space-y-6">
                        <BenefitItem icon={<FlexibilityIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="انعطاف‌پذیری و کنترل کامل" description="ابزار خود را دقیقاً مطابق با نیازتان بسازید و فقط برای آنچه استفاده می‌کنید هزینه کنید." />
                        <BenefitItem icon={<CostIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="مقرون‌به‌صرفه و شفاف" description="بدون هزینه اشتراک ماهانه برای ویژگی‌های بلااستفاده. هزینه هر ماژول به صورت شفاف نمایش داده می‌شود." />
                        <BenefitItem icon={<ScalabilityIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="مقیاس‌پذیری یکپارچه" description="با ابزارهای اصلی شروع کنید و با گسترش کسب‌وکارتان، ماژول‌های پیشرفته‌تری را به راحتی فعال کنید." />
                        <BenefitItem icon={<NoCommitmentIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="بدون تعهد بلندمدت" description="مانند اشتراک‌های سالانه محدود نیستید. بر اساس برنامه خود اعتبار بخرید و ماژول‌ها را فعال کنید." />
                        <BenefitItem icon={<InstantIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="دسترسی فوری و چابکی" description="وقتی به ابزار جدیدی نیاز دارید، در چند ثانیه آن را فعال کرده و استفاده نمایید؛ بدون هیچ‌گونه تاخیر." />
                    </div>
                </div>
            </div>
        </section>

        {/* Business Benefits Section */}
        <section>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <BusinessBenefitsIllustration />
                </div>
                <div className="text-right">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">مزایا برای ما (شفافیت)</h2>
                    <div className="space-y-6">
                        <BenefitItem icon={<UserAcquisitionIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />} title="جذب کاربر بالاتر" description="هسته رایگان پلتفرم مخاطبان گسترده‌تری را جذب می‌کند و کاربران می‌توانند ارزش محصول را بدون تعهد مالی کشف کنند." />
                        <BenefitItem icon={<LtvIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />} title="ارزش طول عمر مشتری (LTV) بالاتر" description="این مدل با ایجاد مسیر هموار برای ارتقاء، کاربران را به تعامل بلندمدت تشویق می‌کند." />
                        <BenefitItem icon={<CashFlowIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />} title="بهبود جریان نقدی" description="سیستم اعتبار یک مدل پیش‌پرداخت است که برای پیش‌بینی مالی و پایداری کسب‌وکار بسیار مفید است." />
                        <BenefitItem icon={<DataDrivenIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />} title="توسعه محصول داده‌محور" description="بازارچه ماژول‌ها داده‌های مستقیمی در مورد ویژگی‌های پرتقاضا ارائه می‌دهد و به اولویت‌بندی نقشه راه توسعه کمک می‌کند." />
                        <BenefitItem icon={<ChurnIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />} title="کاهش نرخ ریزش مشتری" description="از آنجایی که مشتریان برای ساختن پلتفرم سفارشی خود سرمایه‌گذاری می‌کنند، «چسبندگی» بیشتری پیدا کرده و وفادارتر می‌مانند." />
                    </div>
                </div>
            </div>
        </section>


        {/* FAQ Section */}
        <section className="bg-gray-100 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">سوالات متداول</h2>
            <div className="mt-8 max-w-4xl mx-auto space-y-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-lg">هر اعتبار معادل چند ایمیل است؟</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">هر یک اعتبار برای ارسال یک ایمیل به یک گیرنده مصرف می‌شود.</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-lg">آیا اعتبارها تاریخ انقضا دارند؟</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">خیر، اعتبارهای خریداری شده هیچ‌گاه منقضی نمی‌شوند و تا زمان مصرف در حساب شما باقی می‌مانند.</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-lg">پس از فعال‌سازی یک ماژول چه اتفاقی می‌افتد؟ آیا هزینه آن یک‌باره است؟</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">بله، هزینه فعال‌سازی هر ماژول یک بار برای همیشه از اعتبار شما کسر می‌شود و پس از آن، ماژول به صورت دائمی به حساب شما اضافه می‌گردد.</p>
                </div>
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-lg">چرا به جای اشتراک ماهانه از سیستم اعتبار استفاده می‌کنید؟</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">برای ارائه حداکثر انعطاف‌پذیری و صرفه‌جویی در هزینه‌ها. با این مدل شما فقط برای ویژگی‌هایی که واقعاً استفاده می‌کنید هزینه پرداخت می‌کنید و از هدررفت بودجه برای ابزارهای غیرضروری جلوگیری می‌شود.</p>
                </div>
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-lg">آیا ماژول‌های رایگان هم وجود دارند؟</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">بله، پلتفرم اصلی مگامیل شامل مجموعه‌ای از ابزارهای ضروری و رایگان است. بازارچه ماژول‌ها به شما این امکان را می‌دهد که ابزارهای تخصصی‌تر را بر حسب نیاز به مجموعه خود اضافه کنید.</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default PricingPage;