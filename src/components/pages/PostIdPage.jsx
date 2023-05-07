import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostSevice';
import { useFetching } from '../hooks/useFetching';
import { MyLoader } from '../UI/loading/MyLoader';

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = useFetching(async () => {
    const response = await PostService.getById(params.postId);
    setPost(response.data);
  });
  const [fetchComment, isComLoading] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.postId);
    setComments(response.data);
  });
  console.log(comments);
  useEffect(() => {
    fetchPostById(params.postId);
    fetchComment(params.postId);
  }, []);

  return (
    <>
      <h1>
        вы попали на страницу поста c id =
        {' '}
        {params.postId}
      </h1>
      {isLoading ? <MyLoader />
        : (
          <div>
            {post.id}
            .
            {post.title}
          </div>
        )}
      <h1>Комментарии</h1>
      {isComLoading
        ? <MyLoader />
        : (
          <div>
            {comments.map((comm) => (
              <div>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
                <br />
              </div>
            ))}
          </div>
        )}
    </>
  );
};
