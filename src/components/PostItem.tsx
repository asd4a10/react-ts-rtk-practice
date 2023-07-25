import React, { FC } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const handleUpdate = async () => {
    const newTitle = prompt("enter new title");
    updatePost({ ...post, title: newTitle, body: newTitle } as IPost);
  };
  const handleDelete = async () => {
    await deletePost(post.id);
  };

  return (
    <div className="post">
      {post.id}. {post.title} <button onClick={handleUpdate}>update</button>{" "}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default PostItem;
