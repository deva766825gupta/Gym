import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult('Please wait...');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    ...formData,
                    access_key: 'f7c0d683-2b42-41b4-8ce4-ea921e99b06e'
                }).toString()
            });

            if (response.ok) {
                setResult('Form submitted successfully');
            } else {
                const json = await response.json();
                setResult(json.message);
            }
        } catch (error) {
            console.error(error);
            setResult('Something went wrong!');
        } finally {
            formRef.current.reset();
            setTimeout(() => {
                setResult('');
            }, 3000);
        }
    };

    return (
        
        <form onSubmit={handleSubmit} ref={formRef} method="POST">
        <h2>Contact :</h2>
            {/* Hidden Access Key */}
            <input type="hidden" name="access_key" value="f7c0d683-2b42-41b4-8ce4-ea921e99b06e" />

            {/* Form Inputs */}
            
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
            />

            <button type="submit">Submit Form</button>

            {/* Result Message */}
            <div id="result" className={result.includes('successfully') ? 'success' : result.includes('wrong') ? 'error' : ''}>
                {result}
            </div>
            
        </form>
    );
};

export default Contact;
