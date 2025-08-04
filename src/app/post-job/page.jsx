"use client";
import React, { useState } from 'react';
import PostJob from '@/app/data/PostJob';

const PostJobsPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you could send formData to your backend
    };

    return (
        <div className="post-jobs-container" style={{
            maxWidth: '500px',
            margin: '40px auto',
            padding: '32px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
        }}>
            <h1 className="post-jobs-title" style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: '#2d3748'
            }}>Post a Job</h1>
            <p className="post-jobs-desc" style={{
                marginBottom: '24px',
                color: '#4a5568'
            }}>Fill out the form below to post a new job listing.</p>
            <form className="post-jobs-form" onSubmit={handleSubmit}>
                <label style={{ display: 'block', marginBottom: '16px' }}>
                    <span style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Job Title:</span>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem'
                        }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '16px' }}>
                    <span style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Description:</span>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem',
                            resize: 'vertical'
                        }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '16px' }}>
                    <span style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Location:</span>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem'
                        }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '16px' }}>
                    <span style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Salary:</span>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem'
                        }}
                    />
                </label>
                <button
                    type="submit"
                    className="post-jobs-btn"
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: 'black',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        marginTop: '8px',
                        transition: 'background 0.2s'
                        
                    }}
                >
                    Post Job
                </button>
            </form>
            {submitted && (
                <div className="post-jobs-success" style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: '#e6fffa',
                    borderRadius: '8px',
                    color: '#2c7a7b',
                    textAlign: 'center',
                    fontWeight: '500',
                    transition: '#ED7014'
                }}>
                    <p>Job posted successfully!</p>
                </div>
            )}
        </div>
    );
};

export default PostJobsPage;