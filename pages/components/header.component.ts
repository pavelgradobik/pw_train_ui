import { test, expect } from '@playwright/test';
import { BaseComponent } from '../base/baseClass';
import { article } from '../../test-data';

export class Header extends BaseComponent{
    
    private title = this.page.locator('.navbar-brand', {hasText: 'conduit'});
    private createdArticleTitle = this.page.locator('h1', {hasText: article.title});
    private homePageButton = this.page.locator('a', {hasText: 'Home'});


    async expectLoaded(): Promise<void> {
        await expect(this.title).toBeVisible();
        await expect(this.createdArticleTitle).toBeVisible();
        await expect(this.homePageButton).toBeVisible();
    }
}