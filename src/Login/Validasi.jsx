const Validasi = (values) => {

    let errors = {};

    if(!values.depname){
        errors.depname="Tulis yang benar gan"
    }
    if(!values.belname){
        errors.belname="Tulis yang benar gan"
    }
    if(!values.email){
        errors.email="Tulis yang benar gan"
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Tulis yang benar gan"
    }
    if(!values.password){
        errors.password="Tulis yang benar gan"
    } else if (values.password.length < 5){
        errors.email="Password harus lebih dari 5 karakter"
    }

    return errors;
    
}

export default Validasi
