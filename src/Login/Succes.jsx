import React, { useState } from 'react';
import './login.css'
import App from '../App'



const Succes = () => {
     const [isTogled, setIstogled] = useState(false);

     const submitForm = () => {
        setIstogled(true);
    }
    
    return (
        <div className="container"  >
        { !isTogled ?  
        <div className="app-success">
            <h3 className="form-succes"> Selamat </h3>
            <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-gradient-linear-vector-orange-cartoon-trumpet-thousands-of-original-elements-image_2282345.jpg"
                alt=""></img>
            <h3>Kamu Berhasil Mendaftar</h3>
            <p>Sekarang kamu bisa mulai PO</p>
            <button className="btn-app" onClick={() => setIstogled(!isTogled)}></button>
           {submitForm}  </div>
           : <App/>  }
            
                
        </div>
    )
}

export default Succes
