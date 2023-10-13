import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DocumentViewComponent } from './document-view/document-view.component';

const routes: Routes = [
  { path: '', component: ImageUploadComponent },
  { path: 'data', component: DocumentViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
