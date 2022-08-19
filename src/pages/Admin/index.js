import React from 'react'
import Header from '~/components/admin/header';
import Main from '~/components/admin/main';
import SliderBar from '~/components/admin/sliderBar';

const Admin = () => {
    return (
        <div class="wrapper">
            <div className='admin'>
                <Header />
                <Main />
                <SliderBar />
            </div>

        </div>
    )
}

export default Admin