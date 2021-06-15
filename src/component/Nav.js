import React from "react";
const Nav = (props) =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="d-flex flex-grow-1">
                    <span className="w-100 d-lg-none d-block"></span>
                    <a className="navbar-brand" href="#">
                        Weather Forecast
                    </a>
                    <div className="w-100 text-right">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                    
                    <form className="form-inline my-2 my-lg-0  ml-auto flex-nowrap" >
                    <input className="form-control mr-sm-2" 
                        type="search" 
                        onChange = {(e) => props.changeCurrentCity(e.target.value)} 
                        placeholder="Search City" 
                        aria-label="Search"  
                        name="search"/>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Nav;