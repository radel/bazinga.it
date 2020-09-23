import React from "react"
import { Link } from "gatsby"

const PostList = ({ children, posts }) => {
  return (
    <div>
      <h2>My Latest Posts</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {posts.map(({ id, excerpt, frontmatter, body }) => (
          <PostCard
            key={id}
            cover={frontmatter.cover}
            title={frontmatter.title}
            date={frontmatter.date}
            path={frontmatter.path}
          />
        ))}
      </div>
    </div>
  )
}

const PostCard = ({ title, date, cover, path }) => {
  let coverImg = cover ? (
    <img
      src={cover.childImageSharp.fluid.src}
      className="object-fit rounded-lg shadow-lg mb-8"
      alt={title}
    />
  ) : (
    ""
  )
  return (
    <div className="py-4 border-b border-gray-300 dark:border-gray-700">
      <Link to={path}>
        {coverImg}
        <h1 className="text-2xl font-bold dark:text-gray-400 text-gray-800">
          {title}
        </h1>
      </Link>
    </div>
  )
}
export default PostList
