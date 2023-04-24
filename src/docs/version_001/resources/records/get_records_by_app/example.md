# Retrieving records for an app

{% code method="GET" heading="/Records/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/v1/Records/195?%24filter=not%20(6987%20lt%2010%20or%206986%20eq%20%27In%20Progress%27)%20and%206985%20gt%20datetime%272014-03-01T00%3A00%3A00.0000000%27&recordIds=5%2C100%2C101%2C102&fieldIds=6983%2C6986%2C6987%2C6985%2C6984&dataFormat=Formatted' \
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
var filter = "not (6987 lt 10 or 6986 eq 'In Progress') and 6985 gt datetime'2014-03-01T00:00:00.0000000'";
var recordIds = new[] {5, 100, 101, 102};
var fieldIds = new[] {6983, 6986, 6987, 6985, 6984};

var records = httpHelper.GetAppRecords(appId, filter, recordIds, fieldIds, DataFormat.Formatted);

foreach (var record in records)
{
  Console.WriteLine($"AppId: {record.AppId}, RecordId: {record.RecordId}");

  foreach (var wrapper in record.Values.WithFieldId())
  {
    Console.WriteLine($"FieldId: {wrapper.FieldId}, Type: {wrapper.Value.Type}");
  }
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
[
  {
    "AppId": 195,
    "RecordId": 5,
    "FieldData": [
      {
        "Type": 0,
        "FieldId": 6983,
        "Value": "Test Task 5"
      },
      {
        "Type": 0,
        "FieldId": 6986,
        "Value": "Complete"
      },
      {
        "Type": "Integer",
        "FieldId": 6987,
        "Value": 2
      },
      {
        "Type": 0,
        "FieldId": 6985,
        "Value": "12/31/2021 6:00 AM"
      },
      {
        "Type": 0,
        "FieldId": 6984,
        "Value": "This is a test!"
      }
    ]
  }
]
```

{% /code %}
