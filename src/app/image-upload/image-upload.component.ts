import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedImage: File | null = null;

  constructor(private http: HttpClient) { }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  uploadImage() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('image', this.selectedImage);

      this.http.post('http://127.0.0.1:5000/upload', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    }
  }
}
