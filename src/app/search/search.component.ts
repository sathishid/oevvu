import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from '../service/youtube.service';
import { Item } from '../model/item';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, MatCardModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  jsonData: Item[] = [];
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.loadItems();
  }

  constructor(private youtubeService: YoutubeService) {

  }
  loadItems() {
    this.youtubeService.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }
}


