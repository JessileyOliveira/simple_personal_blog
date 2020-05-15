import { takeLatest } from 'redux-saga/effects';
import * as post from './Post/sagas';
import * as author from './Author/sagas';

export default function* root() {
  yield takeLatest('REQUEST_POST', post.asyncPost);
  yield takeLatest('REQUEST_AUTHOR', author.asyncAuthor);
}
