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
      image_url: 'http://googlecom',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://googlecom',
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://googlecom',
    }
  ]
}