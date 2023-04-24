# Retrieving a record from an app

{% code method="GET" heading="/Records/{appId}/{recordId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Records/195/1?fieldIds=6976&dataFormat=Raw' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;
using Onspring.API.SDK.Enums;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

var appId = 195;
var recordId = 1;
var fieldIds = new[] {6976};
var record = httpHelper.GetAppRecord(appId, recordId, fieldIds, DataFormat.Raw);

foreach (var wrapper in record.Values.WithFieldId())
{
  Console.WriteLine($"FieldId: {wrapper.FieldId}, Type: {wrapper.Value.Type}, Value: {GetResultValueString(wrapper.Value)}");
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "AppId": 195,
  "RecordId": 1,
  "FieldData": [
    {
      "Type": 1,
      "FieldId": 6976,
      "Value": 1
    }
  ]
}
```

{% /code %}
