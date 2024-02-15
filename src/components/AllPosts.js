// src/components/AllPosts.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import createClient from "../client.js";

export default function AllPosts() {
  const[allPostsData, setAllPosts] = React.useState(null);

  useEffect(() => {
 createClient
 .fetch(
    `*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
      _id,
      url
    }
  }
}`
  )
  .then((data) => setAllPosts(data))
  .catch(console.error);
}, []);

return (
    <div>
        <h2>All Posts Page</h2>
        {allPostsData &&
            allPostsData.map((post, index) => (
            <Link to={`/${post.slug.current}`} key={post.slug.current}>
                <span key={index}>
                <h2>{post.title}</h2>
                <img src={post.mainImage.asset.url} alt={post.title} />
                </span>
            </Link>
            ))}
    </div>
);
}
