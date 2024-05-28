import Link from 'next/link'


export default function Post({ post }) {
  const handleReadMoreClick = (e) => {
    e.preventDefault();
    window.open(post.frontmatter.externalLink, '_blank');
    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <div className='card'>
          <img src={post.frontmatter.cover_image} alt='' onClick={handleReadMoreClick}/>
      {/* <Link href={post.frontmatter.externalLink} passHref>
        <a target='_blank'>
        </a>
      </Link> */}

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}
