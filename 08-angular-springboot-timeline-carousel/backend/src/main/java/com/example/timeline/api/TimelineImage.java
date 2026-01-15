package com.example.timeline.api;

import java.time.LocalDate;

public record TimelineImage(
  String id,
  String title,
  String description,
  String imageUrl,
  LocalDate date,
  String location
) {}
