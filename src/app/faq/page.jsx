"use client";
import React, { useState } from "react";


const faqs = [
  {
    id: 1,
    question: "What is the purpose of Nija Jobs?",
    answer: "Nija Jobs connects talented professionals with top employers across Nigeria, streamlining the job search and hiring process.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer: "You can contact our support team via email at support@nijajobs.com or through our live chat feature available Monday-Friday, 9am-5pm WAT.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    question: "Is my personal data secure?",
    answer: "Yes, we use industry-standard encryption and security measures to protect your data. We never share your information without your consent.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    question: "How do I apply for jobs?",
    answer: "Create a profile, upload your resume, and browse available positions. Click 'Apply' on any job posting to submit your application.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    question: "What's the cost for employers to post jobs?",
    answer: "We offer flexible pricing plans starting with a free basic option. Premium plans with more features start at ₦15,000 per month.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    question: "Can I edit my application after submitting?",
    answer: "Yes, you can update your application materials anytime, but changes won't affect already-submitted applications.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [userQuestions, setUserQuestions] = useState([]);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setUserQuestions([...userQuestions, {
        id: Date.now(),
        question: newQuestion,
        answer: "Our team will respond to this question shortly."
      }]);
      setNewQuestion("");
    }
  };

  const filteredFaqs = [...faqs, ...userQuestions].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <div className="faq-page container items-center mx-auto p-6" style={{
        fontFamily: 'Inter, Arial, sans-serif',
        background: '#f9fafb',
        minHeight: '100vh'
    }}>
        <section className="faq-hero" style={{
            background: 'orange linear-gradient(90deg, #f97316 0%, #fb923c 100%)',
            color: '#fff',
            borderRadius: '12px',
            padding: '2rem 1.5rem',
            marginBottom: '2rem',
            textAlign: 'center'
        }}>
            <div className="hero-content">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Frequently Asked Questions</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>Find answers to common questions about Nija Jobs</p>
            </div>
        </section>

        <div className="faq-container" style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            padding: '2rem',
            maxWidth: '700px',
            margin: '0 auto'
        }}>
            <div className="search-container" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            <div className="faq-list">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
                            style={{
                                borderBottom: '1px solid #e5e7eb',
                                padding: '1rem 0',
                                transition: 'background 0.2s',
                                background: activeId === faq.id ? '#f3f4f6' : 'transparent'
                            }}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(faq.id)}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {faq.question}
                                <span className="toggle-icon" style={{
                                    fontSize: '1.5rem',
                                    marginLeft: '1rem',
                                    color: 'orange',
                                    fontWeight: 700
                                }}>
                                    {activeId === faq.id ? '−' : '+'}
                                </span>
                            </div>
                            {activeId === faq.id && (
                                <div className="faq-answer-container" style={{ marginTop: '0.75rem' }}>
                                    <div className="faq-answer" style={{ fontSize: '1rem', color: '#374151' }}>
                                        {faq.answer}
                                        {faq.image && (
                                            <div className="faq-image" style={{ marginTop: '1rem' }}>
                                                <img
                                                    src={faq.image}
                                                    alt="FAQ illustration"
                                                    style={{
                                                        width: '100%',
                                                        maxWidth: '320px',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="no-results" style={{
                        textAlign: 'center',
                        color: '#ef4444',
                        fontWeight: 500,
                        padding: '2rem 0'
                    }}>
                        No results found for "{searchTerm}"
                    </div>
                )}
            </div>

            <div className="ask-question" style={{
                marginTop: '2.5rem',
                background: '#f3f4f6',
                borderRadius: '8px',
                padding: '1.5rem'
            }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Can't find what you're looking for?
                </h3>
                <form onSubmit={handleSubmitQuestion}>
                    <textarea
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Ask your question here..."
                        rows="3"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #d1d5db',
                            fontSize: '1rem',
                            marginBottom: '1rem',
                            resize: 'vertical',
                            boxSizing: 'border-box'
                        }}
                    />
                    <button
                        type="submit"
                        className="submit-btn"
                        style={{
                            background: 'black',
                            color: '#fff',
                            fontWeight: 600,
                            padding: '0.75rem 1.5rem',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#c86b0eff'}
                        onMouseOut={e => e.currentTarget.style.background = 'black'}
                    >
                        Submit Question
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}