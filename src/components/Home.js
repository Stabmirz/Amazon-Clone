import {useEffect,useState} from 'react';
import styled from 'styled-components'
import Product from "./Product"
import {db} from "../firebase"

function Home() {

    const [products, setProducts] = useState([]);

    const getProducts = () =>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc)=> (
            {
                id:doc.id,
                product:doc.data()
            }
            ));
            setProducts(tempProducts);

        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    products.map((data)=>(
                        <Product 
                            id={data.id}
                            title={data.product.name}
                            image={data.product.image}
                            price={data.product.price}
                            rating={data.product.rating}
                        />
                    ))
                }
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
