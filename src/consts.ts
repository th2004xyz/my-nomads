// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Zephyr';
export const SITE_DESCRIPTION =
	'Curated data products for AI builders — crypto datasets, data APIs, and domain-specific AI tools.';
export const SITE_URL = 'https://zephyrdn.com';

/**
 * Paddle Hosted Checkout links for Zephyr Translate (website purchase buttons).
 *
 * These are placeholder values — replace them once a real Hosted Checkout is
 * created in the Paddle Dashboard (Paddle > Checkout > Hosted Checkouts).
 * A real link looks like:
 *   https://pay.paddle.com/checkout/hsc_xxxxxxxx?price_id=pri_yyyy
 *
 * IMPORTANT: the price_id query parameter must be percent-encoded per Paddle docs.
 * When any link is still an empty string, the corresponding buy button renders
 * as a "Launching soon" state instead of a dead link.
 *
 * Mirrors the keys used in the Zephyr Translate desktop app:
 *   E:\zephyr-translate\src\core\pricing.ts  (PADDLE_CHECKOUT_URLS)
 */
export const PADDLE_CHECKOUT_URLS = {
	monthly: '',
	yearly: '',
	lifetime: '',
} as const;

export type PaddleCheckoutKey = keyof typeof PADDLE_CHECKOUT_URLS;