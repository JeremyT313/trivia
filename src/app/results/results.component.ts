import { Component, OnInit, Input } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  user: any[];
  questions: any[];
  constructor(private quiz: QuizService) {}

  ngOnInit() {}
}
