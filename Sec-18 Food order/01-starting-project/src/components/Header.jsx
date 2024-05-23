import { useContext } from "react";
import image from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import Button from "./UI/button";
import UserProgressContext from "../store/UserProgressContext";


export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return(
        <header id="main-header">
            <div id="title">
                <img src={image} alt="A meal order" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}