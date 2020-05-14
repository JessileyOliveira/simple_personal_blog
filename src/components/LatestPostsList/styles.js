import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 200px;
  min-width: 200px;
  border-right: 1px solid #aaa;
`;

export const Title = styled.h4`
  width: 100%;
  color: #2a324b;
  border-bottom: 1px solid #aaa;
  padding: 4px 0px;
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: '- ';
  list-style-position: inside;
  padding: 4px 0px;

  & li {
    padding: 4px 4px 4px 8px;
    font-weight: bold;
    font-size: 14px;
  }

  & li div {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    text-align: right;
    color: #777;
    padding: 4px 8px 4px 0px;
  }
`;
