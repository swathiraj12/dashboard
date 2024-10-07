import React from 'react'
import '../Components/CSS/Card.css'
import img1 from './Assets/Images/profile1.jpg'

const Card = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div className="card text-bg-dark">
                        <img src={img1} style={{ height: '500px' }} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card