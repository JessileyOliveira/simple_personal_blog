import styled from 'styled-components';

export const Container = styled.div`
  background: #1e1e1e;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  color: #ededed;
  line-height: 1.4;

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
    padding: 8px 0px;
    color: rgba(237, 237, 237, 0.87);
  }
`;

export const Details = styled.div`
  margin-top: 4px;
  border-top: 1px solid #eee;
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
  color: rgba(237, 237, 237, 0.6);

  & > div {
    font-size: 12px;
  }
`;
