import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CTA_URL } from '../constants';
import {
  FeaturesIcon,
  PricingIcon,
  BlogIcon,
  AboutIcon,
  SupportIcon,
  ModulesIcon,
  EditorIcon,
  ContactsIcon,
  AppIcon,
  RegisterIcon,
  TermsIcon,
  PrivacyIcon
} from './NavIcons';


const FooterLink: React.FC<{ to: string, Icon: React.FC<{className?: string}>, label: string, isExternal?: boolean }> = ({ to, Icon, label, isExternal = false }) => {
  const commonClasses = "text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-x-2 transition-colors";
  if (isExternal) {
    return (
      <li>
        <a href={to} target="_blank" rel="noopener noreferrer" className={commonClasses}>
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={to} className={commonClasses}>
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
    </li>
  );
};


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
              <FooterLink to="/features" Icon={FeaturesIcon} label="ویژگی‌ها" />
              <FooterLink to="/pricing" Icon={PricingIcon} label="تعرفه‌ها" />
              <FooterLink to="/blog" Icon={BlogIcon} label="بلاگ" />
              <FooterLink to="/about" Icon={AboutIcon} label="درباره ما" />
              <FooterLink to="/support" Icon={SupportIcon} label="پشتیبانی" />
            </ul>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">ابزارها</h3>
            <ul className="mt-4 space-y-4">
              <FooterLink to="/modules" Icon={ModulesIcon} label="ماژول‌ها" />
              <FooterLink to="/templates" Icon={EditorIcon} label="ویرایشگر" />
              <FooterLink to="/contacts" Icon={ContactsIcon} label="مخاطبان" />
            </ul>
          </div>
          
          {/* User */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">کاربری</h3>
            <ul className="mt-4 space-y-4">
              <FooterLink to="https://app.megamail.ir" Icon={AppIcon} label="اپلیکیشن" isExternal={true} />
              <FooterLink to={CTA_URL} Icon={RegisterIcon} label="ثبت نام" isExternal={true} />
              <FooterLink to="/terms" Icon={TermsIcon} label="قوانین و مقررات" />
              <FooterLink to="/privacy" Icon={PrivacyIcon} label="حریم خصوصی" />
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