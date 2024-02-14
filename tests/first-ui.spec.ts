import { AppManager } from '../pages';
import { test, expect } from '@playwright/test';
import { user, article } from '../test-data';

test.beforeEach(async ({ page }) => {
	const app = new AppManager(page);
	await app.loginPage.open();
	await app.loginPage.expectLoaded();
	await app.loginPage.login(user.email, user.password);
	// await page.goto('/login');

	// const title = page.locator('.navbar-brand', {hasText: 'conduit'});
	// const signInTitle = page.locator('h1', {hasText: 'Sign in'});

	// await expect(title).toBeVisible();
	// await expect(signInTitle).toBeVisible();

	// const emailInput = page.getByPlaceholder('Email')
	// const passwordInput = page.getByPlaceholder('Password');
	// const signInButton = page.getByRole('button', {name: 'Sign in'});
	// await emailInput.fill(user.email);
	// await passwordInput.fill(user.password);
	// await signInButton.click();
});

test('open login page and login', async ({ page }) => {
   
    await page.waitForURL('/');



	const userName = page.locator('a', { hasText: user.username });

	await expect(userName).toBeVisible();
});

test.only('create new article', async ({ page }) => {
	const newArticleButton = page.locator('a', { hasText: 'New Article' });

	await newArticleButton.click();

	await expect(newArticleButton).toHaveAttribute(
		'routerlinkactive',
		'active'
	);

	const articleTitleInput = page.getByPlaceholder('Article Title');
	const articleDescriptionInput = page.getByPlaceholder(
		"What's this article about?"
	);
	const articleBodyInput = page.getByPlaceholder(
		'Write your article (in markdown)'
	);
	const articleTagsInput = page.getByPlaceholder('Enter tags');
	const publishArticleButton = page.getByRole('button', {
		name: 'Publish Article',
	});

	await articleTitleInput.fill(article.title);
	await articleDescriptionInput.fill(article.description);
	await articleBodyInput.fill(article.body);
	await articleTagsInput.fill(article.tags.join(','));
	await publishArticleButton.click();

	const createdArticleTitle = page.locator('h1', { hasText: article.title });
	const homePageButton = page.locator('a', { hasText: 'Home' });

	await expect(createdArticleTitle).toBeVisible();
	await homePageButton.click();

	const articlesList = page.locator('.article-preview');
	const articlePreviewTitle = articlesList.locator('h1', {
		hasText: article.title,
	});

	await expect(articlePreviewTitle).toBeVisible();
});
