import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  user: any[];
  listOfQuestions: any[];

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:5000/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:5000/scores");
  }

  addScore(username: string, score: number): Observable<any> {
    return this.http.post("http://localhost:5000/scores", { username, score });
  }
}
