# Introduction {% #introduction %}

The Onspring API is organized around REST. It enables external programs to retrieve, save, and delete data within your Onspring instance. The Onspring API implements version 3 of the Open API Specification (OAS).

The Onspring API does support bulk operation for some, but not all endpoints. Bulk operations are not supported for endpoints that create, update, or delete resources. The one exception is the batch delete endpoint for records, which is used to delete multiple records at once.

You can specify the version of the API that you want to use by including the version number in the `x-api-version` header. If you do not specify a version number the API will attempt to route the request to the proper version based upon the request path.
