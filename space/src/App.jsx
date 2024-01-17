//nomalize
import GlobalStyles from "./components/GlobalStyle"
import styled from "styled-components"
import { Header } from "./components/Header"
import { AsideNav } from "./components/AsideNav"
import { HeroBanner } from "./components/HeroBanner"
import { Gallery } from "./components/Galery"

import photos from './fotos.json'
import { useState, useEffect } from "react"
import { ModalZoom } from "./components/ModalZoom"

const BackgroundGradient = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
margin: 0;
`

const PageContainerStyled = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContentGalery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [photosGallery, setPhotosGallery] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [tag, setTag] = useState(0)
  const [filter, setFilter] = useState(0)

  const toggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    setPhotosGallery(photosGallery.map(photoGallery => {
      return {
        ...photoGallery,
        favorite: photoGallery.id === photo.id ? !photo.favorite : photoGallery.favorite
      }
    }))
  }

  useEffect(() => {
    const filteredPhotos = photos.filter(foto => {
      const filterByTag = !tag || foto.tagId === tag;
      const filterByTitle = !filter || foto.titulo.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })
    setPhotosGallery(filteredPhotos)
  }, [filter, tag])

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <PageContainerStyled>
        <Header setFilter={setFilter}/>
        <MainContainer>
          <AsideNav />
          <ContentGalery>
            <HeroBanner />
            <Gallery 
            setTag={setTag}
              photos={photosGallery}
              handleSelected={photo => setSelectedPhoto(photo)}
              toggleFavorite={toggleFavorite}
            />
          </ContentGalery>

        </MainContainer>
      </PageContainerStyled>
      <ModalZoom
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        toggleFavorite={toggleFavorite}
      />
    </BackgroundGradient>
  )
}

export default App
