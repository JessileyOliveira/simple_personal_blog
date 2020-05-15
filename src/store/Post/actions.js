export function getPosts() {
  return {
    type: 'REQUEST_POST',
    payload: {},
  };
}

export function getPostsSuccess(data) {
  return {
    type: 'SUCCESS_POST',
    payload: data,
  };
}

export function getPostsFailure() {
  return {
    type: 'FAILURE_POST',
    payload: {},
  };
}
