import reducer, { INITIAL_STATE } from '../../../store/Author/reducers';
import * as AuthorActions from '../../../store/Author/actions';

describe('Reducers author tests', () => {
  it('test DEFAULT item in switch case', () => {
    const action = {
      type: '',
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('REQUEST_AUTHOR', () => {
    const state = reducer(INITIAL_STATE, AuthorActions.getAuthors());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('SUCCESS_AUTHOR', () => {
    const listAuthor = [
      {
        name: 'Jemma Chadwick',
        id: 1,
      },
      {
        name: 'Nicholas Jordan',
        id: 2,
      },
      {
        name: 'Zinnia Rickard',
        id: 3,
      },
      {
        name: 'Sophie Hawk',
        id: 4,
      },
    ];

    const state = reducer(
      INITIAL_STATE,
      AuthorActions.getAuthorsSuccess(listAuthor)
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      data: listAuthor,
      loading: false,
    });
  });

  it('FAILURE_AUTHOR', () => {
    const state = reducer(INITIAL_STATE, AuthorActions.getAuthorsFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      error: true,
      errorMessage: 'Erro ao consultar autores!',
      loading: false,
    });
  });
});
