import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hisptz-filter-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {
  @Input() programs;
  @Input() programStages;

  constructor() {}

  ngOnInit() {
    console.log(this.programs, this.programStages);
  }
}
