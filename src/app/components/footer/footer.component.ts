import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  nameCompany = "Nir's Store";
  locationCompany = " 9878/25 sec 9 rohini 35 ";
  phoneCompany = "  +91-9999878398 ";
  emailCompany = " info@example.com  ";
  aboutCompany = "Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo."


  constructor() { }

  ngOnInit(): void {
  }

}
