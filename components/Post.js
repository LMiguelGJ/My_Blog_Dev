import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    window.open(post.frontmatter.externalLink, '_blank');
    setTimeout(() => {
      router.push(`/blog/${post.slug}`);
    }, 100); // 100 ms delay before redirecting
  };

  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <a className='btn' href='#' onClick={handleReadMoreClick}>
        Read More
      </a>
    </div>
  );
}
