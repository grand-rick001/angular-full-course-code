import { Component, OnInit } from '@angular/core';
import { ToolsService, UserProfile } from 'src/app/services/tools.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  name: string = '';
  age: number = 0;

  constructor(private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.getUserProfile().subscribe((userProfile) => {
      this.name = userProfile.name;
      this.age = userProfile.age;
    });
  } 

}
