import { FormGroup } from "@angular/forms";

export function passwordsMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordsMismatch: true };
}
