import styled from '@emotion/styled';

export const Contact = styled.li`
  margin-bottom: 4px;
`;

export const ContactBtn = styled.button`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid black;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }

  :active {
    box-shadow: 3px 3px 10px 2px #000000;
  }
`;
