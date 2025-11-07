import React from 'react';
import cat from './cat3.png';

function ImageManipulation() {
  const [imgheight, setImgheight] = React.useState(200);
  const [imgwidth, setImgwidth] = React.useState(200);
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [angle, setAngle] = React.useState(0); 

  function increaseHeight() {
    setImgheight(imgheight + 20);
  }
  function decreaseHeight() {
    setImgheight(imgheight - 20);
  }
  function increaseWidth() {
    setImgwidth(imgwidth + 20);
  }
  function decreaseWidth() {
    setImgwidth(imgwidth - 20);
  }

  function changeBgColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }

  function rotateImage() {
    setAngle((prevAngle) => prevAngle + 30);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>
      <div style={{ border: '1px solid green', height: '450px', width: '350px', margin: '0px auto' }}>
        <img
          src={cat}
          height={imgheight}
          width={imgwidth}
          alt="cat"
          style={{
            paddingTop: '70px',
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            transform: `rotate(${angle}deg)`, // ✅ Apply rotation here
            transition: 'transform 0.3s ease' 
          }}
        />
      </div>
      <div>
        <button onClick={increaseHeight}>Increase Height</button>
        <button onClick={decreaseHeight}>Decrease Height</button>
        <button onClick={increaseWidth}>Increase Width</button>
        <button onClick={decreaseWidth}>Decrease Width</button>
        <button onClick={changeBgColor}>Change Color</button>
        <button onClick={rotateImage}>Rotate Image</button> {}
      </div>
      <div>
        <h2 style={{ color: 'blue' }}>Image height: {imgheight}</h2>
        <h2 style={{ color: 'blue' }}>Image width: {imgwidth}</h2>
        <h2 style={{ color: 'blue' }}>Rotation angle: {angle}°</h2>
      </div>
    </div>
  );
}

export default ImageManipulation;
