import React from 'react';
import Navbar from '../../imports/Navbar'
export const MainLayout=({content})=>(
	<div className="main-layout">
  <div>
	<header>
		<br />
		<Navbar />
		<br />
	</header>
	<div className="content">
	<main>
	{content}
	</main>
	</div>
	</div>
	</div>
	)
