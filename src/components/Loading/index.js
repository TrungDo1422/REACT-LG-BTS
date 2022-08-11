import loading from '~/assets/image/devplus/logo_loading.png';
import './Loading.scss';

function Loading() {
    return (
        <div id="loader" className="loader">
            <div className="loader-container">
                <div className="loader-icon">
                    <img src={loading} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Loading;
