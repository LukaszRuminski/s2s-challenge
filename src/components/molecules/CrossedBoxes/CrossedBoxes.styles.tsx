import styled from 'styled-components'

const setBorder = (props) => props.border.size + 'px solid ' + props.border.color
export const CrossedBoxesWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
  & div:nth-child(1) {
    border-right: ${props =>  setBorder(props)};
    border-bottom: ${props =>  setBorder(props)};
  }
  & div:nth-child(2) {
    border-bottom: ${props =>  setBorder(props)};
  }
  & div:nth-child(3) {
    border-right: ${props =>  setBorder(props)};
  }
  & div:nth-child(4) {

  }
  @media (min-width: 768px) {
    width: 30%
  }
`;