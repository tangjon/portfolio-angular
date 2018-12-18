import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  link_github = environment.link_github;
  link_linkedIn = environment.link_linkedIn;
  email = environment.email;

  constructor() {
  }

  ngOnInit() {
  }

}
