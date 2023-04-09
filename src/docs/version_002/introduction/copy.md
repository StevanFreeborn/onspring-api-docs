# Introduction

The Onspring API is organized around REST. It enables external programs to retrieve, save, and delete data within your Onspring instance. The Onspring API implements version 3 of the Open API Specification (OAS).

The Onspring API does support bulk operation for some, but not all endpoints. Bulk operations are not supported for endpoints that create, update, or delete data. The one exception is the bulk delete endpoint, which is used to delete multiple records at once.

The Onspring API is used to interact with any Onspring instance regardless of whether it is a development, test, or production instance.
