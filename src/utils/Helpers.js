export function setPageTitle(data = {}) {
  data.page_title = data.page_title || "Default title";
  data.meta_description = data.meta_description || "Default description";

  document.title = data.page_title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.meta_description);
}
