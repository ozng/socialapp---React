import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Change this end point it should be dynamic user ID...
      const response = await axios.get("posts/feed/6218b45121b9d06c4f267630");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
