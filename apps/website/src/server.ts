import handler from "@tanstack/react-start/server-entry";
import { paraglideMiddleware } from "@monorepo/i18n/server";

export default {
  fetch(req: Request): Promise<Response> {
    // TanStack Router handles URL rewriting via deLocalizeUrl/localizeUrl in router.tsx
    // so we pass the original `req` instead of the modified `request`
    return paraglideMiddleware(req, () => handler.fetch(req));
  },
};
