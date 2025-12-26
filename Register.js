import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Kayıt verisi:', formData);
        alert("Kayıt işlemi tetiklendi (Demo)");
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '300px' }}>
            <h3>Kayıt Ol</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Kullanıcı Adı"
                    onChange={handleChange}
                    style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Şifre"
                    onChange={handleChange}
                    style={{ display: 'block', marginBottom: '10px', width: '100%' }}
                />
                <button type="submit">Kaydol</button>
            </form>
        </div>
    );
}

export default Register;