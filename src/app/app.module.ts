import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';


const appRoutes: Routes= [
{ path: '', title:"first component", component: HomeComponent },
{ path: 'users', component: UsersComponent,
children:[{ path: ':id/:name', component: UsersComponent }] },


{ path: 'categories', component: CategoriesComponent },
{path: 'templateForm', component: TemplateFormComponent},
{path: 'reactiveForm', component: ReactiveFormsComponent},
{ path: 'not-found', component: PagenotfoundComponent },
{path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    PagenotfoundComponent,
    ReactiveFormsComponent,
    TemplateFormComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
