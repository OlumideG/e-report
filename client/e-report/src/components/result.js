import React from 'react';
import { Link } from 'react-router-dom';


const Result = () => {
    return (
        <div>

           <Link to="/userlogin"  >User Login</Link>
           <Link to="/usersignup"  >User Sign up</Link>


            <div className="mw6 center">
                <div className="link dt w-100 bb b--black-10 pb2 mt2 ">
                    <div className="dtc w3">
                        <img src="http://mrmrs.github.io/images/0010.jpg" alt="the way" className="db w-100" />
                    </div>
                    <div className="dtc v-top p12">
                        <p className="conf black">Conference Room</p>
                        <div className="mt4 f6">
                            <Link className="m2 conf ">Capacity 22 seats</Link>
                        </div>
                    </div>
                    <div className="dtc v-top pl2">
                        <h6 className="black conf">Room 301,third floor Main Building</h6>
                        <div className="mt2 f6 mt">
                            <Link className="ml0 mt black conf">Capacity 22 seats</Link>
                        </div>
                    </div>
                    <div className="dtc v-top  pl2">
                        <span className="stars-active">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </span>
                        <button className="button-book mt5">Book now</button>
                    </div>
                </div>




            </div>


        </div>
    )



}
export default Result


