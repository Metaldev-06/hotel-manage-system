import { Injectable } from '@angular/core';
import { BaseHttpService } from './data-access/base-http.service';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/bookin.interface';
import { HttpParams } from '@angular/common/http';
import { Room } from '../interfaces/room.interfaces';
import { Client } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseHttpService {
  getBookins(): Observable<Booking> {
    // const params = new HttpParams()
    //   .set('populate[rooms][fields][0]', 'room_number')
    //   .set('populate[rooms][fields][1]', 'type')
    //   .set('populate[client]', '*')
    //   .set('populate[category]', '*')
    //   .set('fields', '*')
    //   .set('populate[rooms][fields][2]', 'id');

    return this.http.get<Booking>(`${this.api_url}/bookings`);
  }

  getClients(): Observable<Client> {
    return this.http.get<Client>(`${this.api_url}/clients`);
  }

  getRooms(): Observable<Room> {
    return this.http.get<Room>(`${this.api_url}/rooms`);
  }
}
