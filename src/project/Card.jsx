import React from 'react';
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <>

            <div className="col-md-4 mx-xs-3 mt-3">

                <div className="card"  style={{ width: '15rem'}}>
                    <img className="card-image-top" src={props.imgsrc} alt="course" />
                    <div className="card-body">
                        <h5 className='card-title font-weight-bold'>{props.title}</h5>

                        <h6 className="card-text text-success">{props.text}</h6>
                        <NavLink to="" className="btn btn-primary">Enroll Now</NavLink>
                    </div>
                </div>


            </div>



        </>
    );
};
export default Card;