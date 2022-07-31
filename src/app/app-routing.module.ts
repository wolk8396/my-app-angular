import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ComponentsinDetailComponent } from "../app/components/pages/componentsin-detail/componentsin-detail.component";
import { BasicSyntaxComponent } from './components/pages/basic-syntax/basic-syntax.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'basic-syntax', component: BasicSyntaxComponent},
  {path: 'detail', component: ComponentsinDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
