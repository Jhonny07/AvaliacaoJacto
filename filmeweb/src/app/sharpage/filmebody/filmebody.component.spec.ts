import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmebodyComponent } from './filmebody.component';

describe('FilmebodyComponent', () => {
  let component: FilmebodyComponent;
  let fixture: ComponentFixture<FilmebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmebodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
