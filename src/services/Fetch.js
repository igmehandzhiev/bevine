class Fetch {
  static redirect(url, settings) {
    return new Promise((resolve, reject) => {
      fetch(
        url,
        Object.assign(
          {
            credentials: "same-origin"
          },
          settings
        )
      )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export { Fetch };
