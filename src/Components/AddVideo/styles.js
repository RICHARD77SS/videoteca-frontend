import Styled from 'styled-components';

export const VideosSt = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`

export const AddVideoSt = Styled.button`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: #ccc;
  border: 2px dashed #000;
  font-size:2rem;
  :hover {
    background: #fff; 
  }
`