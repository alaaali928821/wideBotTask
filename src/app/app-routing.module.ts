import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//This is my case 
const routes: Routes = [
    // {
    //     path: '',
    //     component: HomeComponent
    // },
    // {
    //     path: 'about',
    //     component: AboutComponent
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }