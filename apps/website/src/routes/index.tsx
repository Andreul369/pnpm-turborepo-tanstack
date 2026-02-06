import { createFileRoute } from "@tanstack/react-router";
import { getLocale, locales, setLocale } from "@monorepo/i18n/runtime";
import { t } from "@monorepo/i18n/utils";
import { Button } from "@monorepo/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@monorepo/ui/card";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  console.log("heellooooaslaksalsk");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("common.welcome")}</CardTitle>
      </CardHeader>
      <CardContent>
        {locales.map((locale) => (
          <Button
            key={locale}
            onClick={() => setLocale(locale)}
            data-active-locale={locale === getLocale()}
            className="data-[active-locale=true]:bg-gray-500 data-[active-locale=true]:text-white"
          >
            {locale}
          </Button>
        ))}
      </CardContent>
      <CardFooter>
        <Button>Click me</Button>
      </CardFooter>
    </Card>
  );
}
