import React from 'react';
import "./Favourites.css";
import { Typography } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import FavouriteItemsCard from './FavouriteItemsCard.jsx';
import MetaData from '../more/Metadata';

const favouriteItems = [{
  image: "test.com",
  name: "test.com",
  price: 12,
}]

const Favourites = () => {
    return (
        <>
        <MetaData title="Favourites Items" />
        {favouriteItems.length === 0 ? (
            <div className="emptyCart">
            <RemoveShoppingCartIcon />
            <Typography>No Items In Favourites</Typography>
            <Link to="/products">View Products</Link>
          </div>
        ): (
            <>
              <div className="favouritesPage">
                <div className="favouritesHeader">
                <p>Product</p>
                <p>Price</p>
                <p>Stock Status</p>
                <p>Action</p>
                </div>
                {favouriteItems &&
                favouriteItems.map((item) => (
                    <div className="favouritesContainer" key={item.product}>
                        <FavouriteItemsCard item={item} />
                    </div>
                ))
                }
              </div>
        </>
       )}
       </>
    )
}

export default Favourites
