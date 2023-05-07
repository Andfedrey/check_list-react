import React, { useEffect, useRef, useState } from 'react';
import PostService from '../../API/PostSevice';
import { getPageCount } from '../../utils/page';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePost';
import { PostFilter } from '../PostFilter';
import { PostList } from '../PostList';
import { MyButton } from '../UI/button/MyButton';
import { MyLoader } from '../UI/loading/MyLoader';
import { MyModal } from '../UI/modal/MyModal';
import { MyPagination } from '../UI/pagination/MyPagination';
import { PostForm } from '../UI/post/PostForm';
import { MySelect } from '../UI/select/MySelect';

export const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'js1', body: 'Description' },
    { id: 2, title: 'js2', body: 'Description' },
    { id: 3, title: 'js3', body: 'Description' },
  ]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });
  const lastElement = useRef();
  useObserver(lastElement, page < totalPage, isPostsLoading, () => { setPage(page + 1); });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: '20px' }}>
        Создать модальное окно
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="кол-во элементов"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' }
        ]}
      />
      {postError
        && <h1>Произошла ошибка</h1>}
      {isPostsLoading && (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
      >
        {' '}
        <MyLoader />
      </div>
      )}
      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Post list 1"
      />
      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      <MyPagination totalPage={totalPage} page={page} changePage={changePage} />
    </div>
  );
};
