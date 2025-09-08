import { Page, Locator } from "@playwright/test"

export class FormPage {
    
    readonly page:Page;
    readonly fieldFirstName: Locator;
    readonly fieldLastName: Locator;
    readonly fieldEmail: Locator;
    readonly genderOptionMale: Locator;
    readonly fieldMobile: Locator;
    readonly fieldDateOfBirth: Locator;
    readonly fieldSubjects: Locator;
    readonly hobbiesOptionSports: Locator;
    readonly inputSelectPicture: Locator;
    readonly fieldCurrentAddress: Locator;
    readonly fieldState: Locator;
    readonly fieldCity: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.fieldFirstName = page.getByPlaceholder("First Name");
        this.fieldLastName = page.getByPlaceholder("Last Name");
        this.fieldEmail = page.getByPlaceholder("name@example.com");
        this.genderOptionMale = page.locator("//label[@for='gender-radio-1']");
        this.fieldMobile = page.getByPlaceholder("Mobile Number");
        this.fieldDateOfBirth = page.locator("#dateOfBirthInput");
        this.fieldSubjects = page.locator("#subjectsInput");
        this.hobbiesOptionSports = page.locator("//label[@for='hobbies-checkbox-1']");
        this.fieldCurrentAddress = page.getByPlaceholder("Current Address");
        this.fieldState = page.locator('#react-select-3-input');
        this.fieldCity = page.locator('#react-select-4-input')
    }

    async goToFormPage(){
        // domcontentloaded is needed beacause page load time is too long.
        await this.page.goto('https://demoqa.com/automation-practice-form', {waitUntil: 'domcontentloaded'})
    }

    async fillName(firstName, lastName){
        await this.fieldFirstName.fill(firstName);
        await this.fieldLastName.fill(lastName);
    }

    async fillEmail(email) {
        await this.fieldEmail.fill(email);
    }

    async selectMaleGender(){
        await this.genderOptionMale.click();
    }

    async fillMobileNumber(mobileNumber){
        await this.fieldMobile.fill(mobileNumber);
    }

    async fillDateOfBirth(){
        await this.fieldDateOfBirth.click();
        await this.page.selectOption('.react-datepicker__year-select', {label: '1990'})
        await this.page.selectOption('.react-datepicker__month-select', {label: 'October'})
        await this.page.locator('//div[@aria-label="Choose Wednesday, October 10th, 1990"]').click();
    }

    async fillSubjects(subject){
        await this.fieldSubjects.fill(subject);
        await this.page.click(`.subjects-auto-complete__option:has-text("${subject}")`);
    }

    async selectSportsHobbies(){
        await this.hobbiesOptionSports.click();
    }

    async uploadImageFile(file){
        await this.page.setInputFiles('#uploadPicture', file);
    }

    async fillCurrentAddress(currentAddress){
        await this.fieldCurrentAddress.fill(currentAddress);
    }

    async fillStateAndCity(state, city){
        await this.fieldState.fill(state);
        await this.page.locator('#react-select-3-option-0').click();

        await this.fieldCity.fill(city)
        await this.page.locator('#react-select-4-option-0').click();
    }

    async submitForm(){
        await this.page.locator('#submit').click();
    }
}