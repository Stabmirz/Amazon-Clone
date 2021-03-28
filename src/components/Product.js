import styled from 'styled-components'
import {db} from "../firebase"

function Product({id,title,price,image,rating }) {

    const addToCart =()=>{
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc)
            if(doc.exists){
                cartItem.update({
                    quantity:doc.data().quantity + 1
                })
            }else{
                db.collection("cartItems").doc(id).set({
                    image:image,
                    name:title,
                    price:price,
                    quantity:1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
            ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating=> <p>⭐</p>)
                }
            </Rating>
            <Image src={image}/>
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add To Cart
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
    display:flex;
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
    cursor:pointer;
`

export default Product
