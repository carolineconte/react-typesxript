/* eslint-disable react/prop-types */
import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        p {
            flex-grow: 1;
        }
        h3,
        p {
            margin: 0;
            font-size: 16px;
        }
    }
`
const Rodape = styled.footer`
    display: grid;
    grid-template-columns: auto 40px 40px;
    align-items: center;
`

export const GalleryCards = ({ photo, expandida = false, onZoom, toggleFavorite  }) => {
  const { titulo, fonte, path, alt, id, favorite } = photo

  const favoriteIcon = favorite ? "/icones/favorito-ativo.png" : "/icones/favorito.png"
  
    return (<Figure $expandida={expandida} id={`foto-${id}`}>
        <img src={path} alt={alt} />
        <figcaption>
            <h3>{titulo}</h3>
            <Rodape>
                <h4>{fonte}</h4>
                
                <BotaoIcone onClick={() => toggleFavorite(photo)}>
                    <img src={favoriteIcon} alt="Icone de favorito" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida}
                onClick={() => onZoom(photo)}
                >
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
                
            </Rodape>
        </figcaption>
    </Figure>)
  
}
