import React from 'react'

const Footer = () => {
  return (
 
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      
        <div className="row border-top border-light  py-4">
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-dark">
                    &copy; <a className="text-dark font-weight-semi-bold" href="#">https://www.linkedin.com/in/kapilbawari/</a>
                          <span>       goshop : -  React js    </span>
                    
                    by
                    <a className="text-dark font-weight-semi-bold ml-2" href="@ks12oct@gmail.com">ks12oct@gmail.com</a>
                    
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt=""/>
            </div>
        </div>
    </div>
 
  )
}

export default Footer
