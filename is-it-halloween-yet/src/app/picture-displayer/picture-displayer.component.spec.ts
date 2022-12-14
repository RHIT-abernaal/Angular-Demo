import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDisplayerComponent } from './picture-displayer.component';

describe('PictureDisplayerComponent', () => {
  let component: PictureDisplayerComponent;
  let fixture: ComponentFixture<PictureDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
