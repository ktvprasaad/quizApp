import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionsService } from '../../questions.service';
import { Quiz } from '../../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private quizzes: Quiz[];

  //inject both the active route and the questions service
  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit() {
    //read from the dynamic route and load the proper quiz data 
    this.questionsService.getQuizzes().subscribe(Quiz => {
    //  initialize everything
      this.quizzes = Quiz;
      console.log(this.quizzes);
    });
  }

  reset(){
    this.quizzes = undefined;
  }

}