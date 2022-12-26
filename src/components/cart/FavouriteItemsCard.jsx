
import { Link} from 'react-router-dom';
import "./FavouriteItemsCard.css";

const FavouriteItemsCard = ({item}) => {
    return (    
        <div className='FavouriteItemsCard'>
        <div>
        <img src={item.image} alt="ssa" />
        <p >Remove</p>
        <Link to={`/product/${item.product}`} style={{
            fontSize:"300 0.9vmax",
            fontFamily:"cursive",
        }}>{item.name}</Link>
        </div>

        <div>
            <span>{`$ ${item.price}`}</span> 
        </div>
    </div>
    )
}

export default FavouriteItemsCard
