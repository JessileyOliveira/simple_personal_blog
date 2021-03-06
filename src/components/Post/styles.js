import styled from 'styled-components';

export const Container = styled.div`
  background: #272727;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  color: #ededed;
  line-height: 1.4;

  & > #title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 4px;
    border-bottom: 1px solid #efefef;
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
  border-top: 1px solid #efefef;
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
  color: rgba(237, 237, 237, 0.38);

  & > div {
    font-size: 12px;
  }
`;
