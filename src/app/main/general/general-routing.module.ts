import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routingPathConfig } from '@config/routing-path.config';

const routes: Routes = [
  {
    path: routingPathConfig.general.default,
    redirectTo: routingPathConfig.general.pages,
    pathMatch: 'full'
  },
  {
    path: routingPathConfig.general.dashboards,
    loadChildren: './dashboards/dashboards.module#DashboardsModule',
    data: {
      title: '仪表盘'
    }
  },
  {
    // 根路由配置的是路由模块，不是组件
    path: routingPathConfig.general.pages,
    loadChildren: './pages/pages.module#PagesModule',
    data: {
      title: '页面'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class GeneralRoutingModule {}
