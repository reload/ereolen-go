// Single source of truth for the base path.

// TODO: once a custom domain is set up (with a public/CNAME file), the site
// will be served from the root in production too — change this to:
// const basePath = "";
export const basePath = "";

export const addBasePath = (path: string) => {
  return `${basePath}${path}`;
};
