import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/navbar";
import img from "../images/uploadicon.jpg";
import "./UploadVideo.css";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
} from "firebase/storage";

function UploadVideo(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [analysis, setAnalysis] = useState(true);
  const [clicked, setClicked] = useState(false);

  var { id } = useParams();

  if (id == "false") {
    id = Boolean(id);
    id = !id;
  }

  React.useEffect(() => {
    setAnalysis(id);
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const navigate = useNavigate();
  const handleUpload = () => {
    setClicked(true);
    if (uploaded) {
      navigate("/names");
    } else {
      if (!selectedFile) {
        alert("Please select a file.");
        return;
      }
      const imageRef = ref(storage, "/video");
      const uploadTask = uploadBytesResumable(imageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress)
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log("Upload is complete");
          alert("Upload completed!");
          setUploaded(true);
          setClicked(false)
        }
      );


    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="heading">
          {analysis ? "Player Analysis" : "Team Analysis"}
        </h1>
        <div className="uploadpage-container">
          <div className="upload-card">
            <img className="upload-icon" src={img} alt="Upload Icon" />
            <label htmlFor="fileInput" className="upload-button">
              Upload Video
              <input
                type="file"
                accept=".mp4"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
            </label>
            {selectedFile && (
              <div className="upload-progress">
                Uploading: {uploadProgress}%
              </div>
            )}
            <button onClick={handleUpload}
            disabled={clicked}
            >
              {uploaded ? "Proceed" : "Start Upload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
