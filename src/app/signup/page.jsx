"use client";
import React, { useState } from 'react';

const SignupButton = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        occupation: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation and API call here
        setSubmitted(true);
    };

    // React-CSS (css-in-js) using a styles object
    const styles = {
        container: {
            maxWidth: 400,
            margin: '40px auto',
            padding: 24,
            border: '1px solid #eee',
            borderRadius: 8,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        },
        heading: {
            marginBottom: 24,
            color: '#db740dff',
            textAlign: 'center',
        },
        formGroup: {
            marginBottom: 12,
        },
        label: {
            display: 'block',
            marginBottom: 4,
            fontWeight: 500,
        },
        input: {
            width: '100%',
            padding: 8,
            border: '1px solid #ccc',
            borderRadius: 4,
            fontSize: 16,
        },
        select: {
            width: '100%',
            padding: 8,
            border: '1px solid #ccc',
            borderRadius: 4,
            fontSize: 16,
        },
        button: {
            width: '100%',
            padding: 10,
            background: '#db740dff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            marginTop: 8,
        },
        success: {
            textAlign: 'center',
            color: '#2e7d32',
            fontWeight: 500,
            fontSize: 18,
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Sign Up</h2>
            {submitted ? (
                <div style={styles.success}>Thank you for signing up!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Name<br />
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Email<br />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Password<br />
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Confirm Password<br />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Occupation<br />
                            <select
                                name="occupation"
                                value={form.occupation}
                                onChange={handleChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select...</option>
                                <option value="employer">Employer</option>
                                <option value="jobseeker">Job Seeker</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit" style={styles.button}>
                        Sign Up
                    </button>
                </form>
            )}
        </div>
    );
};

export default SignupButton;