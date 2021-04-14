function getApiData(url, callback) {
  fetch(url)
    .then((r) => r.json())
    .then(callback);
}

export function getApiListData(callback) {
  getApiData("https://dog.ceo/api/breeds/list/all", callback);
}

export function getApiImagesData(localStorageBreed, callback) {
  getApiData(
    `https://dog.ceo/api/breed/${localStorageBreed}/images`,
    callback
  );
}

export function getApiImageData(thisId, callback) {
  getApiData(
    `https://dog.ceo/api/breed/${thisId}/images`,
    callback
  );
}
