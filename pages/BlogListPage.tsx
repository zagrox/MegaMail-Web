
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';

const BLOGS_API_URL = 'https://crm.megamail.ir/items/blogs';
const ASSETS_URL = 'https://crm.megamail.ir/assets/';

const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(dateString));
};

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64 flex-col text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">در حال بارگذاری مقالات...</p>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-center text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-6 rounded-lg border border-red-300 dark:border-red-700">
        <p className="font-bold text-lg">خطایی رخ داد!</p>
        <p className="mt-2">{message}</p>
    </div>
);

const organizationSchema = {
    "@type": "Organization",
    "name": "مگامیل",
    "url": "https://www.megamail.ir",
    "logo": logoSrc,
};

const BlogListPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(BLOGS_API_URL);
                if (!response.ok) throw new Error('خطا در دریافت اطلاعات بلاگ.');
                const result = await response.json();
                if (!result.data || result.data.length === 0) throw new Error('مقاله‌ای برای نمایش وجود ندارد.');
                const publishedPosts = result.data
                    .filter((p: BlogPost) => p.status === 'published')
                    .sort((a: BlogPost, b: BlogPost) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
                setPosts(publishedPosts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'یک خطای ناشناخته رخ داد');
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <SEO
                title="بلاگ | مگامیل"
                description="آخرین اخبار، آموزش‌ها و مقالات در زمینه بازاریابی ایمیلی را در بلاگ مگامیل بخوانید."
                schemas={[organizationSchema]}
            />
            <div className="py-12 sm:py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        بلاگ مگامیل
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                        آخرین اخبار، آموزش‌ها و مقالات در زمینه بازاریابی ایمیلی.
                    </p>
                </div>

                {loading && <LoadingSpinner />}
                {error && <ErrorMessage message={error} />}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link to={`/blog/${post.blogslug}`} key={post.id} className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                                <div className="relative">
                                    <img 
                                        src={`${ASSETS_URL}${post.blogimage}`} 
                                        alt={post.blogtitle}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {post.blogcategory.map(cat => (
                                                <span key={cat} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {post.blogtitle}
                                        </h2>
                                        <p className="mt-3 text-base text-gray-600 dark:text-gray-400 line-clamp-3">
                                            {post.blogcontent}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                                        <span>{formatDate(post.date_created)}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogListPage;
