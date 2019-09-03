import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  users: any[];
  constructor(private quiz: QuizService) {}

  ngOnInit() {
    // this.quiz.getScores().subscribe(response => {
    //   this.user === response;
    // });
  }
}
