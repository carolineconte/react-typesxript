/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { Title } from '../Title'
import { Popular } from './Popular'
import { Tags } from './Tags'
import { GalleryCards } from './GalleryCards'

const GalleryContainer = styled.div`
  display: flex;
`

const FluidSection = styled.section`
  flex-grow: 1;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: auto auto;
`

export const Gallery = ({ photos = [], handleSelected,toggleFavorite,setTag }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>

        <FluidSection>
          <Title>Browse the gallery</Title>
          <CardsContainer>
          {
            photos.map(photo => <GalleryCards
              key={photo.id}
              photo={photo}
              onZoom={handleSelected}
              toggleFavorite={toggleFavorite}
              />)
          }
          </CardsContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>

    </>
  )
}
