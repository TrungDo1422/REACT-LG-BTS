import About from '~/components/About';
import Banner from '~/components/Banner';
import Categories from '~/components/Categories';
import Concern from '~/components/Concern';
import CTA from '~/components/CTA';
import Popular from '~/components/Popular';
import Testimonial from '~/components/Testimonial';

function Home() {
    return (
        <>
            <Banner />
            <About />
            <Categories />
            <Popular />
            <CTA />
            <Concern />
            <Testimonial />
        </>
    );
}

export default Home;
