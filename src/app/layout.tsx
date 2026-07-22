import "./globals.css";
import "../styles/tokens.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("metadata");
  return { title: t("title"), description: t("description"), icons: { icon: "/favicon.ico", apple: "/apple-icon.png" } };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return <html lang={locale}><head><link rel="icon" href="./favicon.webp" sizes="any" /></head><body><NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></body></html>;
}
