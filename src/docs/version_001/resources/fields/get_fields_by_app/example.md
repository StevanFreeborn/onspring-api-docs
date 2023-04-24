# Retrieve all fields for an app

{% code method="GET" heading="/Fields" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Fields?appId=195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

foreach (var field in httpHelper.GetAppFields(195))
{
  Console.WriteLine($"{field.Id}, {field.Name}");
}
```
