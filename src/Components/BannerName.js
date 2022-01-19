import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "Rp. ";
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        Dapatkan diskon s/d <span>{`${currency}${discount}`}</span>{" "}
        untuk pembelian pertama
      </p>
      <a href={more}>Learn More</a>
    </div>
  );
}

export default BannerName;
