import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  
  constructor() { }
  filled: number = 0;

  

  ngOnInit(): void {
    let x  = setInterval(() => {
      this.filled++;
      if (this.filled > 10) {
        clearInterval(x)
      }
    }, 1000)
    
    
  }



}
