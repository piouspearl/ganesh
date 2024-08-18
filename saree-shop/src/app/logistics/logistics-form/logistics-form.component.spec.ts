import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsFormComponent } from './logistics-form.component';

describe('LogisticsFormComponent', () => {
  let component: LogisticsFormComponent;
  let fixture: ComponentFixture<LogisticsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
