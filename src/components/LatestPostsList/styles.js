import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 200px;
  min-width: 200px;
  border-right: 1px solid rgba(255, 255, 255, 0.6);

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Title = styled.h4`
  width: 100%;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 4px 0px;
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 4px 0px;

  & li {
    padding: 8px 8px 0px 0px;
    font-weight: 600;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.87);
  }

  & li div {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    text-align: right;
    color: rgba(255, 255, 255, 0.6);
    padding: 4px 8px 4px 0px;
  }
`;
