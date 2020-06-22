import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: '**', pathMatch: 'full', redirectTo: '#' },
];

@NgModule({
    imports: [
        RouterModule.forRoot( APP_ROUTES, { useHash: true })
    ]
})

export class AppRoutingModule { }