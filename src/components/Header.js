import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link  } from 'react-router-dom';

function header({ user, cartItems, signOut }) {
    const getCount = () =>{
        let count = 0;
        //  loop through the cart items to get the total items
        cartItems.forEach((item)=>{
            count += item.product.quantity
        })
        return count;
    }

    return (
        <Container>
            <Link to="/">
                <HeaderLogo>
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </HeaderLogo>
            </Link>
        
            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text"/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>{user.name}</OptionLineOne>
                    <OptionLineTwo>Account & List</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon/>
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>

            </HeaderNavItems>
        
        </Container>
    )
}

const Container = styled.div`
    height:60px;
    background-color: #0F1111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;
`

const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`

const HeaderOptionAddress = styled.div`
    padding-left:9px;
    display:flex;
    align-items:center;
    cursor:pointer;

`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    font-weight:700;

`

const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left:4px;
    background-color:white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow:1;
    border:0;

    :focus{
        outline:none;
    }

`
const HeaderSearchIconContainer = styled.div`
    background-color:#febd69;
    width: 45px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
`

const HeaderNavItems = styled.div`
    display:flex;
`
const HeaderOption = styled.div`
    padding:9px 9px 10px 10px;

`
const HeaderOptionCart = styled.div`
    display:flex;
    a{
        display:flex;
        padding:9px;
        align-items:center;
        color:white;
        text-decoration:none;
    }

`
const CartCount = styled.div`
    padding-left:4px;
    font-weight:700;
    color:#f08804;
    
`

export default header
