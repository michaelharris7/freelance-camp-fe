import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://c.pxhere.com/photos/de/59/office_freelancer_computer_business_work_laptop_creative_iphone-909729.jpg!d'
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://c.pxhere.com/photos/2d/2e/office_freelancer_computer_business_work_laptop_creative_iphone-537951.jpg!d'
    }
  ]
}