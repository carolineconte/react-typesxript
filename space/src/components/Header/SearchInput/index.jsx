/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import search from '/icones/search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

export const SearchInput = ({setFilter}) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" 
            onChange={(e) => setFilter(e.target.value)}/>
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

