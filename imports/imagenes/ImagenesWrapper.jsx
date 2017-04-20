import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ImagePreview from './ImagePreview';

export default class ImagenesWrapper extends TrackerReact(Component){


constructor() {
		super();
		this.state=
		{
			imagenes:[]
		}

	}
	consoleImages(event)
	{
		event.preventDefault();
		var bus=this.refs.filtroImagenes.value.trim();
		console.log(bus);
		Meteor.call('instagram.imagesHash', {
				  tag: bus
				}, (err, res) => {
				  if (err) {
				    alert(err);
				  } else {
				  	console.log(res)
				  	this.setState({imagenes:res.data});
				    //Session.set("data", err)

				  }
				});
		//this.setState({imagenes:Session.get('data')})		
	}

	render()
	{
		
		if(Meteor.userId())
		{
			console.log(Meteor.user())
			return(
					<div>
			<form className="Buscador centerImages" id="FormBuscar"onSubmit={this.consoleImages.bind(this)}>
			
			<input type="text" 
							   ref="filtroImagenes"
							   />
			<button type="submit"  value="Submit">Buscar</button>
			</form>

			{this.state.imagenes.map((imagen)=>{
			return <ImagePreview key={imagen.id} imagen={imagen}  />})}
					</div>

					)
		}
		else
		{
			return (
				<div>
				<h1> No logueado</h1>
				</div>
				)
		}
		
	}

	}