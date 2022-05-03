import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onHoverOfJobTittle() {
    console.log('On Hover job title');
  }
  onHoverLeftOfJobTittle() {
    console.log('On Hover job title');
  }

  changeSizeOfText(text: string, size: number) {}
  goToWebsite(website: string) {
    window.open(website);
  }
  goToMediumHomepage() {
    this.goToWebsite('https://medium.com/@hirenmore');
  }
  openResume() {
    this.goToWebsite('../../../assets/Files/pdfs/resume.pdf');
  }
}
