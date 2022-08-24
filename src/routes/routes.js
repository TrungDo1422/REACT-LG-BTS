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

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.onePlus, component: OnePlus },
    { path: config.routes.twoPlus, component: TwoPlus },
    { path: config.routes.banner, component: Banner, layout: null },
    { path: config.routes.about, component: About, layout: null },
    { path: config.routes.category, component: Category, layout: null },
    { path: config.routes.popular, component: Popular, layout: null },
    { path: config.routes.cta, component: Cta, layout: null },
    { path: config.routes.concern, component: Concern, layout: null },
    { path: config.routes.alumni, component: Alumni, layout: null },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
