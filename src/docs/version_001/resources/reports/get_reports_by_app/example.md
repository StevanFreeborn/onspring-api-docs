# Retrieving reports for the given app

{% code method="GET" heading="/Reports" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Reports?appId=195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

foreach (var report in httpHelper.GetAppReports(5))
{
  Console.WriteLine($"{report.Id}, {report.AppId}, {report.Name}");
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
[
  {
    "AppId": 195,
    "Id": 613,
    "Name": "Test 1"
  }
]
```

{% /code %}
