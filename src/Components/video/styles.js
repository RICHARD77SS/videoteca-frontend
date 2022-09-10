import Styled from 'styled-components';

export const EditSt = Styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #f4f4f4;
  a{
    font-size: .8rem;
  }
`

export const Flex = Styled.div`
  width: 200px;
  height: auto;
  display:flex;
  align-items: center;
  justify-content: space-around;
  button{
    
  }
`
export const Button = Styled.button`
  background: transparent;
  border: none;
  svg{
    color: ${(Props) => (Props.liked ? "#00f" : "#000")};
  }
`