import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  memoji = {
    source : "../../../../../assets/uploads/skills-memoji.png",
    alt: "Portfolio: Skills Memoji"
  }

  frontend = "JavaScript, Angular, CSS, Sass, Bootstrap"
  backend = "PHP, MongoDB, Node JS, Express JS, REST API, JSON"
  otherSkills = "Git, GitHub, WordPress, TypeScript, Heroku"
  currentlyLearning = "SQL, Figma"

  constructor() { }

  ngOnInit(): void {
  }

}
