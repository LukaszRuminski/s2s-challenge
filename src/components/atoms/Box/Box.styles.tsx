import styled from 'styled-components'
import {MainStyle} from "../Text/Text.styles";

export const BoxWrapper = styled.div`
      display: flex;
      flex: 1;
      flex-basis:50%;
      flex-direction: column;
      align-items: center;
`

export const Title = styled(MainStyle)`
    line-height: 40px;
    margin-bottom: 5px;

`

export const Data = styled(MainStyle)`
  line-height: 40px;
  margin-top: 5px;
  margin-bottom: 5px;


`