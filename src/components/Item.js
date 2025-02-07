import React from 'react';
import { Box } from '@mui/material';
import './Item.css';

function Item(props, { fontSize }) {
  return (
    <>
	<div className='main'>
		<div className='main-text'></div>
	<section class="carousel">
		<div class="reel">
			<article>
				<a href="/communityinclusion" class="image featured"><img class="images" src="images/ClientPhotos/okinc-pic01.jpg" alt=""/></a>
				<header>
					<h3><a href="penticton.html">Community Inclusion</a></h3>
				</header>
			</article>
			<article>
				<a href="/news#events" class="image featured"><img class="images" src="images/ClientPhotos/okinc-pic02.jpg" alt=""/></a>
				<header>
					<h3><a href="news.html#events">Events</a></h3>
				</header>
			</article>
			<article>
				<a href="/news" class="image featured"><img class="images" src="images/ClientPhotos/okinc-pic08.jpg"  alt="" /></a>
				<header>
					<h3><a href="news.html">News</a></h3>
				</header>
			</article>
			<article>
				<a href="/missionvision" class="image featured"><img class="images" src="images/ClientPhotos/okinc-pic11.jpg" alt="" /></a>
				<header>
					<h3><a href="mission-vision.html">Mission + Vision</a></h3>
				</header>
			</article>
			<article>
				<a href="/employment" class="image featured"><img class="images" src="images/ClientPhotos/okinc-pic06.jpg" alt="" /></a>
				<header>
					<h3><a href="employment.html">Employment</a></h3>
				</header>
			</article>
			<article>
				<a href="/resources" class="image featured"><img class="images" src="images/ClientPhotos/okinc-pic10.jpg" alt="" /></a>
				<header>
					<h3><a href="resources.html">Resources</a></h3>
				</header>
			</article>
		</div>
	</section>
		<Box textAlign="center" className="background" fontFamily="Tahoma" p={1} padding={"50px 30px"} >
			Okanagan Inclusion provides Agency Coordinated Home Sharing, Respite, Employment and Community Inclusion programs to adults with developmental disabilities.
			<br/>
			Okanagan Inclusion (OI) began services to adults with developmental disabilities in 2013, incorporated in 2018, and became CARF accredited in 2021.          
			<br/>
			It was developed as there was a need for more individualized, person centred services in the South Okanagan. OI has grown extensively since then, adding Shared Living, Respite as well as Employment to the already thriving Community Inclusion program.          <br/>
			<br/>
			We employ highly qualified staff and contractors to deliver our programs and services. 
			<br/>
			We provide services mainly in Penticton but extend to Summerland, Okanagan Falls, Twin Lakes and Kelowna.
			<br/>
			Our services are provided by referral from Community Living British Columbia (CLBC).
			<br/>
			<br/>
			<br/>
		</Box>
    </div>
    </>
  )
}

export default Item;