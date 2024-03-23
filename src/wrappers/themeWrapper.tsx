"use client";

import React, { useEffect } from 'react';
import { setTheme } from '@/utils/theme';

type ThemeWrapperProps = {
    children: React.ReactNode;
};

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    useEffect(() => {
        setTheme();
    }, []);

    return <>{children}</>;
};

export default ThemeWrapper;