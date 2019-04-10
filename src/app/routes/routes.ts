import { LayoutsComponent } from '../layouts/layouts.component';

// 配置路由
export const routes = [
    // 默认路由
    { path: '', redirectTo: '/layout', pathMatch: 'full' },
    {
        path: 'layout', component: LayoutsComponent,
        children: [
            { path: 'layout', redirectTo: '/layout/json-server', pathMatch: 'full'  },
        ]
    }
];

