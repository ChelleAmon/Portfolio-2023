import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profileProps= {
    src: "../../../../../assets/uploads/IMG_5879.png",
    alt: "Gichelle Portfolio- Greetings"
  }

  headerContents = {
    name: "Gichelle Amon",
    job: "Full-Stack Software Developer"
  }

  socialMediaAnchorProps = {
    target: "_blank",
    rel: "noopener noreferrer"
  }

  socialMedia_details = [
    { name: "Portfolio- LinkedIn", website: "https://www.linkedin.com/in/gichelle-amon/", icon: "../../../../../assets/uploads/LinkedIn.png"},
    { name: "Portfolio- Github", website: "https://github.com/ChelleAmon", icon: "../../../../../assets/uploads/GitHub.png" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
