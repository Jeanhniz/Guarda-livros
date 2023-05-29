import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Logoo = styled.div`
    display: flex;
    font-size: 30px;
`
const Img = styled.img`
    margin-right: 10px;
`

const Logo = () => {
    return (
        <Logoo>
            <Img src={logo} alt='logo'/>
            <p><strong>Guarda</strong>Livros</p>
        </Logoo>
    )
}

export default Logo