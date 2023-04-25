# Delete a record in an app

{% code method="DELETE" heading="/Records/{appId}/{recordId}" defaultLanguage="bash" %}

```bash
curl --location --request DELETE 'https://api.onspring.com/v1/Records/195/12' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

var result = httpHelper.DeleteAppRecord(195, 12);
```

{% /code %}
