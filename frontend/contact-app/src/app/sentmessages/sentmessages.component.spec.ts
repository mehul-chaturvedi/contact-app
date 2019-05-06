import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentmessagesComponent } from './sentmessages.component';

describe('SentmessagesComponent', () => {
  let component: SentmessagesComponent;
  let fixture: ComponentFixture<SentmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
