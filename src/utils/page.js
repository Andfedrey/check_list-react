export const getPageCount = (totalCount, limit) => Math.ceil(totalCount / limit);

export const getPageArray = (totalPage) => {
  const result = [];
  for (let i = 0; i < totalPage; i++) {
    result.push(i + 1);
  }
  return result;
};
