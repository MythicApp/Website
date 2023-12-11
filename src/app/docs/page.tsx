"use client";

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Docs = () => {
    const [selectedOption, setSelectedOption] = useState('Installation');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/wiki/MythicApp/Mythic/${selectedOption}.md`);
                const markdownContent = await response.text();
                setContent(markdownContent);
                setError('');
            } catch (error) {
                console.error('Error fetching content:', error);
                setError('Error fetching content');
            }
        };

        fetchContent();
    }, [selectedOption]);

    return (
        <div>
            <Navbar />
            <div className="docs-nav">
                <a className="docs-nav-text" onClick={() => handleOptionClick('Installation')}>Installation</a>
                <a className="docs-nav-text" onClick={() => handleOptionClick('Compatibility')}>Compatibility</a>
            </div>
            {error ? (
                <div className="error">{error}</div>
            ) : (
                <div className='CTA'>
                    <div style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                    </div>
                </div>
            )}
            <br></br>
            <Footer />
        </div>
    );
};

export default Docs;