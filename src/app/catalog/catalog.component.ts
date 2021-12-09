import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  url = "http://Beanstalk-env.eba-gjcz3rjm.us-east-1.elasticbeanstalk.com";
  catalog = ""
  message = ""
  create_name = ""
  create_price = ""
  create_content = ""
  update_id = ""
  update_name = ""
  update_price = ""
  update_content = ""
  delete_id = ""
  constructor(private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(data => {
      this.catalog = data.data;
    })
  }

  createProduct() {
    let body = {
      "name": this.create_name,
      "price": this.create_price,
      "content": this.create_content
    }
    this.http.post<any>(this.url +  '/new',body).subscribe(data => {
      console.log(data.data)
      window.location.reload()
    })
  }

  updateProduct() {
    let body = {
      "id": this.update_id,
      "name": this.update_name,
      "price": this.update_price,
      "content": this.update_content
    }
    this.http.post<any>(this.url +  '/update',body).subscribe(data => {
      console.log(data.data)
      window.location.reload()
    })
  }

  deleteProduct() {
    let body = {
      "id": this.delete_id,
    }
    this.http.post<any>(this.url +  '/delete',body).subscribe(data => {
      console.log(data.data)
      window.location.reload()
    })
  }

}
