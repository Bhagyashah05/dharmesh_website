export const WP_API_URL = import.meta.env.VITE_WP_API_URL || 'https://growthrasta.com';

export interface FormattedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export function formatWPPost(post: any): FormattedPost {
  const getFeaturedImage = () => {
    try {
      return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800';
    } catch (e) {
      return 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800';
    }
  };

  const getCategory = () => {
    try {
      return post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
    } catch (e) {
      return 'Uncategorized';
    }
  };

  // Strip HTML tags for excerpts
  const rawExcerpt = post.excerpt?.rendered || '';
  const cleanExcerpt = rawExcerpt.replace(/(<([^>]+)>)/gi, "").trim();

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || 'Untitled',
    excerpt: cleanExcerpt,
    content: post.content?.rendered || '',
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    category: getCategory(),
    image: getFeaturedImage(),
  };
}

/**
 * Fetch latest blog posts from WordPress
 */
export async function getPosts(page = 1, perPage = 10): Promise<{ posts: FormattedPost[], totalPages: number }> {
  try {
    const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    
    const totalPages = response.headers.get('X-WP-TotalPages');
    const rawPosts = await response.json();
    return { posts: rawPosts.map(formatWPPost), totalPages: parseInt(totalPages || '1', 10) };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], totalPages: 0 };
  }
}

/**
 * Fetch a single blog post by its slug
 */
export async function getPostBySlug(slug: string): Promise<FormattedPost | null> {
  try {
    const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch post');
    
    const posts = await response.json();
    return posts.length > 0 ? formatWPPost(posts[0]) : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Fetch posts by a specific category slug (e.g., 'portfolio', 'services')
 */
export async function getPostsByCategory(categorySlug: string, count = 10): Promise<FormattedPost[]> {
  try {
    // 1. Get the category ID from the slug
    const catResponse = await fetch(`${WP_API_URL}/wp-json/wp/v2/categories?slug=${categorySlug}`);
    if (!catResponse.ok) throw new Error('Failed to fetch category');
    const categories = await catResponse.json();
    
    if (categories.length === 0) return []; // Category doesn't exist yet
    
    const categoryId = categories[0].id;

    // 2. Fetch posts belonging to that category ID
    const postResponse = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?_embed&categories=${categoryId}&per_page=${count}`);
    if (!postResponse.ok) throw new Error('Failed to fetch category posts');
    
    const rawPosts = await postResponse.json();
    return rawPosts.map(formatWPPost);
  } catch (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error);
    return [];
  }
}

/**
 * Fetch a single WordPress Page by its slug (e.g., 'about', 'contact')
 */
export async function getPageBySlug(slug: string): Promise<{ title: string, content: string } | null> {
  try {
    const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/pages?slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch page');
    
    const pages = await response.json();
    if (pages.length === 0) return null;

    return {
      title: pages[0].title.rendered,
      content: pages[0].content.rendered
    };
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}
