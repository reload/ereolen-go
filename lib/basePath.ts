const basePath = process.env.NODE_ENV === "production" ? "/ereolen-go" : "";

export const addBasePath = (path: string) => {
  return `${basePath}${path}`;
};
