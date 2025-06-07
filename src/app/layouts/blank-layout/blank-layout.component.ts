import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastComponent } from "../../components/toast/toast.component";

@Component({
  selector: 'app-blank-layout',
  imports: [RouterModule, ToastComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css'
})
export class BlankLayoutComponent {

}
