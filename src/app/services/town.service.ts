import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TownObject } from '../Utils/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TownService {
  constructor(private http: HttpClient) {}
  savedTownsList: TownObject[] = [];

  // REFACTOR for saved towns

  // returnOneTown(townName: string) {
  //   const url = `http://localhost:5000/saved_towns/${townName}`;
  //   return this.http.get<any>(url, httpOptions);
  // }
  // returnSavedTownList() {
  //   const url = `http://localhost:5000/saved_towns`;
  //   return this.http.get<any>(url, httpOptions);
  // }

  // saveTown(finishedTown: Object[], description: string, name: string) {
  //   this.returnSavedTownList().subscribe((townsReturned) => {
  //     this.savedTownsList = this.savedTownsList.concat(townsReturned);
  //   });

  //   const newTown = {
  //     Name: name,
  //     Description: description,
  //     Cards: finishedTown,
  //     id: this.savedTownsList.length,
  //   };
  //   const url = `http://localhost:5000/saved_towns`;
  //   return this.http.post<TownObject>(url, newTown, httpOptions).subscribe();
  // }
}
