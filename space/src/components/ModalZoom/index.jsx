import styled from "styled-components"
import { GalleryCards } from "../Galery/GalleryCards"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Dialog = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: transparent;
  border: none;
  width: 90%;
  display: flex;
  justify-content: center;

  form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
      }
`

/* eslint-disable react/prop-types */
export const ModalZoom = ({ photo, onClose,toggleFavorite }) => {
  return (
    <>
      {/* !!photo -> transformar um obj em boolean */}
      {photo && <>
        <Overlay />
        <Dialog open={!!photo} onClose={onClose}>
          <GalleryCards photo={photo} expandida={true} toggleFavorite={toggleFavorite} />
          <form method="dialog">
            <BotaoIcone formMethod="dialog">
              <img src="/icones/fechar.png" alt="Icone de fechar" />
            </BotaoIcone>
          </form>
        </Dialog>
      </>

      }
    </>
  )
}
