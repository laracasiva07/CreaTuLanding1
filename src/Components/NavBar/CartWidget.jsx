import "./cartwidget.css"
import imagen from "./carrito.jpg"
const CardWidget = () => {
    return (
        <div>
            <img src={imagen} alt=""/>
            <strong>3</strong>
        </div>
    )
}
export default CardWidget