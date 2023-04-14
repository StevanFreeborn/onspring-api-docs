# Error Handling

The Onspring API uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided. Codes in the 5xx range indicate an error within Onspring's servers.

Some 4xx errors will also include an error object in the response body. This object can contain additional information about the error.
