
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import SEO from '../components/SEO';
import { logoSrc } from '../components/Logo';

const BLOG_POST_API_URL = 'https://crm.megamail.ir/items/blogs';
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
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">در حال بارگذاری مقاله...</p>
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

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) {
            setError("شناسه مقاله نامعتبر است.");
            setLoading(false);
            return;
        }

        const fetchPost = async () => {
            try {
                const response = await fetch(`${BLOG_POST_API_URL}?filter[blogslug][_eq]=${slug}&limit=1`);
                if (!response.ok) throw new Error('خطا در دریافت اطلاعات مقاله.');
                
                const result = await response.json();
                if (!result.data || result.data.length === 0) {
                    throw new Error('مقاله مورد نظر یافت نشد.');
                }
                setPost(result.data[0]);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'یک خطای ناشناخته رخ داد');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return <div className="py-12 sm:py-16"><LoadingSpinner /></div>;
    }

    if (error) {
        return <div className="py-12 sm:py-16"><ErrorMessage message={error} /></div>;
    }

    if (!post) {
        return <div className="py-12 sm:py-16"><ErrorMessage message="مقاله‌ای برای نمایش وجود ندارد." /></div>;
    }
    
    const metaDescription = post.blogcontent.substring(0, 160);

    return (
        <>
            <SEO
                title={`${post.blogtitle} | مگامیل`}
                description={metaDescription}
                schemas={[organizationSchema, {
                    "@type": "BlogPosting",
                    "headline": post.blogtitle,
                    "image": `${ASSETS_URL}${post.blogimage}`,
                    "datePublished": post.date_created,
                    "dateModified": post.date_updated,
                    "author": {
                        "@type": "Organization",
                        "name": "مگامیل"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "مگامیل",
                        "logo": {
                            "@type": "ImageObject",
                            "url": logoSrc
                        }
                    },
                    "description": metaDescription
                }]}
            />
            <article className="py-12 sm:py-16 max-w-4xl mx-auto">
                <header className="text-center mb-12">
                     <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {post.blogcategory.map(cat => (
                            <span key={cat} className="text-sm font-semibold inline-block py-1 px-3 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                                {cat}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        {post.blogtitle}
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        منتشر شده در تاریخ {formatDate(post.date_created)}
                    </p>
                </header>

                <div className="mb-12">
                    <img
                        src={`${ASSETS_URL}${post.blogimage}`}
                        alt={post.blogtitle}
                        className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-right leading-relaxed">
                    <p>{post.blogcontent}</p>
                </div>
                
                <div className="mt-16 text-center">
                    <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                        <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        بازگشت به لیست مقالات
                    </Link>
                </div>
            </article>
        </>
    );
};

export default BlogPostPage;
