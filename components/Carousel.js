import { rgbToHex } from '@mui/material';
import React from 'react';

export default function App() {
  return (
      <img
        className="d-block w-100"
        position="fixed"
        style={ {paddingTop:'90px', width:'100%', widthbackgroundColor:'black'}}
        src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/5869/banner_banner.jpg"
        alt="First slide"
      />
  );
}