import Footer from '@/component/shared/Footer';
import Navbar from '@/component/shared/Navbar';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>

        </>
    );
};

export default AuthLayout;