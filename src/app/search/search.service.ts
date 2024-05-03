import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchBySurahNumber } from "./search-by-surah-number";

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    constructor(private httpClint : HttpClient){}


    searchBySurahNumber(x?  : number, y? : number) : Observable<SearchBySurahNumber>{
        return this.httpClint.get<SearchBySurahNumber>(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranindopak/${x}/${y}.json`);
    }

    searchTranslatioOfSurah(x? : number, y? : number) : Observable<SearchBySurahNumber>{
        return this.httpClint.get<SearchBySurahNumber>(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdelhaleem/${x}/${y}.json`);
    }

    searchTranslatioOfSurahInArabic(x? : number, y? : number) : Observable<SearchBySurahNumber>{
        return this.httpClint.get<SearchBySurahNumber>(`https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafsir-muyassar/${x}/${y}.json`);
    }

}