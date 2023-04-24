# Retrieve apps accessible to the API key

{% code method="GET" heading="/Apps" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Apps' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

foreach (var app in httpHelper.GetApps())
{
  Console.WriteLine($"{app.Id}, {app.Name}");
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
[
  {
    "Id": 195,
    "Name": "Tasks"
  }
]
```

{% /code %}
