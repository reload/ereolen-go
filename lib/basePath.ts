const basePath = process.env.NODE_ENV === "production" ? "" : "";

export const addBasePath = (path: string) => {
  return `${basePath}${path}`;
};
