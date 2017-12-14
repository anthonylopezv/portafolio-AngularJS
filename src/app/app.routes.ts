import { Routes, RouterModule } from '@angular/router';

import { 
    AboutComponent,
    PortafolioComponent,
    PortafolioItemComponent
 } from './components/index.paginas';


const app_routes: Routes = [
    { path: '', component: PortafolioComponent, pathMatch: 'full'  },
    { path: 'about', component: AboutComponent, pathMatch: 'full'  },
    { path: 'portafolioitem', component: PortafolioItemComponent, pathMatch: 'full'  },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
