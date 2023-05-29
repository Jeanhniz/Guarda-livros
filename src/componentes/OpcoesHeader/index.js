import styled from 'styled-components'

const OpcoesContainer = styled.ul`
    display: flex;
`
const OpcoesLi = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = () => {
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
                <OpcoesLi><p>{texto}</p></OpcoesLi>
            ))}
        </OpcoesContainer>
    )
}

export default Opcoes