import { Component, OnInit } from '@angular/core';
import { StackOverflowService } from '../../services/stack-overflow.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  tagSerchQuery = '';

  constructor(private stackOverflowService: StackOverflowService) { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  search(): void {
    if (this.tagSerchQuery.trim()) {
      this.stackOverflowService.search(this.tagSerchQuery);
      this.tagSerchQuery = '';
    }
  }
}
