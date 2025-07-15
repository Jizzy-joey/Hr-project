import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem', color: '#333' }}>
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '1rem' }}>About Our Company</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
                    We are dedicated to delivering innovative HR solutions that transform businesses and empower teams to reach their full potential.
                </p>
            </header>

            <section style={{ marginBottom: '4rem' }}>
                <div style={{ 
                    display: 'flex', 
                    gap: '2rem', 
                    marginTop: '2rem', 
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div style={{ flex: 1, minWidth: 250 }}>
                        <Image
                            src="/about1.jpg"
                            alt="Team collaboration"
                            width={300}
                            height={200}
                            style={{ 
                                borderRadius: 8, 
                                width: '100%', 
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                marginBottom: '1rem'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', color: '#2980b9' }}>Collaboration</h3>
                        <p style={{ textAlign: 'center', lineHeight: 1.6 }}>
                            We believe in the power of teamwork and building strong relationships with our clients.
                        </p>
                    </div>
                    <div style={{ flex: 1, minWidth: 250 }}>
                        <Image
                            src="/about2.jpg"
                            alt="Innovation"
                            width={300}
                            height={200}
                            style={{ 
                                borderRadius: 8, 
                                width: '100%', 
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                marginBottom: '1rem'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', color: '#2980b9' }}>Innovation</h3>
                        <p style={{ textAlign: 'center', lineHeight: 1.6 }}>
                            Constantly evolving to bring you cutting-edge HR solutions for the modern workplace.
                        </p>
                    </div>
                    <div style={{ flex: 1, minWidth: 250 }}>
                        <Image
                            src="/about3.jpg"
                            alt="Growth"
                            width={300}
                            height={200}
                            style={{ 
                                borderRadius: 8, 
                                width: '100%', 
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                marginBottom: '1rem'
                            }}
                        />
                        <h3 style={{ textAlign: 'center', color: '#2980b9' }}>Growth</h3>
                        <p style={{ textAlign: 'center', lineHeight: 1.6 }}>
                            Committed to helping your business and your people grow and succeed together.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '2rem', 
                borderRadius: 8,
                marginBottom: '3rem'
            }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Our Story</h2>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 300 }}>
                        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                            Founded in 2010, our company began as a small team of HR professionals with a vision to revolutionize how businesses manage their most valuable asset - their people.
                        </p>
                        <p style={{ lineHeight: 1.8 }}>
                            Over the years, we've grown into a trusted partner for organizations across various industries, helping them navigate the complex world of human resources with ease and confidence.
                        </p>
                    </div>
                    <div style={{ flex: 1, minWidth: 300 }}>
                        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                            Our journey has been marked by continuous learning, adaptation, and a relentless focus on delivering value to our clients.
                        </p>
                        <p style={{ lineHeight: 1.8 }}>
                            Today, we're proud to serve over 500 companies worldwide, with a team of 150+ dedicated HR experts.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Our Mission & Values</h2>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '1.5rem'
                }}>
                    <div style={{ 
                        backgroundColor: '#e8f4fc', 
                        padding: '1.5rem', 
                        borderRadius: 8,
                        borderLeft: '4px solid #2980b9'
                    }}>
                        <h3 style={{ color: '#2980b9', marginBottom: '0.5rem' }}>Integrity</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            We operate with honesty and transparency in all our dealings, building trust with every interaction.
                        </p>
                    </div>
                    <div style={{ 
                        backgroundColor: '#e8f4fc', 
                        padding: '1.5rem', 
                        borderRadius: 8,
                        borderLeft: '4px solid #2980b9'
                    }}>
                        <h3 style={{ color: '#2980b9', marginBottom: '0.5rem' }}>Excellence</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            We strive for the highest standards in everything we do, delivering quality that exceeds expectations.
                        </p>
                    </div>
                    <div style={{ 
                        backgroundColor: '#e8f4fc', 
                        padding: '1.5rem', 
                        borderRadius: 8,
                        borderLeft: '4px solid #2980b9'
                    }}>
                        <h3 style={{ color: '#2980b9', marginBottom: '0.5rem' }}>Innovation</h3>
                        <p style={{ lineHeight: 1.6 }}>
                            We embrace change and continuously seek better ways to solve our clients' HR challenges.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ 
                backgroundColor: '#2c3e50', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: 8,
                marginBottom: '3rem'
            }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Why Choose Us?</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ 
                            backgroundColor: 'darkgreen', 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: 24, 
                            height: 24, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginRight: '1rem',
                            flexShrink: 0
                        }}>✓</span>
                        <span>15+ years of HR expertise across multiple industries</span>
                    </li>
                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ 
                            backgroundColor: 'darkgreen', 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: 24, 
                            height: 24, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginRight: '1rem',
                            flexShrink: 0
                        }}>✓</span>
                        <span>Customized solutions tailored to your unique needs</span>
                    </li>
                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ 
                            backgroundColor: 'darkgreen', 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: 24, 
                            height: 24, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginRight: '1rem',
                            flexShrink: 0
                        }}>✓</span>
                        <span>Proven track record of successful HR transformations</span>
                    </li>
                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ 
                            backgroundColor: 'darkgreen', 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: 24, 
                            height: 24, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginRight: '1rem',
                            flexShrink: 0
                        }}>✓</span>
                        <span>Dedicated account managers for personalized service</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ 
                            backgroundColor: 'darkgreen', 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: 24, 
                            height: 24, 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginRight: '1rem',
                            flexShrink: 0
                        }}>✓</span>
                        <span>Cutting-edge HR technology platform</span>
                    </li>
                </ul>
            </section>

            <section style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Ready to Transform Your HR?</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
                    Discover how our HR solutions can help your business thrive in today's competitive landscape.
                </p>
                <Link href="/contact" style={{
                    backgroundColor: 'darkgreen',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: 4,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    transition: 'background-color 0.3s ease'
                }}>
                    Contact Us Today
                </Link>
            </section>
        </div>
    );
}