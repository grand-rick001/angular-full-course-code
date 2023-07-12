import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolsService, UserProfile } from 'src/app/services/tools.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  name: string = '';
  age: number = 0;
  userForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    age: [null, Validators.required],
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
    this.toolsService.updateUserProfile(this.userForm.value);
    console.log(this.userForm.value);
  }

}
