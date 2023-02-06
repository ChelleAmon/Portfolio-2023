import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  imgUrl = '../../../../../assets/uploads/projects-id.png';

  contributions = [
    {
      name: 'MKG Tax Consulting',
      imgUrl: "../../../../../assets/uploads/mkg.jpg",
      imgAlt: "Portfolio: MKG Tax Consulting screenshot",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: "MEAN Stack, CSS, Heroku",
      website: "https://mkgtaxconsultants.com/",
    },
    {
      name: 'Foundation for FUSD',
      imgUrl: "../../../../../assets/uploads/fusd.jpg",
      imgAlt: "Portfolio: Foundations for FUSD screenshot",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: "https://foundation4fusd.org/",
    },
    {
      name: 'The Elementals',
      imgUrl: "../../../../../assets/uploads/rps.jpg",
      imgAlt: "Portfolio: The Elementals screenshot",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: "/",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
