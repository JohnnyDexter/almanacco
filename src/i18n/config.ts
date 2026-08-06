export const languages = {
  ja: '日本語',
  en: 'English',
  it: 'Italiano',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'ja';
export const locales = Object.keys(languages) as Locale[];

export const localePrefix: Record<Locale, string> = {
  ja: '',
  en: 'en',
  it: 'it',
};

export function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export function localizedPath(locale: Locale, slug = '') {
  const prefix = localePrefix[locale];
  const normalizedSlug = slug.replace(/^\//, '').replace(/\/$/, '');
  const parts = [prefix, normalizedSlug].filter(Boolean).join('/');
  return withBase(parts ? `${parts}/` : '');
}

export function alternateLinks(slug = '') {
  return locales.map((locale) => ({ locale, href: localizedPath(locale, slug) }));
}
