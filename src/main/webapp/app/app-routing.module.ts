import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { MyticketsComponent } from 'app/mytickets/mytickets.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'jhi-mytickets',
          component: MyticketsComponent
        },
        {
          path: 'admin',
          loadChildren: './admin/admin.module#BugTrackerJHipsterAdminModule'
        },
        ...LAYOUT_ROUTES
      ],
      { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class BugTrackerJHipsterAppRoutingModule {}
