import {isStrongPassword} from "../../../katas/TDD/password-validator/passwordValidator";

describe('The password validator', () => {


        it('considers a strong password when has all the requirements', () => {
            expect(isStrongPassword('1234abcdABCD_')).toBe(true);
        })
        it('fails when the password is too short', () => {
            expect(isStrongPassword('1aA_')).toBe(false);
        });
        it('fails when the password is missing a number', () => {
            expect(isStrongPassword('abcdABCD_')).toBe(false);
        });
        it('fails when the password is missing a lowercase', () => {
            expect(isStrongPassword('1234ABCD_')).toBe(false);
        });
        it('fails when the password is missing an uppercase', () => {
            expect(isStrongPassword('1234abcd_')).toBe(false);
        });
        it('fails when the password is missing an underscore', () => {
            expect(isStrongPassword('1234abcdABCD')).toBe(false);
        });
    }
)