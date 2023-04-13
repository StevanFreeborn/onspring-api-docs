# Pagination {% #pagination %}

The Onspring API supports pagination for some endpoints for some resources. Pagination is used to limit the number of objects returned in a single response. This is useful for reducing the amount of data transferred over the network and for reducing the amount of data that needs to be processed by the client. If you are attempting to retrieve a large number of objects via one of the following endpoints you will need to use pagination to retrieve all of the them. The following endpoints support pagination:

- [Get Fields by App](#get-fields-by-app)
- [Get Records by App](#get-records-by-app)
- [Get Records by Query](#get-records-by-query)
- [Get Reports by App](#get-reports-by-app)

## Pagination Query Parameters {% #pagination-parameters %}

When making a request to one of the endpoints that support pagination you can use the following parameters to control the pagination behavior:

{% table .propertiesTable %}

- Parameter Name
- Data Type
- Description

---

- PageNumber
- `number`
- The page number to retrieve. The default value is `1`.

---

- PageSize
- `number`
- The number of objects to retrieve per page. The default value is `50`. The maximum value is `1000`.

{% /table %}

## Pagination Response {% #pagination-response %}

When making a request to one of the endpoints that support pagination you will receive a response that contains a `Paged Collection` object that has the following properties which can be used to determine if there are more pages of data available and to retrieve the next page of data:

{% table .propertiesTable %}

- Property Name
- Data Type
- Description

---

- pageNumber
- `number`
- The page number of the current page of data.

---

- pageSize
- `number`
- The number of objects per page.

---

- totalPages
- `number`
- The total number of pages of data available.

---

- totalRecords
- `number`
- The total number of objects available.

---

- items
- `object[]`
- The array of objects for the current page.

{% /table %}
