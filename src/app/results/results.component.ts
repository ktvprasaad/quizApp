import { Component, Input } from '@angular/core';
import { Answers } from '../../quiz.model';

@Component ({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() answers: Answers;
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-results',
//   templateUrl: './results.component.html',
//   styleUrls: ['./results.component.scss']
// })
// export class ResultsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
