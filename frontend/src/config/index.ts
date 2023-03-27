// const { protocol, host } = window.location;

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://json-server-vadx.vercel.app/";
// : (`${protocol}//${host}` as string);
