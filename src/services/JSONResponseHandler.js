export async function getJSON(api, setter, logString) {
  fetch(api)
    .then((r) => console.log(r.json()))
    .then((data) => {
      setter(data);
      console.log(logString + data);
    });
}

export async function postJSON(api, data) {
  try {
    var result;
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => {
      result = r.json();
      console.log("success: ", result);
    });
  } catch (e) {
    console.error("Error: ", e);
  }
}
