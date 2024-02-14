import { expect } from "@playwright/test";
import { BasePage } from "./base/baseClass"
import { Header } from "./components/header.component";

export class LoginPage extends BasePage {
    public pageUrl = '/login';

    public header = new Header(this.page);

    private emailInput = this.page.getByPlaceholder('Email')
    private passwordInput = this.page.getByPlaceholder('Password');
    private signInButton = this.page.getByRole('button', {name: 'Sign in'});

    async expectLoaded(): Promise<void> {
        expect(await this.emailInput.isVisible());
        expect(await this.passwordInput.isVisible());
        expect(await this.signInButton.isVisible());
        expect(await this.page.waitForURL(this.pageUrl));
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }


}