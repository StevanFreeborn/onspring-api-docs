# Add a record in an app

{% code method="POST" heading="/Records/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Records/195' \
--header 'Content-Type: application/json' \
--data '{
  "FieldData": {
    "6983": "A New Test Task",
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
fieldValues.Add(6983, "A New Test Task")
fieldValues.Add(6984, "This is a test task.");
fieldValues.Add(6985, "12/25/2021");
fieldValues.Add(6986, "4118d53a-9121-4345-8682-07f23d606daa");
fieldValues.Add(6987, new[] {4})

var result = httpHelper.CreateAppRecord(195, fieldValues);

Console.WriteLine($"New Record Id is: {result.CreatedId}");

foreach (string warning in result.Warnings)
{
  Console.WriteLine($"Warning: {warning}");
}

```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "recordId": 781,
  "Warnings": ["A warning"]
}
```

{% /code %}
