import React, { useState, useEffect } from "react"
import Validasi from "./Validasi"

const Signup = ({submitForm}) => {
    const [ values, setValues ] = useState({
        depname: "",
        belname: "",
        email: "",
        password: "",
    });
    const [ errors, setErrors ] = useState({});
    const [ databenar, setDatabenar ] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleformsubm = (event) => {
        event.preventDefault();
        setErrors(Validasi(values));
        setDatabenar(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && databenar){
            submitForm(true);
        }
    }, [errors]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <h2 className="title">Create Account</h2>
                <form className="form-wrapper">
                    <div className="Name1">
                        <label className="label">Nama Depan</label>
                        <input className="input" type="text" name="depname" value={values.depname} onChange={handleChange}/>
                        {errors.depname && <p className="error">{errors.depname}</p>}
                    </div>
                    <div className="Name2">
                        <label className="label">Nama Belakang</label>
                        <input className="input" type="text" name="belname" value={values.belname} onChange={handleChange}/>
                        {errors.belname && <p className="error">{errors.belname}</p>}

                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                        
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password"  name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                        
                    </div>
                    <div>
                        <button className="submit" onClick={handleformsubm}>
                        Daftar
                        </button> 
                    </div>
                        
                    </form>
                    </div>
                    </div>
    )
}

export default Signup
