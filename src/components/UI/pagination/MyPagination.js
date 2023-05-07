import React from 'react';
import { getPageArray } from '../../../utils/page';

export const MyPagination = ({ totalPage, page, changePage }) => {
  const pageArray = getPageArray(totalPage);
  return (
    <div className="page__wrapper">
      {pageArray.map((p) => (
        <span
          className={page === p ? 'page page__current' : 'page'}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
