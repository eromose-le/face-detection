import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height
        });
      };
    };

    file && getImage();
  }, [file]);

  console.log(image);
  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
            <img
              src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <div className="postForm">
              <input
                type="text"
                placeholder="What's on your mind?"
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  className="addImg"
                  src="https://img.icons8.com/ios-filled/452/upload--v1.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                  alt=""
                />
                <button>Send</button>
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: 'none' }}
                type="file"
              />
            </div>
          </div>
        </div>
      )}
      {/* <img
        crossOrigin="anonymous"
        ref={imgRef}
        src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        width="940"
        height="650"
      />
      <canvas ref={canvasRef} width="940" height="650" /> */}
    </div>
  );
}

export default App;
