import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SliderComponent } from "./slider/slider.component";
import { SlideComponent } from "./slide/slide.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SliderComponent, SlideComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
