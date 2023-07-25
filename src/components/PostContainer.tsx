import React, { useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt("name the post");
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      <button onClick={handleCreate}>create post</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};

export default PostContainer;
