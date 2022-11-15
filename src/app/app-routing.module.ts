import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/contents/about/about/about.component';
import { ContactComponent } from './components/contents/contact/contact/contact.component';
import { HeaderComponent } from './components/contents/header/header/header.component';
import { ProjectsComponent } from './components/contents/projects/projects/projects.component';
import { SkillsComponent } from './components/contents/skills/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {path: 'home', component: HeaderComponent},
      {path: 'about', component: AboutComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
