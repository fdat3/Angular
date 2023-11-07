import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { CLUBS } from '../mock-data';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css'],
})
export class SquadComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  clubs = CLUBS;
}
