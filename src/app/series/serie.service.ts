import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Series } from './Series';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

private apiUrl: string = environment.baseUrl + 'series'

constructor(private http: HttpClient) { }

getSeries(): Observable<Series[]> {
  return this.http.get<Series[]>('assets/series.json');
}



}
