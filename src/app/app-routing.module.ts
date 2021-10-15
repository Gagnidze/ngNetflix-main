import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './shared/movie/movie.component';
import { ShowCaseComponent } from './show-case/show-case.component';

const routes: Routes = [
  {path: '', component: ShowCaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
