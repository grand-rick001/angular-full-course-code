import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  count: number = 0;

  constructor(private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.getCounterSubject().subscribe((value) => {
      this.count = value;
    });
  } 

}
