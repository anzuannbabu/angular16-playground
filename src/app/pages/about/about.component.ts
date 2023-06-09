import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ChildComponentData } from 'src/app/components/about-child/about-child.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  name = 'About from parent';
  messageFromChild = '';

  form!: FormGroup;
  age: number = 0;
  name$: Observable<string | null> = of(null);

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.age = this._userService.age;
    this.name$ = this._userService.name$;
    // console.log(this._userService.getName());
    this._userService.getName().subscribe((name) => {
      console.log('the name => ', name);
    });

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  receieveMessageFromChild($event: ChildComponentData) {
    console.log('data', $event);
    this.messageFromChild = $event.message;
  }

  onSubmitForm() {
    console.log('values => ', this.form.value, this.form.validator);
    this._userService.setName(this.form.value.name);
    this._userService.age = this.form.value.email;
    console.log('new age value => ', this._userService.age);
  }
}
