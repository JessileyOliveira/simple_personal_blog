import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import Home from '../../pages/Home';

jest.mock('react-redux');

const store = {
  post: {
    data: [
      {
        title: 'AssCo has revamped the theory of versioning',
        body:
          'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
        metadata: {
          publishedAt: 1492004832000,
          authorId: 2,
        },
      },
      {
        title: 'Matleh',
        body:
          "Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
        metadata: {
          publishedAt: 1431006432000,
          authorId: 1,
        },
      },
      {
        title:
          'Have you ever needed to streamline your feature set? Right now?',
        body:
          "If you monetize magnetically, you may have to mesh transparently. If you monetize interactively, you may have to engage strategically. Think client-focused. Think six-sigma. Think leading-edge. But don't think all three at the same time. The media sourcing factor is one-to-one. Quick: do you have a clicks-and-mortar plan for handling unplanned-for web-readiness? A company that can target correctly will (at some unspecified point in the future) be able to enhance easily. Without open-source, C2C2B structuring, you will lack reporting. Do you have a plan of action to become granular? The ability to repurpose virally leads to the capacity to recontextualize transparently. Think one-to-one. We usually enhance B2B2C re-purposing. That is an amazing achievement taking into account this year's cycle! Think robust.",
        metadata: {
          publishedAt: 1490010372000,
          authorId: 2,
        },
      },
      {
        title: 'Consulted eagerness unfeeling',
        body:
          'Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance. Day either mrs talent pulled men rather regret admire but. Life ye sake it shed. Five lady he cold in meet up. Service get met adapted matters offence for. Principles man any insipidity age you simplicity understood. Do offering pleasure no ecstatic whatever on mr directly. ',
        metadata: {
          publishedAt: 1470166495000,
          authorId: 3,
        },
      },
      {
        title: 'Sang lose of hour then he left find',
        body:
          'Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had.',
        metadata: {
          publishedAt: 1516184567000,
          authorId: 4,
        },
      },
    ],
    error: false,
    errorMessage: '',
    loading: false,
  },
  author: {
    data: [
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
    ],
  },
};

describe('Home tests', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    useSelector.mockImplementation((cb) => cb(store));

    useDispatch.mockReturnValue(jest.fn());
  });

  it('Should show a post list', async () => {
    const { getAllByTestId } = render(<Home />);

    expect(getAllByTestId('post').length).toBe(5);
  });

  it('Should exist select author', async () => {
    const { getByLabelText } = render(<Home />);

    expect(getByLabelText('Autor')).toBeDefined();
  });

  it('Should be able filter per author', async () => {
    const { getAllByTestId, getByLabelText } = render(<Home />);

    expect(getAllByTestId('post').length).toBe(5);

    fireEvent.change(getByLabelText('Autor'), { target: { value: '2' } });

    expect(getAllByTestId('post').length).toBe(2);

    fireEvent.change(getByLabelText('Autor'), { target: { value: '1' } });

    expect(getAllByTestId('post').length).toBe(1);
  });

  it('Should exist select order', async () => {
    const { getByLabelText } = render(<Home />);

    expect(getByLabelText('Ordem')).toBeDefined();
  });

  it('Should be able order per date', async () => {
    const { getAllByTestId, getByLabelText } = render(<Home />);

    expect(getAllByTestId('post')[0].querySelector('#title').innerHTML).toBe(
      'Sang lose of hour then he left find'
    );

    fireEvent.change(getByLabelText('Ordem'), { target: { value: 'old' } });

    expect(getAllByTestId('post')[0].querySelector('#title').innerHTML).toBe(
      'Matleh'
    );

    fireEvent.change(getByLabelText('Ordem'), { target: { value: 'new' } });

    expect(getAllByTestId('post')[0].querySelector('#title').innerHTML).toBe(
      'Sang lose of hour then he left find'
    );
  });

  it('Should show a error message when api error', () => {
    const errorStore = {
      post: {
        data: [],
        error: true,
        errorMessage: 'Erro ao consultar postagens!',
        loading: false,
      },

      author: {
        data: [],
        error: true,
        errorMessage: 'Erro ao consultar autores!',
        loading: false,
      },
    };
    useSelector.mockImplementation((cb) => cb(errorStore));
    const { getByText } = render(<Home />);

    expect(getByText('Erro ao consultar postagens!')).toBeDefined();
    expect(getByText('Erro ao consultar autores!')).toBeDefined();
  });

  it('Should show loader while api loading', () => {
    const errorStore = {
      post: {
        data: [],
        error: false,
        errorMessage: '',
        loading: true,
      },

      author: {
        data: [],
        error: false,
        errorMessage: '',
        loading: true,
      },
    };
    useSelector.mockImplementation((cb) => cb(errorStore));
    const { getByTestId } = render(<Home />);

    expect(getByTestId('postContainer')).toContainElement(
      getByTestId('postLoader')
    );
  });
});
