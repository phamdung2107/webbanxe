import Footer from "../more/Footer";
import Header from "../Home/Header";
import ProductCard from "./ProductCard";
import "./Product.css";
import Typography from "@mui/material/Typography";
import MetaData from "../more/Metadata";

const categories = [
  "Tất cả",
  "Xe số",
  "Xe tay ga",
  "Xe tay côn",
  "Xe mô tô",
];

const products = [
  {
    id: "1",
    name: "toyota",
    description: "bgwdiquwdiqw",
    images: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    offerPrice:10,
    price: 1000
  },
  {
    id: "2",
    name: "toyota",
    description: "bgwdiquwdiqw",
    images: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    offerPrice:10,
    price: 1000
  },
  {
    id: "3",
    name: "toyota",
    description: "bgwdiquwdiqw",
    images: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    offerPrice:10,
    price: 1000
  },
]

const Products = () => {

  return (
        <>
          <MetaData title="Products" />
          <Header />
          <div>
            {products.length === 0 ? (
              ""
            ) : (
              <h2
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgba(21,21,21,0.5)",
                  width: "20vmax",
                  fontSize: "1.4vmax",
                  fontFamily: "Poppins,sans-serif",
                  margin: "3vmax auto",
                  color: "rgb(0, 0, 0, 0.7)",
                }}
              >
              Outstanding car model
              </h2>
            )}
            <div
              className="sidebar__product"
              style={{
                display: "flex",
                flex: 1,
              }}
            >
              <div
                className="sidebar__products"
                style={{
                  border: "1px solid #999",
                  margin: "1vmax",
                  flex: ".177",
                }}
              >
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  Chọn loại xe 
                </Typography>
                <ul className="categoryBox">
                  {categories.map((category, index) => (
                    <li
                      className="category-link"
                      key={index}
                      type="checkbox"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  QUICK LINKS
                </Typography>
                <li className="category-link">Đã Mua</li>
              </div>

              {products.length === 0 ? (
                <span
                  style={{
                    display: "block",
                    padding: "30px 0",
                    fontSize: "1.5rem",
                    flex: ".9",
                    textAlign: "center",
                  }}
                >
                  No Product Found ....
                </span>
              ) : (
                <div
                  className="products"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flex: ".9",
                  }}
                >
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              )}
            </div>

          </div>
          <Footer />
    </>
  );
};

export default Products;
