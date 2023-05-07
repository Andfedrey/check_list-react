import React from 'react';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

export const PostFilter = ({ filter, setFilter }) => (
  <div>
    <MyInput
      placeholder="search..."
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
    />
    <MySelect
      defaultValue="сортировка"
      options={[
        { value: 'title', name: 'по названию' },
        { value: 'body', name: 'по описанию' },
      ]}
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
    />
  </div>
);
