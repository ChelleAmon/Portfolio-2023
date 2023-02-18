import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  imgUrl = '../../../../../assets/uploads/projects-id.png';

  socialMediaAnchorProps = {
    target: "_blank",
    rel: "noopener noreferrer"
  }

  contributions = [
    {
      name: 'MKG Tax Consulting',
      imgUrl: "../../../../../assets/uploads/mkg.jpg",
      imgAlt: "Portfolio: MKG Tax Consulting screenshot",
      description:
        'A leading tax preparation FinTech that provides virtual tax preparation, tax refund financial products accessible on mobile devices to customers with limited access to consumer credit.',
      technologies: "PHP, CSS, BootStrap, Sass, JavaScript, WordPress, Gutenberg WPEngine",
      websiteAvailable: true,
      demoAvailable: false,
      link: "https://mkgtaxconsultants.com/",
    },
    {
      name: 'Foundation for FUSD',
      imgUrl: "../../../../../assets/uploads/fusd.jpg",
      imgAlt: "Portfolio: Foundations for FUSD screenshot",
      description:
        'A non-profit 501(c)3 organization dedicated to building community and business partnerships and engaging philantrophic organizations to empower every child to achieve their full potential.',
        technologies: "PHP, CSS, BootStrap, Sass, JavaScript, WordPress, Gutenberg, WPEngine",
        websiteAvailable: true,
        demoAvailable: false,
        link: "https://foundation4fusd.org/",
    },
    {
      name: 'The Elementals',
      imgUrl: "../../../../../assets/uploads/rps.jpg",
      imgAlt: "Portfolio: The Elementals screenshot",
      description:
        'A Full-Stack Rock-Paper-Scissor Game with the following game modes: Player vs Computer and Player vs Player.',
      technologies: "MEAN Stack (MongoDB, Express.js, Angular 2, Node.js), CSS, REST API, Heroku",
      websiteAvailable: false,
      demoAvailable: true,
      link:"/"
    },
  ];


  portfolio_links = [
    {
      name: 'Github',
      url: 'https://github.com/ChelleAmon/Portfolio-2023',
      img_src: '../../../../../assets/uploads/GitHub2.png',
      description: 'Code and documentation'
    },
    {
      name: "Figma",
      url: 'https://www.figma.com/file/hfZAi64Mkgfm3z7kyNvzCS/Final-Portfolio-2023?node-id=0%3A1&t=u6tjk1QR7zuEw0HC-0',
      img_src: '../../../../../assets/uploads/Figma.png',
      description: 'Design prototype'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
