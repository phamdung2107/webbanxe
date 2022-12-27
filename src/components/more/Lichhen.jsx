import React, { useRef } from "react";
import MetaData from "./Metadata";
import "./Lichhen.css";

const product = {
  id: "1",
  name: "toyota",
  description:
    "Lần đầu tiên được Honda Việt Nam giới thiệu, với thiết kế của mẫu xe ga thể thao độc đáo, năng động và linh hoạt trên từng cung đường, động cơ eSP+ 4 van 160cc đầy uy lực cùng những tiện ích vượt trội; VARIO 160 hứa hẹn sẽ mang lại những trải nghiêm vô cùng ấn tượng cho khách hàng luôn sống hết mình với đam mê.",
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

const Lichhen = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <MetaData title="Đặt lịch xem xe" />
      <div
        className="support"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <h2
          className="support__heading"
          style={{
            textAlign: "center",
          }}
        >
          Đặt lịch hẹn xem xe
        </h2>
        <div>
          <form
            style={{
              width: "400px",
              margin: "auto",
              padding: "20px 0",
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <button
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              name="user__name"
              value={product.id}
            >{product.name}</button>
            <input
              type="text"
              placeholder="Tên của bạn ..."
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              name="user__name"
            />
            <input
              type="text"
              placeholder="Đặt lịch hẹn ..."
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              name="user__subject"
            />
            <input
              type="email"
              placeholder="Email của bạn ..."
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
            />
            <textarea
              cols="30"
              rows="5"
              required
              placeholder="Ghi chú thêm ..."
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
              }}
              name="user__message"
            ></textarea>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                width: "100%",
                background: "#3BB77E",
                height: "40px",
                margin: "10px 0",
                color: "#fff",
                fontSize: "1.2vmax",
              }}
            >
              Submit
            </button>
          </form>
          <div className="animation"></div>
        </div>
      </div>
    </>
  );
};

export default Lichhen;
