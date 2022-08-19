import Image from '~/assets/image/devplus/logo_loading.png';
import './main.scss';

const Main = () => {
    return (
        <div>
            <div className="content-wrapper">
                <div className='modal_container' id='exit'>
                    <div className='m-5'></div>

                    {/* ---------------banner---------------- */}
                    <div className='banner_modal' id='banner-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Otto</td>
                                            <td>Otto</td>
                                            <td>
                                                <a className='btn btn-primary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------about-------------- */}
                    <div className='about_modal' id='about-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Otto</td>
                                            <td>hihi</td>
                                            <td>Otto</td>
                                            <td>
                                                <a className='btn btn-primary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------categories------------------- */}
                    <div className='category_modal' id='category-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Icons</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th scope="col text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr> <td><img src={Image} alt='# ' /></td>
                                            <td>Otto</td>
                                            <td>hihi</td>

                                            <td>
                                                <a className='btn btn-primary'>Create</a>|
                                                <a className='btn btn-secondary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------Popular------------------- */}
                    <div className='popular_modal' id='popular-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Images</th>
                                            <th scope="col">Content</th>
                                            <th scope="col text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr> <td><img src={Image} alt='# ' /></td>
                                            <td>hihi</td>
                                            <td>
                                                <a className='btn btn-primary'>Create</a>|
                                                <a className='btn btn-secondary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------CTA------------------- */}
                    <div className='cta_modal' id='cta-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Images</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th scope="col text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={Image} alt='# ' />
                                            </td>
                                            <td>helo man</td>
                                            <td>hihi</td>
                                            <td>
                                                <a className='btn btn-primary'>Create</a>|
                                                <a className='btn btn-secondary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------Concerns------------------- */}
                    <div className='concern_modal' id='concern-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Images</th>
                                            <th scope="col text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>hihi</td>
                                            <td>hihi</td>
                                            <td>hihi</td>
                                            <td>
                                                <img src={Image} alt='# ' />
                                            </td>
                                            <td>
                                                <a className='btn btn-primary'>Create</a>|
                                                <a className='btn btn-secondary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------Alumni------------------- */}
                    <div className='alumni_modal' id='alumni-modal'>
                        <div className='modal_body'>
                            <a className='close-btn' href='#exit'>&times;</a>
                            <div className='table_card'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Content</th>
                                            <th scope="col">Images</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Level</th>
                                            <th scope="col text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>hello number 1</td>
                                            <td><img src={Image} alt='# ' /></td>
                                            <td>Tien Tinh</td>
                                            <td>member devplus ++</td>
                                            <td>
                                                <a className='btn btn-primary'>Create</a>|
                                                <a className='btn btn-secondary'>Update</a>|
                                                <a className='btn btn-danger'>Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main