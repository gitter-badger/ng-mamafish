import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routingPathConfig } from '@config/routing-path.config';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './users/users.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { AuthGuard } from '@guard/auth.guard';
import { UnsaveGuard } from '@guard/unsave.guard';

const routes: Routes = [
  {
    path: routingPathConfig.applications.default,
    redirectTo: routingPathConfig.applications.users,
    pathMatch: 'full',
  },
  {
    path: routingPathConfig.applications.users,
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: {
      title: '人员',
      keywords: '人员,人员管理',
      description: '提供人员的新增、修改、删除和查询',
      icon: 'user'
    },
  },
  {
    path: routingPathConfig.applications.mailBox,
    component: MailBoxComponent,
    canActivate: [AuthGuard],
    canDeactivate: [UnsaveGuard],
    data: {
      title: '邮箱',
      keywords: '邮箱,inbox,email',
      description: '一个简单实用的邮箱管理',
      icon: 'mailBox'
    },
  },
  {
    path: routingPathConfig.applications.chat,
    component: ChatComponent,
    canActivate: [AuthGuard],
    data: {
      title: '会话',
      keywords: '会话,聊天,chat',
      description: '选择一个好友来分享你最近遇到的快乐的事',
      icon: 'chat'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
