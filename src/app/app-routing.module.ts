import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddFoundationComponentComponent } from './pages/add-foundation-component/add-foundation-component.component';
import { AddOrderComponent } from './pages/add-order/add-order.component';
import { FoundationListComponent } from './pages/foundation-list/foundation-list.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UpdateFoundationComponent } from './pages/update-foundation/update-foundation.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:keyword/:serviceId/:cityId', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Aadmin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'foundationList', component: FoundationListComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'newOrder', component: AddOrderComponent },
  { path: 'addFoundation', component: AddFoundationComponentComponent },
  { path: 'updateFoundation/:name/:foundationId/:serviceId', component: UpdateFoundationComponent },
  { path: 'homee/:id', component: HomeComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '',  redirectTo:'/home' ,pathMatch: 'full' },
  { path: '**',redirectTo:'/home' ,pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
