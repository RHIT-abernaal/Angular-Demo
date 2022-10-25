import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-displayer',
  templateUrl: './picture-displayer.component.html',
  styleUrls: ['./picture-displayer.component.css']
})

export class PictureDisplayerComponent implements OnInit {
  @Input() month?: number;
  @Input() day?: number;
  @Input() goalMonth?: number;
  @Input() goalDay?: number;
  @Input() url?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
