import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook= () => {
    const [formvalues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formvalues;
    // const { handleInputChange } = useForm()

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <form className="container" onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value= { name }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Escribe tu correo"
                    autoComplete="off"
                    value= { email }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="***"
                    autoComplete="off"
                    value= { password }
                    onChange= { handleInputChange }
                />
            </div>

            <div>
                <button className="btn btn-primary" type="submit">Guardar</button>
            </div>
        </form>
    )
}

