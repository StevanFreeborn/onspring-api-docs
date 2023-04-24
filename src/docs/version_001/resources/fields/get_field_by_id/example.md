# Retrieve a field by its id

{% code method="GET" heading="/Fields/{fieldId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Fields/6986' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetFieldAsync(6986);
var field = response.Value;

Console.WriteLine($"{field.Id}");
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "Multiplicity": 0,
  "Values": [
    {
      "Id": "4118d53a-9121-4345-8682-07f23d606daa",
      "Name": "In Progress",
      "SortOrder": 1,
      "NumericValue": 1.0,
      "Color": "#db3e3e"
    },
    {
      "Id": "1c1c5f7e-cd03-4b70-9790-0f83b24b5863",
      "Name": "Complete",
      "SortOrder": 2,
      "NumericValue": 2.0,
      "Color": "#ffffff"
    },
    {
      "Id": "42493542-f77c-4298-91a0-18455ba0c764",
      "Name": "Not Started",
      "SortOrder": 3,
      "NumericValue": 0.0,
      "Color": "#ffffff"
    }
  ],
  "Id": 6986,
  "AppId": 195,
  "Name": "Status",
  "Type": 400,
  "Status": 0,
  "IsRequired": false,
  "IsUnique": false
}
```

{% /code %}
