import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { ListViewsComponent } from './list-views/list-views.component';

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
    path: 'list-videos',
    component: ListViewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
