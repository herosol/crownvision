export function setPageTitle(data = {}) {
  data.page_title = data.page_title || "Crown Vision Media";
  data.meta_description =
    data.meta_description || "Crown Vision Media Description";

  document.title = data.page_title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.meta_description);
}

export function doObjToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (let [keyv, value] of Object.entries(obj[key])) {
        formData.append(key + "[]", JSON.stringify(value));
      }
    } else {
      if (typeof obj[key] == "object") {
        formData.append(key, JSON.stringify(obj[key]));
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
}

export function doFirstUpperRestLower(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}
