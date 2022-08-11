import About from '~/components/About';
import Banner from '~/components/Banner';
import Categories from '~/components/Categories';
import Testimonial from '~/components/Testimonial';

function Home() {
    return (
        <>
            <Banner />
            <About />
            <Categories />
            <Testimonial />
        </>
    );
}

export default Home;
