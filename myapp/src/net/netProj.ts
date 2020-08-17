import { doGetRequest, GetRequestData } from "./netDoRequest";
import { addProjUrl, watchProjUrl } from "./netConfig";

export async function addProjApi(queryData: Object) {
  doGetRequest(addProjUrl, queryData);
}

export async function getAllProjApi(queryData: Object) {
  let data = await GetRequestData(watchProjUrl, queryData);
  return data;
}
