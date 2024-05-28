import Link from 'next/link';

export default function Post({ post }) {
  const handleReadMoreClick = (e) => {
    e.preventDefault();
    window.location.href = `/blog/${post.slug}`;
    window.open(post.frontmatter.externalLink, '_blank');
  };

  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <a className='btn' onClick={handleReadMoreClick}>Read More</a>
      </Link>
    </div>
  );
}
