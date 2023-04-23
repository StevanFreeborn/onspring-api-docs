# Checking for connection to the api

{% code method="GET" heading="/Ping" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Ping' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

if (httpHelper.CanConnect())
{
  Console.WriteLine("Connected to Onspring API");
}
```

{% /code %}
