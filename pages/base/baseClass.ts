import { Page } from '@playwright/test';

export abstract class PageHolder {
	constructor(protected page: Page) {}
}

export abstract class BaseComponent extends PageHolder {
    abstract expectLoaded(message?: string): Promise<void>;
    
	async isLoaded(): Promise<boolean> {
        try {
            await this.expectLoaded();
			return true;
		} catch {
            return false;
		}
	}
}

export abstract class BasePage extends BaseComponent {
    public abstract pageUrl: string;
    async open(path?: string) {
        await this.page.goto(path ?? this.pageUrl);
        await this.expectLoaded();
    }
}