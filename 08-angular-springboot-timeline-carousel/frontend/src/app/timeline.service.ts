import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TimelineImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  constructor(private http: HttpClient) {}

  getTimelineImages(): Observable<TimelineImage[]> {
    return this.http.get<TimelineImage[]>('/api/timeline');
  }
}
