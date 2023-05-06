import { expect, test } from '@playwright/test'

test('empty test', async ({ page }) => {
	expect(1 + 2).toBe(3)
})
