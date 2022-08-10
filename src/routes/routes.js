import config from '~/config';

// Layout

// Pages
import Home from '~/pages/Home';
import OnePlus from '~/pages/OnePlus';
import TwoPlus from '~/pages/TwoPlus';
import NotFound from '~/pages/NotFound';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.onePlus, component: OnePlus },
    { path: config.routes.twoPlus, component: TwoPlus },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
