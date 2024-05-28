import Link from 'next/link';

export default function Post({ post }) {
  const handleClick = (e) => {
    e.preventDefault();
    const newWindow = window.open(post.frontmatter.externalLink, '_blank');
    if (newWindow) {
      newWindow.opener = null; 
    } else {
      window.location.href = `/blog/${post.slug}`;
    }
  };
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <a className='btn' onClick={handleClick}>Read More</a>
      </Link>
    </div>
  );
}
