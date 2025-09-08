import { expect, Page } from "@playwright/test";

export class ModalTablePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForModal() {
    await this.page.waitForSelector(".modal-content");
  }

  async assertModalData(firstName, lastName, email, mobileNumber, subject, address, state, city) {
    await expect(this.page.getByText("Thanks for submitting the form")).toBeVisible();

    // Validações linha a linha da tabela
    await expect(this.page.getByRole("cell", { name: "Student Name" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: `${firstName} ${lastName}`})).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Student Email" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: email })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Gender" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "Male" })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Mobile" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: mobileNumber })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Date of Birth" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "10 October,1990" })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Subjects" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: subject })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Hobbies" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "Sports" })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Picture" })).toBeVisible();
    await expect(
      this.page.getByRole("cell", { name: "imagem.jpg" })
    ).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "Address" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: address })).toBeVisible();

    await expect(this.page.getByRole("cell", { name: "State and City" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: `${state} ${city}` })).toBeVisible();    
  }
}
