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

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
[
  {
    "Id": 6989,
    "AppId": 195,
    "Name": "Attachments",
    "Type": 800,
    "Status": 0,
    "IsRequired": false,
    "IsUnique": false
  },
  {
    "Multiplicity": 0,
    "Id": 6980,
    "AppId": 195,
    "Name": "Created By",
    "Type": 500,
    "Status": 0,
    "IsRequired": false,
    "IsUnique": false
  }
]
```

{% /code %}
