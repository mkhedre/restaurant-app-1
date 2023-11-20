import endpoint from "shared/endpoint";

/**
 * Get Contactuses list
 */
export function getContactusesList(params: any = {}) {
  return endpoint.get("/contactus", {
    params,
  });
}

/**
 * Get contactus details
 */
export function getContactus(id: string | number) {
  return endpoint.get("/contactus/" + id);
}
export function sumbitMessage(data) {
  return endpoint.post("/contact-us/" + data);
}
