/* eslint-disable react/prop-types */
import styled from "styled-components"

const ListItemStyled = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
  font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSans'};
  display: flex;
  align-items: center;
  gap: 22px;
`
export const ItemNav = ({children, iconActive,iconInactive, isActive = false}) => {
  return (
    <ListItemStyled $active ={isActive}>
    <img src={isActive ? iconActive :iconInactive } alt="icon-homepage" />
    {children}
    </ListItemStyled>
  )
}


