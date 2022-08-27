import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerItemComponent } from './layer-item.component';

describe('LayerItemComponent', () => {
  let component: LayerItemComponent;
  let fixture: ComponentFixture<LayerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
