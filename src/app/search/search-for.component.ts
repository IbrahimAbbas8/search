import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Observable, Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { Numbers } from './numbers';

@Component({
  selector: 'app-search-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-for.component.html',
  styleUrl: './search-for.component.css'
})
export class SearchForComponent  {
  constructor(private searchService: SearchService) {}
  
  numbersArray: number[] = Array.from({ length: 114 }, (_, i) => i + 1);
  searchBySurahNumber$!: Subscription;
  searchTranslationOfSurah$!: Subscription;
  searchTranslationOfSurahInArabic$!: Subscription;
  number: Numbers = new Numbers();
  surahNumber: string = '';
  english: string = '';
  arabic: string = '';
  details: string = '';

  

  select(form: NgForm) {
    this.number = form.value;
    console.log(form.value);

    this.searchBySurahNumber$ = this.searchService.searchBySurahNumber(this.number.SurahNumber, this.number.VerseNumber)
      .subscribe(c => {
        this.surahNumber = c.text;
      });
    
    this.searchTranslationOfSurah$ = this.searchService.searchTranslatioOfSurah(this.number.SurahNumber, this.number.VerseNumber)
      .subscribe(c => {
        this.english = c.text;
      });
  

    this.searchTranslationOfSurahInArabic$ = this.searchService.searchTranslatioOfSurahInArabic(this.number.SurahNumber, this.number.VerseNumber)
      .subscribe(c => {
        this.arabic = c.text;
      });

    this.details =`Al-Quran - Chapter:${this.number.SurahNumber}, Verse:${this.number.VerseNumber}`
  }
}
