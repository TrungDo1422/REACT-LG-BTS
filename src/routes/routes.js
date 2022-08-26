import config from '~/config';

// Layout

// Pages
import Home from '~/pages/Home';
import OnePlus from '~/pages/OnePlus';
import TwoPlus from '~/pages/TwoPlus';
import NotFound from '~/pages/NotFound';
import Admin from '~/pages/Admin';
import About from '~/pages/About';
import Category from '~/pages/Category';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.onePlus, component: OnePlus },
    { path: config.routes.twoPlus, component: TwoPlus },
    { path: config.routes.about, component: About, layout: null },
    { path: config.routes.category, component: Category, layout: null },
    { path: config.routes.admin, component: Admin, layout: null },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
