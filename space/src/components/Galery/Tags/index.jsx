/* eslint-disable react/prop-types */
import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  color: #D9D9D9;
  font-size: 24px;
`

const ButtonStyled = styled.button`
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-left: 24px;
    &:hover {
      border-color: #C98CF1;
    }
`

export const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <h3>Search by tags:</h3>
      {
        tags.map(tag => <ButtonStyled key={tag.id}
          onClick={() => setTag(tag.id)}>
          {tag.titulo}
        </ButtonStyled>)
      }
    </TagsContainer>
  )
}
