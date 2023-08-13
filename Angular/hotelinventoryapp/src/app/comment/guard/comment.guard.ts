import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Comments } from '../comment';
import { inject } from '@angular/core';
import { CommentService } from '../comment.service';

export const commentGuard: ResolveFn<Comments[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const commentService = inject(CommentService)
  return commentService.getComments();
}
