# Error Handling {% #error-handling %}

The Onspring API uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the `4xx` range indicate an error that failed given the information provided. Codes in the `5xx` range indicate an error within Onspring's servers.

The internet is a big place and requests sent across the network should be treated as if they may fail at any time. We recommend that you implement a retry strategy for requests that fail. This will help to ensure that your application is able to recover from any network issues that may occur.

Some 4xx errors will also include an `Error` object in the response body. This object can contain a message with additional information about the error.

**Note:** The exception to the above is if you receive a `499` status code this indicates that the request has exceeded the 90 second timeout limit of our api gateway. This is not an error with the request itself, but rather a timeout. This is a result of the request taking too long to process. Typically this is due to a large amount of data being requested or a request triggering a lot of processing. If you receive this error, you should consider breaking up your request into smaller requests.

## Error Properties

{% table %}

- Property Name
- Data Type
- Description

---

- message
- `string`
- A human-readable message describing the error.

{% table %}

**Note:** The `message` property is not guaranteed to be present in the response body. The response body may be empty or contain other properties.
