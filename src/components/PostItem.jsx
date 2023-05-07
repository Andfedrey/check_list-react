import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyButton } from './UI/button/MyButton';

export function PostItem({ post, remove }) {
  const router = useNavigate();

  const { id, title, body } = post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}
          .
          {' '}
          {title}
        </strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(id)}>Удалить</MyButton>
      </div>
    </div>
  );
}
