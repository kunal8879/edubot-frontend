import { Component, OnInit, ViewChild } from '@angular/core';
import { UnansweredQuestion } from '../models/unanswered_question';
import { UnansweredQuestionService } from './unanswered_question.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// let unanswered_question: UnansweredQuestion[] = [
//   { id: 1, chat: 'Hydrogen', time: 'new time' },
//   { id: 2, chat: 'Helium', time: 'new time' },
//   { id: 3, chat: 'Lithium', time: 'new time' },
//   { id: 4, chat: 'Beryllium', time: 'new time' },
//   { id: 5, chat: 'Boron', time: 'new time' },
//   { id: 6, chat: 'Carbon', time: 'new time' },
//   { id: 7, chat: 'Nitrogen', time: 'new time' },
//   { id: 8, chat: 'Oxygen', time: 'new time' },
//   { id: 9, chat: 'Fluorine', time: 'new time' },
//   { id: 10, chat: 'Neon', time: 'new time' }
// ];

@Component({
  selector: 'app-unanswered_questions',
  templateUrl: './unanswered_questions.component.html',
  styleUrls: ['./unanswered_questions.component.css']
})
export class UnansweredQuestionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Index', 'Questions', 'Time'];
  dataSource: MatTableDataSource<UnansweredQuestion>;
  isLoaded: boolean = false;

  constructor(private unansweredQuestion: UnansweredQuestionService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.getAllUnansweredQuestions();
    this.isLoaded = false;
  }

  getAllUnansweredQuestions() {
    this.unansweredQuestion.getUnansweredQuestion().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

}