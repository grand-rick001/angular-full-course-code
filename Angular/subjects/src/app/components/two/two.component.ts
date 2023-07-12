import { Component, OnInit } from '@angular/core';
import { ChatMessage, ToolsService, UserProfile } from 'src/app/services/tools.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  allChatsHistory: ChatMessage[] = [];

  constructor(private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.getChatHistory().subscribe((chatHistory) => {
      this.allChatsHistory.push(chatHistory);
      console.log(chatHistory);
      this.checkAllChatsHistory();
    });
  } 

  checkAllChatsHistory() {
    if (this.allChatsHistory.length > 10) {
      this.toolsService.getChatHistory().subscribe((chatHistory) => {
        console.log(chatHistory);
      });
    } else {
      console.log("MADADAAA! MADAYEEROOO!");
    }
  }

}
