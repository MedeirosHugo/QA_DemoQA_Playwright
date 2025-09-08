import { test as baseTest } from "@playwright/test";
import { FormPage } from "../pages/form.page";
import { ModalTablePage } from "../pages/modalTable.page";

export const test = baseTest.extend<{
    formPage:FormPage;
    modalTablePage:ModalTablePage;
}>({
    formPage: async ({page}, use) => {
        await use(new FormPage(page));
    },
    modalTablePage: async ({page}, use) => {
        await use(new ModalTablePage(page));
    }
});

export { expect } from "@playwright/test"