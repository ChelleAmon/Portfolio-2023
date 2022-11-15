import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/contents/header/header/header.component';
import { AboutComponent } from './components/contents/about/about/about.component';
import { SkillsComponent } from './components/contents/skills/skills/skills.component';
import { ProjectsComponent } from './components/contents/projects/projects/projects.component';
import { ContactComponent } from './components/contents/contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
