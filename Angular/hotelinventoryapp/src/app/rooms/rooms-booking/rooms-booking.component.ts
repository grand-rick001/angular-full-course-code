import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  id$: Observable<string> = this.router.paramMap.pipe(map((params: ParamMap) => params.get('id')!));
  
  constructor (private router: ActivatedRoute) {}

  ngOnInit() {
    // Best approach of dealing with accessing route parameters,it's a more functional and reactive way
    
    // this.id$ = this.router.params.pipe(
    //   map((params: Params) => params['id'])
    // );
  }

}
