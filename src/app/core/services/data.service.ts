import { Injectable } from '@angular/core';
import { BaseHttpService } from './data-access/base-http.service';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/bookin.interface';
import { ClientData } from '../interfaces/client.interface';
import { HttpParams } from '@angular/common/http';
import { RoomData } from '../interfaces/room.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseHttpService {
  getBookins(): Observable<Booking> {
    const params = new HttpParams()
      .set('populate[rooms][fields][0]', 'room_number')
      .set('populate[rooms][fields][1]', 'type')
      .set('populate[client]', '*')
      .set('populate[category]', '*')
      .set('fields', '*')
      .set('populate[rooms][fields][2]', 'id');

    return this.http.get<Booking>(`${this.api_url}/bookings`, { params });
  }

  getCLients(): Observable<ClientData> {
    return this.http.get<ClientData>(`${this.api_url}/clients`);
  }

  getRooms(): Observable<RoomData> {
    return this.http.get<RoomData>(`${this.api_url}/rooms`);
  }
}
