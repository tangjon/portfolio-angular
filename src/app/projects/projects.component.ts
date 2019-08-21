import {Component, OnInit} from '@angular/core';
import {PortfolioItem} from './portfolio-item';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  PROJECTS: PortfolioItem[] = [];
  baseAssetURL = 'assets/project_descriptions';

  constructor(public http: HttpClient) {
    /** PROJECT: Job Distribution System
     */
    let p_qmcd = new PortfolioItem('Job Distribution System',
      'assets/img/thumbnail-qmcd.png', 'January 2018', 'qmcd', 'COOP', 'Angular Web Application', 'Released/Active');
    this.addDescriptionFromFile(p_qmcd, '/qmcd/qmcd.html');
    this.PROJECTS.push(p_qmcd);

    /** PROJECT: PC Part Picker
     */
    let p_pcpp = new PortfolioItem('PC Part Picker', 'assets/img/thumbnail-pc-config.png', 'August 2018', 'pcpp',
      'Personal Project', 'Django Web Application', 'Released');
    this.addDescriptionFromFile(p_pcpp, 'bapc.html');
    this.PROJECTS.push(p_pcpp);

    /** PROJECT: Carbon Tracker
     */
    let p_ct = new PortfolioItem('Carbon Tracker', 'assets/img/thumbnail-carbon-tracker.png', 'January 2017', 'ct',
      'Class Project', 'Android Applicaiton', 'Complete');
    this.addDescriptionFromFile(p_ct, 'p_carbon_tracker.html');
    this.PROJECTS.push(p_ct);

    /** PROJECT: 33rd Scouts Website
     */
    let p_33sc = new PortfolioItem('33rd Scouts Website', 'assets/img/thumbnail-scout33.png', 'June 2015', '33sc',
      '33rd Scout Group', 'WordPress', 'Active/Released'
    );
    this.addDescriptionFromFile(p_33sc, 'p_33sc.html');
    this.PROJECTS.push(p_33sc);

    /** PROJECT: MPS Point Tracker
     */
    let p_oas = new PortfolioItem('OAS Badge Tracker', 'assets/img/thumbnail-oas.png', 'August 2017', 'oas',
      '33rd Scout Group', 'Real-time Firebase Web Application', 'Complete');
    this.addDescriptionFromFile(p_oas, 'p_oas.html');
    this.PROJECTS.push(p_oas);

    /** PROJECT: Unity Galton Game
     */
    let p_ugg = new PortfolioItem('Unity Galton Game', 'assets/img/thumbnail-galton.png', 'June 2017', 'ugg',
      'Personal Project', 'C++ Unity Game', 'Complete');
    this.addDescriptionFromFile(p_ugg, 'p_gatonbox.html');
    this.PROJECTS.push(p_ugg);

    /** PROJECT: MPS Point Tracker
     */
    // let p_mps = new PortfolioItem('MPS Point Tracker', 'assets/img/thumbnail-mps.png', 'June 2017', 'mps',
    //   'Personal Project', 'Android Application', 'To be revisited'
    //   );
    // this.addDescriptionFromFile(p_mps, 'p_mps.txt');
    // this.PROJECTS.push(p_mps);

  }

  // USE THIS TO ADD PROJECTS
  addProject(projectName, imageLink, projectDate, uniqueId, client, applicationType, lifeCycleStatus, htmlFile) {
    let prj = new PortfolioItem(projectName, imageLink, projectDate, uniqueId, client, applicationType, lifeCycleStatus);
    this.addDescriptionFromFile(prj, htmlFile);
    this.PROJECTS.push(prj);
  }

  ngOnInit() {
  }

  addDescriptionFromFile(project: PortfolioItem, fileName: string): void {
    this.http.get(this.baseAssetURL + '/' + fileName, {responseType: 'text'}).subscribe(((d: string) => project.description = d), () => project.description = '');
  }

}
