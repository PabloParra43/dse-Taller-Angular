import { Component, OnInit } from '@angular/core';
import { Series } from '../Series';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Array<Series> = []; 
  selectedSerie?: Series;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  selectSerie(serie: Series): void {
    this.selectedSerie = serie;
  }

  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = +(totalSeasons / this.series.length).toFixed(2);
  }
}



