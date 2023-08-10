import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static ValidateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return { invalidName: true };
        }
        return null;
    }

    static ValidateSpecialCharacters(char: string) {
        return (control: AbstractControl) => {

            const value = control.value as string;
            if (value.includes(char)) {
                return { invalidName: true };
            }
            return null;
        }
    }

    static validateDate(control: FormGroup) {
        const checkinDate = control.get('checkinDate')?.value;
        const checkoutDate = control.get('checkoutDate')?.value;

        if (checkinDate && checkoutDate) {
            const checkin = new Date(checkinDate);
            const checkout = new Date(checkoutDate);

            if (checkin > checkout) {
                control.get('checkoutDate')?.setErrors({ invalidDate: true });
                return { invalidDate: true };
                console.log('invalid date')
            }
        }
        return null;
        console.log('valid date');
    }
}