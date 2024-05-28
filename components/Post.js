export default function Post({ post }) {
  const handleReadMoreClick = (e) => {
    e.preventDefault();
    window.open(post.frontmatter.externalLink, '_blank');
    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' onClick={handleReadMoreClick}/>

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <a className='btn' href={`/blog/${post.slug}`} passHref>Read More</a>
    </div>
  );
}
