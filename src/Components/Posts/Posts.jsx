import React from 'react'
import { useSelector } from 'react-redux'
import './post.css'

const Posts = () => {
    const post = useSelector(state => state.post.posts)
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  return (
    <>
        <section className="post-container">
            {post.slice(1).map((post,idx) => (
                <div className="posts">
                    <div className="posts-title">{post.title}</div>
                    <div className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</div>
                    <div className="posts-description">{post.description}</div>
                </div>
            ))}
        </section>
    </>
  )
}

export default Posts