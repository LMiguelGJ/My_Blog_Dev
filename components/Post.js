export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' href={`${post.frontmatter.externalLink}`} passHref target='_blank'/>

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  );
}
