import React from 'react';
import Main from '~/components/admin/main';
import Header from '~/layouts/DefaultLayout/Header';

const Admin = () => {
    return (
        <div className="wrapper">
            <div className="admin">
                <Header />
                <Main />
            </div>
        </div>
    );
};
export default Admin;
