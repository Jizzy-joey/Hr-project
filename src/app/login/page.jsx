"use client";
import React, { useState } from "react";

export default function LoginPage() {
    const [role, setRole] = useState("employer");
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        setForm({ email: "", password: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        alert(`Logging in as ${role}: ${form.email}`);
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <div className="role-selector">
                <label>
                    <input
                        type="radio"
                        value="employer"
                        checked={role === "employer"}
                        onChange={handleRoleChange}
                    />{" "}
                    Employer
                </label>
                <label style={{ marginLeft: 16 }}>
                    <input
                        type="radio"
                        value="jobseeker"
                        checked={role === "jobseeker"}
                        onChange={handleRoleChange}
                    />{" "}
                    Jobseeker
                </label>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="login-btn">
                    Login as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
            </form>
            <style jsx>{`
                .login-container {
                    max-width: 400px;
                    margin: 40px auto;
                    padding: 32px 24px;
                    border: 1px solid #eee;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                }
                .login-title {
                    text-align: center;
                    margin-bottom: 24px;
                    color: #db740dff;
                    font-weight: 600;
                }
                .role-selector {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                    gap: 24px;
                }
                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .form-input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 16px;
                    transition: border 0.2s;
                }
                .form-input:focus {
                    border-color: #db740dff;
                    outline: none;
                }
                .login-btn {
                    width: 100%;
                    padding: 12px;
                    background: linear-gradient(90deg, #db740dff 60%, #fbb040 100%);
                    color: #fff;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .login-btn:hover {
                    background: linear-gradient(90deg, #fbb040 60%, #db740dff 100%);
                }
            `}</style>
        </div>
    );
}