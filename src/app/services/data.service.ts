import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private baseUrl = "http://localhost:58958/api";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/category`)
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/category/all`)
  }

  deleteCategory(id:any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/category/${id}`)
  }

  updateCategory(data:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/category`,data)
  }

  addCategory(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/category`,data)
  }

  

  getCoupons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/coupon`)
  }
  getAllCoupons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/coupon/all`)
  }

  activateCoupons(couponId:any,active:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/coupon/${couponId}/${active}`,{})
  }

  addCoupon(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/coupon`,data)
  }

  
  getAdresses(userId:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/address/${userId}`)
  }

  addAddress(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/address`,data)
  }

  deleteAddress(id:any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/address/${id}`)
  }


  getBooksByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/book/category/${catId}`)
  }
  
  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/book/${id}`)
  }

  searchBooks(type:any,key:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/book/search/${type}/${key}`)
  }

  searchAllBooks(type:any,key:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/book/search/all/${type}/${key}`)
  }

  addBook(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/book`,data)
  }

  deleteBook(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/book/${id}`)
  }

  updateBook(data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/book`,data)
  }



  getCartById(cartId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cart/${cartId}`)
  }

  updateQty(item: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/cart`, item)
  }

  addToCart(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cart`, data)
  }

  removeFromCart(itemId: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/cart/${itemId}`)
  }


  addToWishlist(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/wishlist`, data)
  }
  removeFromWishlist(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/wishlist/${id}`)
  }
  getWishlistById(userId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/wishlist/${userId}`)
  }



  placeOrder(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/order`, data)
  }

  getOrders(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/order`)
  }
  getOrderItems(orderId:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/order/${orderId}`)
  }








}
