"use client";

import { useEffect, useState } from 'react';

export default function Waitlist() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://app.formbricks.com/s/clp1p0psh0g31qs0fure9hcpi';
    }, 2000);
  }, []);

  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots === '...') {
          return '.';
        } else {
          return prevDots + '.';
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div className="CTA"><p className="description">Redirecting to waitlist{dots}</p></div>;
}