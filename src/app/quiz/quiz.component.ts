import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any[];
  score: number = 0;

  constructor(private quiz: QuizService, private router: Router) {}

  ngOnInit() {
    this.quiz.getQuestions().subscribe(response => {
      this.questions = response;
    });
  }

  addScore(form: NgForm) {
    for (let i = 0; i < this.questions.length; i++) {
      if (form.value[i] === this.questions[i].answer) {
        this.score++;
      } else {
        this.score = this.score;
      }
    }
    this.quiz.addScore(form.value.username, this.score).subscribe(response => {
      this.score = response;
    });
    console.log(form.value, this.questions, this.score);
    this.router.navigate(["results"]);
  }
}
