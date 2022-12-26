import Carousel from "react-material-ui-carousel";
import Footer from "../more/Footer";
import MetaData from "../more/Metadata";
import Header from "../Home/Header";
import "./ProductDetails.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    name: "Khối lượng bản thân",
    calories: "Tiêu chuẩn Cao cấp: 117 kg",
  },
  {
    name: "Khối lượng bản thân",
    calories: "Tiêu chuẩn Cao cấp: 117 kg",
  },
  {
    name: "Khối lượng bản thân",
    calories: "Tiêu chuẩn Cao cấp: 117 kg",
  },
  {
    name: "Khối lượng bản thân",
    calories: "Tiêu chuẩn Cao cấp: 117 kg",
  },
  {
    name: "Khối lượng bản thân",
    calories: "Tiêu chuẩn Cao cấp: 117 kg",
  },
];

const product = {
  id: "1",
  name: "toyota",
  description: "Lần đầu tiên được Honda Việt Nam giới thiệu, với thiết kế của mẫu xe ga thể thao độc đáo, năng động và linh hoạt trên từng cung đường, động cơ eSP+ 4 van 160cc đầy uy lực cùng những tiện ích vượt trội; VARIO 160 hứa hẹn sẽ mang lại những trải nghiêm vô cùng ấn tượng cho khách hàng luôn sống hết mình với đam mê.",
  images: [
    {
      url: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    },
    {
      url: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2021_01_21/2101xe2.jpg",
    },
  ],
  offerPrice: 10,
  price: 1000,
};

const ProductDetails = () => {
  return (
    <>
      <MetaData title={`${product.name}`} />
      <Header />
      <div className="ProductDetails">
        <div className="first__varse">
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={i}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className="varse__2">
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
          </div>
          <div className="detailsBlock">
            <div
              style={{
                display: "flex",
              }}
            >
              <h1>{`$${product.price}`}</h1>
              <h1 className="discountPrice">
                {product.offerPrice > 0 ? `$${product.offerPrice}` : ""}
              </h1>
            </div>
            <div
              className="Description"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Description:</span>
              <p className="mmr30">{product.description}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="pointer flex"
                style={{
                  padding: "10px 5px",
                  alignItems: "center",
                  backgroundColor: "#E4EAEC",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <button
                  className="cartBtn"
                  style={{
                    opacity: 0.7,
                    padding: "0px 5px",
                    border: "none",
                    cursor: "pointer",
                    background: "none",
                  }}
                >
                  Xem sau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info">
        <h1>Thông số kĩ thuật</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert</TableCell>
                <TableCell align="center">Calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
