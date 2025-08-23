import React, { useState, useEffect } from 'react';
import { CTA_URL } from '../constants';
import type { PricingPackage, Module } from '../types';

const PACKAGES_API_URL = 'https://crm.mailzila.com/items/packages';
const MODULES_API_URL = 'https://crm.mailzila.com/items/modules';

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

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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

const PricingPage: React.FC = () => {
  const [packages, setPackages] = useState<PricingPackage[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [packagesResponse, modulesResponse] = await Promise.all([
            fetch(PACKAGES_API_URL),
            fetch(MODULES_API_URL)
        ]);
        
        if (!packagesResponse.ok) throw new Error('خطا در دریافت اطلاعات بسته‌ها.');
        if (!modulesResponse.ok) throw new Error('خطا در دریافت اطلاعات ماژول‌ها.');

        const packagesResult = await packagesResponse.json();
        const modulesResult = await modulesResponse.json();
        
        if (!packagesResult.data || packagesResult.data.length === 0) throw new Error('بسته‌ای برای نمایش وجود ندارد.');

        const sortedPackages = packagesResult.data
          .filter((p: any) => p.status === 'published')
          .sort((a: any, b: any) => a.packsize - b.packsize);

        if (sortedPackages.length === 0) throw new Error('بسته‌ فعالی برای نمایش وجود ندارد.');

        setPackages(sortedPackages);
        
        const defaultPackageIndex = sortedPackages.findIndex((p: PricingPackage) => p.packsize === 10000);
        setSelectedIndex(defaultPackageIndex !== -1 ? defaultPackageIndex : 0);

        if (modulesResult.data) {
             setModules(modulesResult.data.filter((m: any) => m.status === 'published'));
        }

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
                       با مدل پرداخت به ازای مصرف، بدون هزینه‌های ماهانه و پنهان، فقط برای ایمیل‌هایی که ارسال می‌کنید هزینه پرداخت کنید.
                    </p>
                    <div className="flex justify-end pt-4">
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
                    با سیستم پرداخت به ازای مصرف، فقط به اندازه نیازتان هزینه کنید.
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
                <div className="relative">
                    <input
                    type="range"
                    min="0"
                    max={packages.length > 0 ? packages.length - 1 : 0}
                    step="1"
                    value={selectedIndex}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer range-slider"
                    style={{ direction: 'rtl' }}
                    aria-label="انتخاب بسته اعتباری"
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3 px-1" aria-hidden="true">
                    {packages.map((pkg) => (
                    <span key={pkg.id} className="text-center flex-1">
                        {pkg.packname}
                    </span>
                    ))}
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

        {/* Modules Section */}
        {modules.length > 0 && (
            <section id="modules-section">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        اعتبار خود را کجا مصرف کنید؟
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        از اعتبار خود برای دسترسی به ماژول‌های حرفه‌ای و ارسال کمپین‌های خود استفاده کنید.
                    </p>
                </div>
                <div className="overflow-x-auto relative shadow-lg sm:rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm text-right text-gray-600 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                            <tr>
                                <th scope="col" className="py-3 px-6">ماژول</th>
                                <th scope="col" className="py-3 px-6">توضیحات</th>
                                <th scope="col" className="py-3 px-6 text-center">ویژه</th>
                                <th scope="col" className="py-3 px-6 text-left">هزینه (اعتبار)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modules.map(module => (
                                <tr key={module.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {module.modulename}
                                    </th>
                                    <td className="py-4 px-6">{module.moduleinfo}</td>
                                    <td className="py-4 px-6 text-center">
                                        {module.modulepro ? <CheckIcon className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>}
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        {formatNumber(module.moduleprice)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        )}

        {/* FAQ Section */}
        <div className="mt-16 text-center bg-gray-100 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">سوالات متداول</h3>
            <div className="mt-6 text-right max-w-3xl mx-auto space-y-4">
                <div>
                    <h4 className="font-semibold text-lg">آیا اعتبارها تاریخ انقضا دارند؟</h4>
                    <p className="text-gray-600 dark:text-gray-400">خیر، اعتبارهای خریداری شده هیچ‌گاه منقضی نمی‌شوند و تا زمان مصرف در حساب شما باقی می‌مانند.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">هر اعتبار معادل چند ایمیل است؟</h4>
                    <p className="text-gray-600 dark:text-gray-400">هر یک اعتبار برای ارسال یک ایمیل به یک گیرنده مصرف می‌شود.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PricingPage;