import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent {
  constructor(private http: HttpClient) {}
  imageUrl: any = {};
  endpoint = 'get_image';

  ngOnInit() {
    this.dataFetch();
  }

  dataFetch() {
    this.http.get(`http://localhost:5000/${this.endpoint}`)
      .subscribe(
        (response: any) => {
          this.imageUrl = response;
          console.log(response);
        },
        (error) => {
          console.error('Error fetching image data:', error);
        }
      );
  }
}
