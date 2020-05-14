import styled from 'styled-components';

export const Container = styled.div`
  background: #fcfafa;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);

  & > #title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 4px;
    border-bottom: 1px solid #eee;
    margin-bottom: 4px;
  }

  & > #body {
    word-wrap: break-word;
    font-size: 14px;
    padding: 4px 0px;
  }
`;

export const Details = styled.div`
  margin-top: 4px;
  border-top: 1px solid #eee;
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
  color: #bbb;

  & > div {
    font-size: 12px;
  }
`;
