import React,{Children} from 'react';
import { lazy, Suspense } from 'react';
import router from '../utils/RouterObj';
const Home = lazy(() => import("../pages/Home"));

const Routes = [

    {
        path : router.home,
        element :(
         <Suspense fallback={<div>Loading..</div>}>
            <Home />
         </Suspense>
        )
    },
    {

    },
]
export default Routes;