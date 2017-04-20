'use strict';
import React, { Component } from 'react';

export default class ImagePreview extends Component {





  render() 
  {
 
    return (
        <div className="imagen" >

        <h1>{this.props.imagen.name}</h1>
        <h1>{this.props.imagen.media_count}</h1>

          
        
        </div>

    )
  
  }
}
