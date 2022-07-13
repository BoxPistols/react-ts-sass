import * as React from 'react';
import './src/assets/style/style.scss';

export default function App() {
  const clickhandle = () => {
    alert('Check');
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p className="fs-lg _bold">Start editing to see some magic happen</p>

      <div className="size_h-ss" />
      <div className="size_md box" onClick={clickhandle} />
      <div className="size_h-ss" />
      <div className="size_xl box" />
      <div className="size_h-ss" />
      <div className="size_xl-5 box" />
    </div>
  );
}

function style(style: any) {
  throw new Error('Function not implemented.');
}
