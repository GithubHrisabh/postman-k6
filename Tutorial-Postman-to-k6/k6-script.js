// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  collection: {
    baseURL: "https://simple-books-api.glitch.me",
    accessToken: "----",
    accessT: "---"
  }
});

export default function() {
  postman[Request]({
    name: "Land",
    id: "ecef1958-b514-4e0c-8bd2-5e82835d77db",
    method: "GET",
    address: "https://simple-books-api.glitch.me/"
  });

  postman[Request]({
    name: "status",
    id: "63c6ba51-ac1e-463b-a7ed-8c0407ffecce",
    method: "GET",
    address: "{{baseURL}}/status"
  });

  postman[Request]({
    name: "books",
    id: "8f308282-b9c2-4a56-a6b5-4f5896c24f6f",
    method: "GET",
    address: "{{baseURL}}/books",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "query param",
    id: "797b514e-8d51-43c6-ac7c-267b6e5cfd01",
    method: "GET",
    address: "{{baseURL}}/books?type=non-fiction"
  });

  postman[Request]({
    name: "multiple param",
    id: "f7f9ffb9-8692-4c83-b72f-b116a7e687c3",
    method: "GET",
    address: "{{baseURL}}/books?type=fiction&limit=2"
  });

  postman[Request]({
    name: "wrong param",
    id: "8c07762d-7f37-435e-aaba-b9081085fe77",
    method: "GET",
    address: "{{baseURL}}/books?type=fiction&limit=25"
  });

  postman[Request]({
    name: "id",
    id: "adca711c-7ca8-4070-b096-c004bf0b8294",
    method: "GET",
    address: "{{baseURL}}/books/2"
  });

  postman[Request]({
    name: "Api Client Register",
    id: "fb21922c-0b40-4d24-a5ec-ea88bd697935",
    method: "POST",
    address: "{{baseURL}}/api-clients/",
    data:
      '{\r\n   "clientName": "Hrisabh Jha ",\r\n   "clientEmail": "hrisabhjha@example.com"\r\n}'
  });

  postman[Request]({
    name: "order ",
    id: "6cce47c0-32c6-4fbe-961a-461fa5abbbe4",
    method: "POST",
    address: "{{baseURL}}/orders",
    data: '{\r\n  "bookId": 3,\r\n  "customerName": "HRISABH"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: "ordered but out of stock",
    id: "93dab979-6203-4f57-9470-d1cf5db39508",
    method: "POST",
    address: "{{baseURL}}/orders",
    data: '{\r\n  "bookId": 3,\r\n  "customerName": "John"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: "All orders",
    id: "0804f83c-9b5a-407d-9aa5-886da0343776",
    method: "GET",
    address: "{{baseURL}}/orders",
    data: '{\r\n  "bookId": 5,\r\n  "customerName": "{{$randomFullName}}"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: "Get given order",
    id: "36369492-8e7b-478c-b378-0958b4e7a23d",
    method: "GET",
    address: "{{baseURL}}/orders/rVRgBcE3hULIMQ8MRZnzP",
    data: '{\r\n  "bookId": 5,\r\n  "customerName": "{{$randomFullName}}"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: "Get given order with wrong orderid",
    id: "1a3dedc5-d50a-4d6c-aa80-36cad3a82bbe",
    method: "GET",
    address: "{{baseURL}}/orders/rVRgBcE3hULIMQ8MRZnzP",
    data: '{\r\n  "bookId": 5,\r\n  "customerName": "{{$randomFullName}}"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: "Update given order",
    id: "43377da9-7bfe-44f5-aba3-6b064f0c16cb",
    method: "PATCH",
    address: "{{baseURL}}/orders/rVRgBcE3hULIMQ8MRZnzP",
    data: '{\r\n  "customerName": "updated-HRISABH"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: " delete ",
    id: "7c9f8829-b799-4026-83d5-9c3039323edf",
    method: "DELETE",
    address: "{{baseURL}}/orders/h_p6hPMmOURFMIxMFtSUt",
    data: '{\r\n  "bookId": 5,\r\n  "customerName": "{{$randomFullName}}"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });

  postman[Request]({
    name: "Given order to delete later",
    id: "21c99416-4a65-452d-bd33-6f28c144ce48",
    method: "GET",
    address: "{{baseURL}}/orders/h_p6hPMmOURFMIxMFtSUt",
    data: '{\r\n  "bookId": 5,\r\n  "customerName": "{{$randomFullName}}"\r\n}',
    auth(config, Var) {
      config.headers.Authorization = `Bearer ${pm[Var]("accessToken")}`;
    }
  });
}
