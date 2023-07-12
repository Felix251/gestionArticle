const { protocol, host } = window.location;

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8081/api/v1"
    : (`${protocol}//${host}` as string);
