import styled from 'styled-components';

export const Container = styled.div`
  width: 1020px;
  margin: 0 auto;
  padding: 12px;
  display: flex;
`;

export const PostContainer = styled.div`
  width: 100%;
  padding: 0px 12px;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 12px;

  & label {
    font-size: 12px;
    color: #222;
    margin-left: 2px;
    color: #444;
  }
`;

export const Select = styled.select`
  height: 36px;
  font-size: 14px;
  padding: 4px;
`;
