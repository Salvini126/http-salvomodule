import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  data: Object = undefined!;
  loading: boolean = undefined!;
  o :Observable<Object> = undefined!;

  constructor() { }

  ngOnInit(): void {
  }

}
