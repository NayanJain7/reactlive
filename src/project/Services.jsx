import React from 'react';
import Card from "../project/Card";
import Sdata from "../project/Sdata";
const Services = () =>{
    return (
        <>
            <div className="my-5">
                <h2 className="text-center"> Our Services</h2>
            </div>

            <div className="container-fluid mb-5  ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                          {
                              Sdata.map((val, index) =>{
                                  return <Card
                                  key={index}
                                  imgsrc={val.imgsrc} 
                                  title={val.title}
                                  text={val.text}
                                  />
                              })
                          }
                        </div>
                    </div>
                </div>
            </div>
          

        </>
    );
};
export default Services;