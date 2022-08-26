import config from '~/config';

// Layout

// Pages
import Home from '~/pages/Home';
import OnePlus from '~/pages/OnePlus';
import TwoPlus from '~/pages/TwoPlus';
import NotFound from '~/pages/NotFound';
import Banner from '~/pages/Banner';
import About from '../pages/About';
import Category from '~/pages/Category';
import Popular from '~/pages/Popular';
import Cta from '~/pages/Cta';
import Concern from '~/pages/Concern';
import Alumni from '~/pages/Alumni';
import NavBar from '~/pages/NavBar';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.onePlus, component: OnePlus, layout: '1' },
    { path: config.routes.twoPlus, component: TwoPlus, layout: '1' },
    { path: config.routes.admin, component: Banner, layout: '2' },
    { path: config.routes.banner, component: Banner, layout: '2' },
    { path: config.routes.about, component: About, layout: '2' },
    { path: config.routes.category, component: Category, layout: '2' },
    { path: config.routes.popular, component: Popular, layout: '2' },
    { path: config.routes.cta, component: Cta, layout: '2' },
    { path: config.routes.alumni, component: Alumni, layout: '2' },
    { path: config.routes.navBar, component: NavBar, layout: '2' },
    { path: config.routes.concern, component: Concern, layout: '2' },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
