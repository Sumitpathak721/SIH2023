import React, { useState, useRef } from "react";
import "./ScanImage.css";

const ScanImage = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [text, setText] = useState("");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [prevImage, setPrevImage] = useState(false);
  const [toggleDisabled, settoggleDisabled] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };
  const captureImage = () => {
    settoggleDisabled(true);
    setText("Scanning...");
    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas
      .getContext("2d")
      .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    const imageUrl = canvas.toDataURL("image/png");
    setCapturedImage(imageUrl);
    setPrevImage(true);
  };
  console.log("hello", captureImage);

  const videoRef = useRef();
  return (
    <section className="Image-Scan-section">
      <div className="Image-Scan-video-scanner-div">
        <h1>Video Calling Section</h1>

        <div className="Image-Scan-scanner-btn-div">
          <div className="Image-Scan-scanner">
            {!prevImage ? (
              <video
                ref={videoRef}
                style={{ display: isCameraActive ? "block" : "none" }}
                autoPlay
                className="Image-Scan-camera"
              ></video>
            ) : (
              <div>
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="Image-Scan-camera"
                />
              </div>
            )}
          </div>

          {!isCameraActive && (
            <button onClick={startCamera}>Start Camera</button>
          )}
          {isCameraActive && (
            <button onClick={captureImage} disabled={toggleDisabled}>
              Capture Image
            </button>
          )}
          <h1>{text}</h1>
          {/* {capturedImage && (
           
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ScanImage;
