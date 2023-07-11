import { Component } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  inputText: string = '';

  constructor(private toolsService: ToolsService) { }

  increment() {
    this.toolsService.increment();
    // console.log(this.toolsService.getCounter());
  }

  decrement() {
    this.toolsService.decrement();
    // console.log(this.toolsService.getCounter());
  }
}
