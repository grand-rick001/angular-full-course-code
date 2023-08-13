import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  comments$ = this.commentService.getComments();

  commentz$ = this.activatedRoute.data.pipe(
    // map((data) => data['comments'])
    pluck('comments')
    )

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.activatedRoute.data.subscribe((data) => {
    //   console.log(data['comments']);
    // })
  }
}
