import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { ListViewsComponent } from './list-views/list-views.component';
import { LoginComponent } from './login/login.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post/detalleDeVideo/:id',
    component: PostDetailComponent,
  },
  { path: 'post/:id', component: PostDetailComponent },
  {
    path: 'list-views',
    component: ListViewsComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
