import {Component, OnInit} from '@angular/core';
import {PortfolioItem} from './portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  PROJECTS: PortfolioItem[];

  constructor() {
    this.PROJECTS = [];
    this.PROJECTS.push(new PortfolioItem('Job Distribution System', 'assets/img/thumbnail-qmcd.png', 'January 2018'));
    this.PROJECTS.push(new PortfolioItem('PC Part Picker', 'assets/img/thumbnail-pc-config.png', 'August 2018'));
    this.PROJECTS.push(new PortfolioItem('Carbon Tracker', 'assets/img/thumbnail-carbon-tracker.png', 'January 2017'));
    this.PROJECTS.push(new PortfolioItem('33rd Scouts Website', 'assets/img/thumbnail-scout33.png', 'June 2015'));
    this.PROJECTS.push(new PortfolioItem('OAS Badge Tracker', 'assets/img/thumbnail-oas.png', 'August 2017'));
    this.PROJECTS.push(new PortfolioItem('Unity Galton Game', 'assets/img/thumbnail-galton.png', 'June 2017'));
    this.PROJECTS.push(new PortfolioItem('MPS Point Tracker', 'assets/img/thumbnail-mps.png', 'June 2017'));

  }

  ngOnInit() {
  }

}
