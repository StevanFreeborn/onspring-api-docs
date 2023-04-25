# Update a record in an app

{% code method="PUT" heading="/Records/{appId}/{recordId}" defaultLanguage="bash" %}

```bash
curl --location --request PUT 'https://api.onspring.com/v1/Records/195/12' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '{
  "FieldData": {
    "6983": "An Updated Test Task",
    "6984": "This is a test task.",
    "6985": "12/25/2021",
    "6986: "4118d53a-9121-4345-8682-07f23d606daa",
    "6987": [4]
  }
}'
```

```csharp
using Onspring.API.SDK.Helpers;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

var fieldValues = new FieldAddEditContainer();
fieldValues.Add(6983, "An Updated Test Task")
fieldValues.Add(6984, "This is a test task.");
fieldValues.Add(6985, "12/25/2021");
fieldValues.Add(6986, "4118d53a-9121-4345-8682-07f23d606daa");
fieldValues.Add(6987, new[] {4})

var result = httpHelper.UpdateAppRecord(195, 12, fieldValues);

foreach (var warning in result.Warnings)
{
  Console.WriteLine($"Warning: {warning}");
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "Warnings": ["A warning"]
}
```

{% /code %}
