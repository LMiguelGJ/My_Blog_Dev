import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <Link href={`${post.frontmatter.cover_image}`} target='_blank'>
      <img src={post.frontmatter.cover_image} alt='' />
      </Link>

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}