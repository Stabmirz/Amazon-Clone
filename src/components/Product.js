import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>
                Ipad pro
            </Title>
            <Price>
                $1200.00
            </Price>
            <Rating>
            ⭐⭐⭐⭐⭐
            </Rating>
            <Image src="https://images.pricerunner.com/product/1200x630/1869451292/Apple-iPad-Pro-(2018)-12.9-512GB.jpg"/>
            <ActionSection>
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

const Container = styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    padding:20px;
    margin:10px;
    max-height:400px;
    display:flex;
    flex-direction:column;
`
const Title = styled.span`

`
const Price = styled.span`
    font-weight:500;
    margin-top:3px;
`
const Rating = styled.div`

`
const Image = styled.img`
    max-height:200px;
    object-fit:contain;
`

const ActionSection = styled.div`
    margin-top:12px;
    display:grid;
    place-items:center;
`

const AddToCartButton = styled.button`
    width:100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius:2px;
`

export default Product
