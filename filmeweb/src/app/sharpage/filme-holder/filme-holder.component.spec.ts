import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmeHolderComponent } from './filme-holder.component';

describe('FilmeHolderComponent', () => {
  let component: FilmeHolderComponent;
  let fixture: ComponentFixture<FilmeHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeHolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
