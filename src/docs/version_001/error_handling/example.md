# Error Code Summary

{% code heading="ERROR CODES" defaultLanguage="text" %}

```text
400 Bad Request - The request was unacceptable, often due to missing a required parameter.
401 Unauthorized - No valid API key provided.
403 Forbidden - The API key doesn't have permissions to perform the request.
404 Not Found - The requested resource doesn't exist.
499 Client Closed Request - Our API gateway closed the connection because the request exceeded the 90 second timeout limit.
5xx Server Errors - Something went wrong on Onspring's end.
```

{% /code %}

# The Error Object

{% code heading="ERROR OBJECT" defaultLanguage="json" %}

```json
{
  "Message": "Client does not have access to read app: 1"
}
```

{% /code %}
