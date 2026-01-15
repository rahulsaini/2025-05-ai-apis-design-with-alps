import { Component, OnInit } from '@angular/core';
import { TimelineImage, TimelineService } from './timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timeline: TimelineImage[] = [];
  activeIndex = 0;

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.timelineService.getTimelineImages().subscribe({
      next: (data) => {
        this.timeline = data;
        this.activeIndex = 0;
      },
      error: () => {
        this.timeline = [
          {
            id: 'offline',
            title: 'Offline Demo',
            description: 'API is unavailable, showing local sample data.',
            imageUrl:
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
            date: '2024-11-01',
            location: 'Remote'
          }
        ];
      }
    });
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  next(): void {
    if (!this.timeline.length) {
      return;
    }
    this.activeIndex = (this.activeIndex + 1) % this.timeline.length;
  }

  previous(): void {
    if (!this.timeline.length) {
      return;
    }
    this.activeIndex = (this.activeIndex - 1 + this.timeline.length) % this.timeline.length;
  }
}
