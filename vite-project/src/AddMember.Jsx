import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        birthdate: '',
        phone_number: '',
        spouse_name: '',
        password: '' // Default password setup
    });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        if(file) data.append('image', file);

        // API Call (Logic for Day 14, embedded here for structure)
        axios.post('http://localhost:8081/create-member', data)
             .then(res => {
                 if(res.data.Status === "Success") navigate('/dashboard');
                 else alert("Error");
             })
             .catch(err => console.log(err));
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="reg-board">
                <h2 className="reg-title">Register New Member</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Image Upload */}
                    <div className="flex justify-center mb-4">
                        <label className="reg-image-upload">
                            {file ? <span className="text-sm">{file.name}</span> : <span>+ Upload Photo</span>}
                            <input type="file" className="hidden" onChange={e => setFile(e.target.files[0])} />
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="reg-label">Full Name</label>
                            <input type="text" className="reg-input" 
                                onChange={e => setFormData({...formData, full_name: e.target.value})} required/>
                        </div>
                        <div>
                            <label className="reg-label">Phone Number</label>
                            <input type="text" className="reg-input" 
                                onChange={e => setFormData({...formData, phone_number: e.target.value})} required/>
                        </div>
                        <div>
                            <label className="reg-label">Birthdate</label>
                            <input type="date" className="reg-input" 
                                onChange={e => setFormData({...formData, birthdate: e.target.value})} />
                        </div>
                        <div>
                            <label className="reg-label">Spouse Name</label>
                            <input type="text" className="reg-input" 
                                onChange={e => setFormData({...formData, spouse_name: e.target.value})} />
                        </div>
                    </div>
                    
                    {/* Default Password Field (Hidden or Visible depending on req) */}
                    <div>
                        <label className="reg-label">Default Password</label>
                        <input type="password" className="reg-input" 
                            onChange={e => setFormData({...formData, password: e.target.value})} required/>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button type="button" onClick={() => navigate('/dashboard')} className="reg-btn-cancel">Cancel</button>
                        <button type="submit" className="reg-btn-submit">Create Member</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddMember;
