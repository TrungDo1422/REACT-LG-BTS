import pagenotfoundImage from '~/assets/image/pagenotfound.jpg';
import './styles.scss';

function Home() {
    return (
        <div className="pageNotFound">
            <h1>Oops..! 404 Page Not Found</h1>
            <p>Looks like you came to wrong page on our server</p>
            <img src={pagenotfoundImage}  alt="not found" />
        </div>
    );
}

export default Home;
