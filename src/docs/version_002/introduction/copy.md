# Introduction {% .articleTitle %}

The Onspring API is organized around REST. It enables external programs to retrieve, save, and delete data within your Onspring instance. The Onspring API implements version 3 of the Open API Specification (OAS).

The Onspring API does support bulk operation for some, but not all endpoints. Bulk operations are not supported for endpoints that create, update, or delete resources. The one exception is the batch delete endpoint for records, which is used to delete multiple records at once.
