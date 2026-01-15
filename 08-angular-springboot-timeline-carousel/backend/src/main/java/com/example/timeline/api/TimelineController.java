package com.example.timeline.api;

import java.time.LocalDate;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/timeline")
public class TimelineController {

  @GetMapping
  public List<TimelineImage> getTimelineImages() {
    return List.of(
      new TimelineImage(
        "launch",
        "Launch Day",
        "We kicked off the project with a public demo.",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        LocalDate.of(2024, 1, 15),
        "San Francisco, CA"
      ),
      new TimelineImage(
        "roadshow",
        "Roadshow",
        "A multi-city tour sharing the product story.",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        LocalDate.of(2024, 4, 10),
        "Austin, TX"
      ),
      new TimelineImage(
        "summit",
        "Community Summit",
        "Gathered feedback from early adopters.",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        LocalDate.of(2024, 8, 5),
        "New York, NY"
      )
    );
  }
}
