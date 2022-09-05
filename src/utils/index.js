import QueryString from 'qs';

/*
 * @Author: jweboy
 * @Date: 2022-09-05 18:29:22
 * @LastEditors: jweboy
 * @LastEditTime: 2022-09-05 18:30:58
 */
export function serializateQuery(
  data,
  addQueryPrefix = true,
) {
  return QueryString.stringify(data, { addQueryPrefix });
}

export function serializateUrlWithQuery(
  url,
  data,
  hash,
) {
  const query = serializateQuery(data);
  const _hash = hash || '';
  return (
    url + query + `${_hash && _hash?.indexOf('#') === -1 ? `#${_hash}` : _hash}`
  );
}