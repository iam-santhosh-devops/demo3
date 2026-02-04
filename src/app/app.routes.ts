import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ToolsComponent } from './tools/tools.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'customers',
        component:CustomersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'tools',
        component: ToolsComponent
    }
];
