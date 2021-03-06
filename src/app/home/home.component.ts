import { Component, OnInit } from '@angular/core';
import { Home } from '../models/home';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: Array<Home>;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getRecentNews().subscribe(
      data => { this.results = data; },
      error => console.log(error)
    );
  }
}
