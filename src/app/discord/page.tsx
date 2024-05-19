"use client";

import { useEffect, useState } from 'react';

export default function Waitlist() {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => (prevDots === '...' ? '.' : prevDots + '.'));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            window.location.href = 'https://discord.gg/58NZ7fFqPy';
        }, 2000);

        return () => clearTimeout(redirectTimeout);
    }, []);

    return (
        <div className="CTA">
            <p className="description">Redirecting to discord{dots}</p>
        </div>
    );
}
