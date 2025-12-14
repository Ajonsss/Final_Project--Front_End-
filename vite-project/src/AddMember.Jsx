import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        birthdate: '',
        phone_number: '',
        spouse_name: '',
        password: ''
    });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        if(file) data.append('image', file);

        axios.post('http://localhost:8081/create-member', data)
             .then(res => {
                 if(res.data.Status === "Success") navigate('/dashboard');
                 else alert("Error");
             })
             .catch(err => console.log(err));
    };

    return (
        /* --- MAIN PAGE CONTAINER --- */
        <div className="flex justify-center items-center min-h-screen p-4">
            
            /* --- REGISTRATION CARD --- */
            <div className="reg-board">
                <h2 className="reg-title">Register New Member</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    /* --- SECTION: IMAGE UPLOAD --- */
                    <div className="flex justify-center mb-6">
                        <label className="reg-image-upload-wrapper">
                            {file ? (
                                /* Image Preview State */
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={URL.createObjectURL(file)} 
                                        alt="Preview" 
                                        className="w-24 h-24 rounded-full object-cover border-2 border-white/50 mb-2" 
                                    />
                                    <span className="text-xs text-white/70">Click to change</span>
                                </div>
                            ) : (
                                /* Empty Placeholder State */
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl mb-1">+</span>
                                    <span>Upload Photo</span>
                                </div>
                            )}
                            <input type="file" className="hidden" onChange={e => setFile(e.target.files[0])} />
                        </label>
                    </div>

                    /* --- SECTION: PERSONAL DETAILS GRID --- */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Name Input */}
                        <div className="reg-input-group">
                            <label className="reg-label">Full Name</label>
                            <input type="text" className="reg-input" placeholder="e.g. Juan Dela Cruz"
                                onChange={e => setFormData({...formData, full_name: e.target.value})} required/>
                        </div>

                        {/* Phone Input */}
                        <div className="reg-input-group">
                            <label className="reg-label">Phone Number</label>
                            <input type="text" className="reg-input" placeholder="09xxxxxxxxx"
                                onChange={e => setFormData({...formData, phone_number: e.target.value})} required/>
                        </div>

                        {/* Birthday Input */}
                        <div className="reg-input-group">
                            <label className="reg-label">Birthdate</label>
                            <input type="date" className="reg-input" 
                                onChange={e => setFormData({...formData, birthdate: e.target.value})} />
                        </div>

                        {/* Spouse Input */}
                        <div className="reg-input-group">
                            <label className="reg-label">Spouse Name</label>
                            <input type="text" className="reg-input" placeholder="Optional"
                                onChange={e => setFormData({...formData, spouse_name: e.target.value})} />
                        </div>
                    </div>
                    
                    /* --- SECTION: SECURITY --- */
                    <div className="pt-2 border-t border-white/10">
                        <div className="reg-input-group">
                            <label className="reg-label">Default Password</label>
                            <input type="password" className="reg-input" placeholder="Set initial password"
                                onChange={e => setFormData({...formData, password: e.target.value})} required/>
                        </div>
                    </div>

                    /* --- SECTION: ACTION BUTTONS --- */
                    <div className="flex gap-3 pt-4">
                        <button type="button" onClick={() => navigate('/dashboard')} className="reg-btn-cancel">
                            Cancel
                        </button>
                        <button type="submit" className="reg-btn-submit">
                            Create Member
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddMember;
