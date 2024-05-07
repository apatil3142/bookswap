import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 6px;
  width: 100%;
  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #4e4e4e;
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

interface IInputFieldProps{
  label?: string;
}

type InputFieldTypes = IInputFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<InputFieldTypes> = ({label, ...props}) => {
  return (
    <Container>
    {label && <Label>{label}</Label>}
    <Input
      {...props}
      onChange={props.onChange}
      value={props.value}
      name={label}
    />
  </Container>
  )
}

export default InputField
