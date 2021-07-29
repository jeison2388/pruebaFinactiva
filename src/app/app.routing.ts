import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 


export const routes: Routes = [
    { 
        path: '', loadChildren: () => import('./modulos/comics/comics.module').then(m => m.ComicsModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }