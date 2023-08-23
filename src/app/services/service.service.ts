import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {

  width!: number;
  height!:number;
  navLook!:number;


  private width$ = new Subject()
  private height$ = new Subject()


  private navLook$ = new Subject()

  constructor() { }

  ngOnInit(): void {
    this.onResize(window)
  }

  onResize(event:any) {

    this.width = event.innerWidth



    this.width$.next(this.width)
  }


  subWidth$():Observable<any> {
    return this.width$.asObservable()
  }

  subHeight$():Observable<any> {
    return this.height$.asObservable()
  }

}
