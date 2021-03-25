import styled from 'styled-components'
import Product from "./Product"

function Home() {
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                <Product/>
                <Product/>
            </Content>
        </Container>
    )
}
const Container = styled.div`
    max-width:1500px;
    margin:0 auto;
`

const Banner = styled.div`
    background-image: url(https://i.imgur.com/SYHeuYM.jpg);
    min-height:600px;
    background-position:cover;
    background-size:cover;
    z-index:1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    padding-left:10px;
    padding-right:10px;
    margin-top:-350px;
    z-index:100;
    display:flex;
`

export default Home
