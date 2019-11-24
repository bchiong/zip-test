import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaPanelComponent } from './cta-panel.component';

describe('CtaPanelComponent', () => {
  let component: CtaPanelComponent;
  let fixture: ComponentFixture<CtaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
