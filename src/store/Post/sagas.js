import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

import { getPostsSuccess, getPostsFailure } from './actions';

export function* asyncPost() {
  try {
    const response = yield call(api.get, 'v2/5be5e3fa2f000082000fc3f8');

    if (response.status === 200) {
      const { data } = response;

      yield put(getPostsSuccess(data));
    } else {
      yield put(getPostsFailure());
    }
  } catch (e) {
    yield put(getPostsFailure());
  }
}
