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
      window.location.href = 'https://app.formbricks.com/s/clp1p0psh0g31qs0fure9hcpi';
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="CTA">
      <p className="description">Redirecting to download{dots}</p>
    </div>
  );
}
