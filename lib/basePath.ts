const basePath = process.env.NODE_ENV === "production" ? "/ereolen" : "";

export const addBasePath = (path: string) => {
  return `${basePath}${path}`;
};
