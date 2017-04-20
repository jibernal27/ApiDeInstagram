'use strict';
import React, { Component } from 'react';

export default class ImagePreview extends Component {





  render() 
  {
    if (this.props.imagen.type=="image")
    {
    return (
        <div className="imagen" >
        
          <img className="imageResult"  src={`${this.props.imagen.images.standard_resolution.url}`}
          
          title={`${this.props.imagen.caption.text}`}
          
          />
        
        </div>

    )
  }
  else
    {
    return (<div></div>)
      }
  }
}
