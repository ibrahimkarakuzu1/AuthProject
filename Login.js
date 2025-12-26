import React, { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Giriş yapılıyor:', credentials);
        // Backend bağlantısı sonra yapılacak
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '300px', marginTop: '20px' }}>
            <h3>Giriş Yap</h3>
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
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
}

export default Login;