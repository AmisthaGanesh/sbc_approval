import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSearchComponent } from './process-search.component';

describe('ProcessSearchComponent', () => {
  let component: ProcessSearchComponent;
  let fixture: ComponentFixture<ProcessSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
