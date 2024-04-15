import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootendComponent } from './footer.component';

describe('FootendComponent', () => {
  let component: FootendComponent;
  let fixture: ComponentFixture<FootendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
