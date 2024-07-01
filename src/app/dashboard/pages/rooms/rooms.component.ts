import { Component, OnInit, inject, signal } from '@angular/core';
import { RoomCardComponent } from '../../../shared/components/room-card/room-card.component';
import { DataService } from '../../../core/services/data.service';
import { Datum, RoomData } from '../../../core/interfaces/room.interfaces';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomCardComponent, NzIconModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  private readonly dataService = inject(DataService);

  public loading = signal<boolean>(true);
  public rooms = signal<Datum[]>([]);

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.dataService.getRooms().subscribe({
      next: (res: RoomData) => {
        this.rooms.set(res.data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
