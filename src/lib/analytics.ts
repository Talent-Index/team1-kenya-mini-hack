// Lightweight analytics event tracker
// Replace with your actual analytics provider

type EventName =
  | "cta_click"
  | "form_start"
  | "form_submit"
  | "page_view"
  | "project_click"
  | "filter_change"
  | "rsvp_click"
  | "calendar_add";

interface EventData {
  [key: string]: string | number | boolean;
}

export function trackEvent(event: EventName, data?: EventData) {
  // Log in dev, ready for production analytics
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${event}`, data);
  }
  // Future: send to Mixpanel, PostHog, etc.
}
