import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _categoryhttp:HttpClient) { }

  categories()
  {
   return this._categoryhttp.get(`${baseUrl}/category/`);
  }

  addcategories(category:any)
  {
    return this._categoryhttp.post(`${baseUrl}/category/`,category);
  }

}
