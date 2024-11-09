import React from "react";

function Model() {
  return (
    <div className="model pb-10">
      {" "}
      <div className="model leading-none pl-5">
        <h1 className="text-6xl dark:text-white  font-porsche font-medium">
          360
        </h1>
        <h1 className="text-6xl font-porsche text-red-800 font-medium">view</h1>
      </div>
      <div className="sketchfab-embed-wrapper ">
        <iframe
          className="w-[100%] h-[500px]"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/e738eae819c34d19a31dd066c45e0f3d/embed"
        ></iframe>
        {/* <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        > */}
        {/* <a
            href="https://sketchfab.com/3d-models/porsche-gt3-rs-e738eae819c34d19a31dd066c45e0f3d?utm_medium=embed&utm_campaign=share-popup&utm_content=e738eae819c34d19a31dd066c45e0f3d"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Porsche GT3 RS
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/BlackSnow02?utm_medium=embed&utm_campaign=share-popup&utm_content=e738eae819c34d19a31dd066c45e0f3d"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Black Snow
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e738eae819c34d19a31dd066c45e0f3d"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a> */}
        {/* </p> */}
      </div>
    </div>
  );
}

export default Model;
