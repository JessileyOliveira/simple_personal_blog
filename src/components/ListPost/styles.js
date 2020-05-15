import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 12px;

  @media (max-width: 720px) {
    padding: 0px;
  }
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 12px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 12px;

  & label {
    font-size: 12px;
    color: #fff;
    margin-left: 2px;
  }
`;

export const Select = styled.select`
  height: 36px;
  font-size: 14px;
  padding: 4px;
  background: #272727;
  color: #ededed;
`;

export const Error = styled.div`
  width: 100%;
  color: #ff0000;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
