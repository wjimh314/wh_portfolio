import React from 'react'

const Languages = () => {
  return (
    <div className="languages">
        <div className="py-5">
            <div className="container">
                <div className="row">
                {/* Web design  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>Web Design</h3>
                            <p>Starting with a initial idea, I plan
                            every application to suit your needs!</p>
                        </div>
                    </div>
                    {/*  Web Development*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>Web Development</h3>
                            <p>From the initial design, I tackle the task of developing the application using various techniques </p>
                        </div>
                    </div>
                    {/*  Frontend*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>Front-End development</h3>
                            <p>Using a variety of languages I build the front end of the application to meet the design needs. </p>
                        </div>
                    </div>
                    {/*  backend*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>Back-End development</h3>
                            <p>Once design needs are met, I finalize the project by building the back-end of the application and linking everything together to have a full functioning application!</p>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
  
        </div>
    
    </div>
  )
}

export default Languages;