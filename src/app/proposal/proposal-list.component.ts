import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://www.harriscoding.com', 'Ruby on Rails', 150, 120, 15, 'mike@harriscoding.com')
  proposalTwo: Proposal = new Proposal(90, 'XYZ Company', 'http://www.harriscoding.com', 'Ruby on Rails', 150, 120, 15, 'mike@harriscoding.com')
  proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://www.harriscoding.com', 'Ruby on Rails', 150, 120, 15, 'mike@harriscoding.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}