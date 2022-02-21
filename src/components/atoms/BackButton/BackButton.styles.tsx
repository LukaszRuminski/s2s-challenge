import styled from 'styled-components'

export const BackButtonWrapper = styled.a`
    position: absolute;
    top: 2%;
    transform: translate(50%,50%);
    width: 40px;
    height: 30px;
    cursor: pointer;
`
export const BackButtonStyled = styled.div`
  position: absolute;
  top: 25px;
  width: 90%;
  height: 8px;
  background-color: #000000;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
  //animation: arrow 700ms linear infinite;

  &::after, &::before {
    content: '';
    position: absolute;
    width: 60%;
    height: 7px;
    right: 21px;
    background-color: #000000;
  }

  &::after {
    top: -6px;
    transform: rotate(135deg);
  }

  &::before {
    top: 6px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
    transform: rotate(-135deg);
  }
`