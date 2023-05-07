import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PostItem } from './PostItem';
import '../styles/App.css';

export function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Post undefined</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        { posts.map((el, index) => (
          <CSSTransition
            key={el.id}
            timeout={500}
            classNames="post"
          >
            <PostItem number={index + 1} post={el} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
