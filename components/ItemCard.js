import Image from "next/image";
import React from "react";
import { Card } from 'primereact/card';


    // const handleDragStart = (event) => {
    //     event.dataTransfer.setData("text/plain", src);
    // };

    //  draggable
    // onDragStart={handleDragStart}
    // style={{
    //     width: "200px",
    //     height: "200px",
    //     margin: "10px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "#f0f0f0",
    //     border: "1px dashed black",
    //     padding: "20px",
    //     minHeight: "200px",
    //     display: "flex",
    //     flexWrap: "wrap",
    // }}
    //>

function ItemCard({key, image, title, description }) {
  const header = (
    <Image key={key} src={image} alt="Card Image" objectFit="cover" width={200} height={200} />

  );

  return (
    <Card title={title} header={header}>
      <p>{description}</p>
    </Card>
  );
}

export default ItemCard;
