import React from 'react';
import Main from '~/components/admin/main';
import Header from '~/components/admin/header';
import Layouts from '~/layouts/DefaultLayout/LayoutsAdmin';

const Admin = () => {
    return (
        <div className="wrapper">
            <div className="admin">
                <Layouts>
                    <Header />
                    <Main />
                </Layouts>
            </div>
        </div>
    );
};
export default Admin;
