import { Component, input } from '@angular/core';
import { RoomData } from '../../../core/interfaces/room.interfaces';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css',
})
export class RoomCardComponent {
  public room = input.required<RoomData>();
}
