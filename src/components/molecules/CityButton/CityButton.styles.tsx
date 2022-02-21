import styled from 'styled-components'
import {white} from "../../../constants/colors";
import {mapFontSize} from "../../../helpers/fonts";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #2595de;
  color: ${white};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2595de;
  border-radius: 3px;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 30%
  }
`;

export const City = styled.p`
  color: ${white};
  font-size: ${(props) => mapFontSize(props.fontSize)};
  width: 60%;
  text-align: left;
`