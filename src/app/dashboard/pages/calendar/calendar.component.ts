import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DataService } from '../../../core/services/data.service';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { BookingData } from '../../../core/interfaces/bookin.interface';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, NzIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  private readonly dataServices = inject(DataService);
  // private readonly cdr = inject(ChangeDetectorRef);

  public loading = signal<boolean>(true);

  ngOnInit(): void {
    this.getBookins();
  }

  getBookins(): void {
    this.dataServices.getBookins().subscribe({
      next: (res: any) => {
        this.updateCalendarEvents(res.data);
        this.loading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  updateCalendarEvents(bookings: BookingData[]): void {
    const events = bookings.map((booking) => ({
      title: `Habitación N° ${booking.attributes.rooms.data[0].attributes.room_number}`,
      start: new Date(booking.attributes.checking),
      end: new Date(booking.attributes.checkout),
    }));

    console.log(events);

    this.calendarOptions = {
      ...this.calendarOptions,
      events: events,
    };

    // this.cdr.detectChanges();

    console.log(this.calendarOptions);
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [],
  };
}
