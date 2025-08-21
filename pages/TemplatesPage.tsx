import React, { useState } from 'react';

const allTemplates = [
  { id: 1, category: 'اطلاع‌رسانی', name: 'خبرنامه هفتگی', img: 'https://picsum.photos/seed/template1/400/500' },
  { id: 2, category: 'فروشگاهی', name: 'تخفیف ویژه', img: 'https://picsum.photos/seed/template2/400/500' },
  { id: 3, category: 'معاملاتی', name: 'تایید سفارش', img: 'https://picsum.photos/seed/template3/400/500' },
  { id: 4, category: 'فروشگاهی', name: 'محصولات جدید', img: 'https://picsum.photos/seed/template4/400/500' },
  { id: 5, category: 'اطلاع‌رسانی', name: 'رویداد آنلاین', img: 'https://picsum.photos/seed/template5/400/500' },
  { id: 6, category: 'معاملاتی', name: 'بازنشانی رمز عبور', img: 'https://picsum.photos/seed/template6/400/500' },
  { id: 7, category: 'فروشگاهی', name: 'سبد خرید رها شده', img: 'https://picsum.photos/seed/template7/400/500' },
  { id: 8, category: 'اطلاع‌رسانی', name: 'مقاله جدید وبلاگ', img: 'https://picsum.photos/seed/template8/400/500' },
];

const categories = ['همه', 'اطلاع‌رسانی', 'فروشگاهی', 'معاملاتی'];

const TemplatesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('همه');

  const filteredTemplates = activeCategory === 'همه'
    ? allTemplates
    : allTemplates.filter(t => t.category === activeCategory);

  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          گالری قالب‌های حرفه‌ای
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          با قالب‌های آماده و واکنش‌گرا، کمپین‌های خود را در چند دقیقه بسازید.
        </p>
      </div>

      <div className="my-8 flex justify-center flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredTemplates.map(template => (
          <div key={template.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={template.img} alt={template.name} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold">{template.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;