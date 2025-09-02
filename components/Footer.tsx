
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CTA_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-right">
          {/* Logo and mission */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              پلتفرم هوشمند بازاریابی ایمیلی مگامیل
            </p>
          </div>

          {/* MegaMail */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">آشنایی</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/features" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">ویژگی‌ها</Link></li>
              <li><Link to="/pricing" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">تعرفه‌ها</Link></li>
              <li><Link to="/blog" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">بلاگ</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">درباره ما</Link></li>
              <li><Link to="/support" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">پشتیبانی</Link></li>
            </ul>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">ابزارها</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/modules" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">ماژول‌ها</Link></li>
              <li><Link to="/templates" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">ویرایشگر</Link></li>
              <li><Link to="/contacts" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">مخاطبان</Link></li>
            </ul>
          </div>
          
          {/* User */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">کاربری</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://app.megamail.ir" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">اپلیکیشن</a></li>
              <li><a href={CTA_URL} className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">ثبت نام</a></li>
              <li><Link to="/terms" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">قوانین و مقررات</Link></li>
              <li><Link to="/privacy" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">حریم خصوصی</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-gray-500 dark:text-gray-400 md:order-1">
            &copy; {new Date().getFullYear()} مجموعه اینترنتی زاگرس. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;