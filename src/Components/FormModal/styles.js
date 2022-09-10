import Styled from 'styled-components';

import { IoClose, IoCheckmark } from 'react-icons/io5';

export const Overlay = Styled.div`
  background: rgba(255,255,255,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = Styled.div`
  background: #ccc;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  padding: 2rem 3rem;
  box-shadow: 0 0 60px rgba(0,0,0,2);
  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;

  color: #000;
  background: transparent;
  padding: 0;

  font-size: 1rem;
  button {
    border: none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const FormContainer = Styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

`

export const FormMain = Styled.div`
  margin: auto 0;
  display: flex;
  flex-direction:column;
  gap: 1rem;
`

export const InputGroup = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-size: 1rem;
  }
  input {
    border: none;
    color: #000;
    background: #fff;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    padding-left: 10px;
  }
`

export const Footer = Styled.footer`
  display: flex;
  justify-content: center;
  button {
    align-self: center;
    background: #b4ecb4;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    transition: opacity 0.2s;
    :hover {
      opacity: 0.5;
    }
  }
`

export const CheckIcon = Styled(IoCheckmark)`
  color: #000;
  width: 2rem;
  height: 2rem;
`

export const CloseIcon = Styled(IoClose)`
  color: #000;
  width: 2rem;
  height: 2rem; 
`