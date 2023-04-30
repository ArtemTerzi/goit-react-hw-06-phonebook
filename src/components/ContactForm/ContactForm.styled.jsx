import styled from '@emotion/styled';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 24px;

  border: 1px solid black;
  border-radius: 16px;
`;

export const FormLabel = styled.label`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const FormButton = styled.button`
  padding: 8px;
  border-radius: 16px;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }

  :active {
    box-shadow: 3px 3px 10px 2px #000000;
  }
`;
