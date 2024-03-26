import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GattoAngularComponent } from './gatto-angular.component';

describe('GattoAngularComponent', () => {
  let component: GattoAngularComponent;
  let fixture: ComponentFixture<GattoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GattoAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GattoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
