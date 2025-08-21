
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} مجموعه اینترنتی زاگرس . تمامی حقوق محفوظ است.</p>
          <p className="mt-2 text-sm">ساخته شده با ❤️ برای بازاریابان دیجیتال</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
