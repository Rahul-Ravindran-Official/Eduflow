import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

export interface Tag {
  id: string;
  tagName: string;
}

export interface SelectWithTag {
  id: string;
  viewValue: string;
  tags: Tag[];
}

export interface Select {
  id: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent {

  @Input() selectedTagId = -1;
  @Input() selectedGroupIdToPost = 1;
  @Input() selectedAnonymityScopeId = 1;
  @Input() htmlContent = 'Content';

  defaultAnonymityScope = '1';
  anonymityScope: Select[] = [
    {id: '0', viewValue: 'Anonymous'},
    {id: '1', viewValue: 'Gopal Munapillai'},
  ];

  defaultGroup = '1';
  classes: SelectWithTag[] = [
    {   id: '1',
        viewValue: 'MAT 102',
        tags: [
          {tagName: 'PS1', id: '1'},
          {tagName: 'PS2', id: '2'},
          {tagName: 'PS3', id: '3'},
          {tagName: 'Generic', id: '4'},
        ]
    },
    {
        id: '2',
        viewValue: 'CSC 108',
        tags: [
          {tagName: 'Assignment 1', id: '5'},
          {tagName: 'Codebase', id: '6'},
          {tagName: 'Assignment 2', id: '7'},
          {tagName: 'Generic', id: '8'},
        ]
    },
    {
      id: '3',
      viewValue: 'MAT 135',
      tags: [
        {tagName: 'Online Assignment 1', id: '9'},
        {tagName: 'Online Assignment 2', id: '10'},
        {tagName: 'Test 1', id: '11'},
        {tagName: 'Generic', id: '12'},
      ]
    },
  ];

  constructor(private snackBar: MatSnackBar) {}

  onSelectionChangedAnonymityLevel($event) {
    this.selectedAnonymityScopeId = $event.value;
    this.showSnackbarMessage('You will be posting as ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId());
  }

  onSelectionChangedGroup($event) {
    this.selectedGroupIdToPost = $event.value;
    // Resetting Tag because tag corresponds to a particular class
    this.selectedTagId = -1;
    this.showSnackbarMessage('You will be posting to ' + this.getClassNameFromChosenClassId());
  }
  onTagChangedGroup($event) {
    this.selectedTagId = $event.value;
    console.log($event.value);
    this.showSnackbarMessage('Changed Tag to ' + this.getTagNameFromChosenTagId());
  }

  postQuestion() {
    this.showSnackbarMessage(
      'PSEUDO POST QUESTION' + '\n' +
      'HTML Content: ' + this.htmlContent + '\n' +
      'Class: ' + this.getClassNameFromChosenClassId() + '\n' +
      'Anonymity Level: ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId() + '\n' +
      'Tag: ' + this.getTagNameFromChosenTagId()
    );
  }

  saveDraft() {
    this.showSnackbarMessage(
      'PSEUDO SAVE DRAFT' + '\n' +
      'HTML Content: ' + this.htmlContent + '\n' +
      'Class: ' + this.getClassNameFromChosenClassId() + '\n' +
      'Anonymity Level: ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId() + '\n' +
      'Tag: ' + this.getTagNameFromChosenTagId()
    );
  }

  // Utility functions
  getClassNameFromChosenClassId() {
    for (const aClass of this.classes) {
      if (aClass.id === this.selectedGroupIdToPost.toString()) {
        return aClass.viewValue;
      }
    }
  }

  getTagNameFromChosenTagId() {
    for (const aClass of this.classes) {
      for (const tag of aClass.tags) {
        if (tag.id === this.selectedTagId.toString()) {
          return tag.tagName;
        }
      }
    }
  }

  getAnonymityScopeNameFromChosenAnonymityScopeId() {
    for (const anonymityScope of this.anonymityScope) {
      if (anonymityScope.id === this.selectedAnonymityScopeId.toString()) {
        return anonymityScope.viewValue;
      }
    }
  }

  getTagsOfAChosenClass() {
    for (const aClass of this.classes) {
      if (aClass.id === this.selectedGroupIdToPost.toString()) {
        return aClass.tags;
      }
    }
  }

  showSnackbarMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
