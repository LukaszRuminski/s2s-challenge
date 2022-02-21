import styled from 'styled-components'

export const DashboardStyled = styled.div`
  display: flex;
  color: #1b8699;
  flex-direction: column;
  font-weight: 700;
  margin: 10px;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    text-align: center;
    align-items: center;
  }
`

export const ShowAddCityButton = styled.a`
  
`
export const AddCityWrapper = styled.div`
    display: flex;
  flex-direction: column;
  
  `
export const AddCityInput = styled.input`
  
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const AddCityButton = styled.a`

`
export const CancelCityButton = styled(AddCityButton)`

`

