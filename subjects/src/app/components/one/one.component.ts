import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolsService, UserProfile, ChatMessage } from 'src/app/services/tools.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  name: string = '';
  age: number = 0;
  chatForm: FormGroup = this.fb.group({
    text: [null, Validators.required],
    date: [null, Validators.required],
  });
  // userForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   age: new FormControl(null, Validators.required),
  // });

  constructor(private toolsService: ToolsService, private fb: FormBuilder) { }

  onSubmit(): void {
    // const userProfile: UserProfile = {
    //   name: this.name,
    //   age: this.age,
    // };
    this.toolsService.addMessage(this.chatForm.value);
    // console.log(this.chatForm.value);
  }

}
