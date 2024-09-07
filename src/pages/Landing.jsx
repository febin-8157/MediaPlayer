import React from 'react'
import Card from 'react-bootstrap/Card';
import gif from '../assets/gif.gif'
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className='container'>
     {/* landing */}
     <div className="row mt-5">
         <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>A media player is a hardware device or software application that plays audio and video files. Media players can play files from a storage device, disc, or the internet. They can also organize multimedia collections, rip CD tracks, burn CDs, and listen to internet radio</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
         </div>
         <div className="col-lg-1"></div>
         <div className="col-lg-6">
          <img className='ms-5' src={gif} alt="" />
         </div>

     </div>
     {/* features */}
      <div className='container mb-5'>
        <h1 className='text-center'>Features</h1>
        <div className="row">
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className="col-lg-4">     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className="col-lg-4">     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
        </div>
        
      </div>
     {/* links */}
   <div className="row border rounded p-2 m-3">
    <div className="col-lg-6"><h3 className='text-warning'>Simple,Fast and Powerfull</h3>
    <p><h5>play evrything :</h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia,<br /> nisi debitis eius quasi maxime reprehenderit laborum reiciendis repellat cupiditate quod id adipisci culpa sit repellendus ab. Ea, possimus odit!</p>
    <p><h5>Categorious video :</h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia,<br /> nisi debitis eius quasi maxime reprehenderit laborum reiciendis repellat cupiditate quod id adipisci culpa sit repellendus ab. Ea, possimus odit!</p>
    <p><h5>Managing History :</h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia,<br /> nisi debitis eius quasi maxime reprehenderit laborum reiciendis repellat cupiditate quod id adipisci culpa sit repellendus ab. Ea, possimus odit!</p>

    </div>
    <div className="col-lg-6 "><iframe className='rounded m-4' width="550" height="480" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
   </div>


    </div>
  )
}

export default Landing
