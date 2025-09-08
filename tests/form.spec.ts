import { test, expect } from '../utils/setup.ts';

const firstName = 'João'
const lastName = 'da Silva'
const email = 'joao@email.com'
const mobileNumber = '9999999999'
const subjects = 'Maths'
const image = './images/imagem.jpg'
const address = 'Rua dos Testes, 123'
const state = 'NCR'
const city = 'Delhi'


test('Fill DEMOQA Form', async ({formPage, modalTablePage}) => {
  await formPage.goToFormPage();
  await formPage.fillName(firstName, lastName);
  await formPage.fillEmail(email);
  await formPage.selectMaleGender();
  await formPage.fillMobileNumber(mobileNumber);
  await formPage.fillDateOfBirth();
  await formPage.fillSubjects(subjects);
  await formPage.selectSportsHobbies();
  await formPage.uploadImageFile(image);
  await formPage.fillCurrentAddress(address);
  await formPage.fillStateAndCity(state, city);
  await formPage.submitForm();
  await modalTablePage.waitForModal();
  await modalTablePage.assertModalData(firstName, lastName, email, mobileNumber, subjects, address, state, city);
})
