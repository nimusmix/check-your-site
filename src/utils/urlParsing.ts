const urlParsing = (url: string) => {
  let parsed_url = [];

  if (url.startsWith("http")) {
    parsed_url = url.split("://");
    parsed_url[0] += "://";
  } else {
    parsed_url = ["", url];
  }

  if (url.endsWith("/")) {
    parsed_url[1] = parsed_url[1].slice(0, -1);
  }

  return parsed_url;
};

export default urlParsing;