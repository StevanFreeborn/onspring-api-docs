# Querying for records in an app

{% code method="POST" heading="/Records/Query" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/Query' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '{
    "appId": 195,
    "filter": "6983 eq '\''Test Task 5'\''",
    "fieldIds": [6983,6986,6987,6985,6984],
    "dataFormat": "Formatted"
}'
```

```csharp
using Onspring.API.SDK;
using Onspring.API.SDK.Models;
using Onspring.API.SDK.Enums;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var queryRequest = new QueryRecordsRequest
{
  AppId = 195,
  Filter = "not (6987 lt 10 or 6986 eq 'In Progress') and 6985 gt datetime'2014-03-01T00:00:00.0000000'",
  FieldIds = new List<int>{ 6983, 6986, 6987, 6985, 6984 },
  DataFormat = DataFormat.Formatted,
};

var queryResponse = await onspringClient.QueryRecordsAsync(queryRequest);
var records = queryResponse.Value.Items;

foreach (ResultRecord record in records)
{
  Console.WriteLine($"AppId: {record.AppId}, RecordId: {record.RecordId}");

  foreach (RecordFieldValue fieldValue in record.FieldData)
  {
      Console.WriteLine($"FieldId: {fieldValue.FieldId}, Type: {fieldValue.Type}");
  }
}
```

```javascript
import {
  DataFormat,
  FilterOperators,
  OnspringClient,
  QueryFilter,
  QueryRecordsRequest,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const filter = new QueryFilter(
  6987,
  FilterOperators.GreaterThan,
  0
);

const request = new QueryRecordsRequest(
  195,
  filter,
  [6983, 6986, 6987, 6985, 6984],
  DataFormat.Formatted
);

const res = await client.queryRecords(request);
const records = res.data.items;

for (const record of records) {
  console.log(record);
}
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import QueryRecordsRequest
from OnspringApiSdk.Enums import DataFormat
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)

fieldId = 6983
operator = 'eq'
value = '\'Test Task 5\''

request = QueryRecordsRequest(
  appId=195,
  filter=f'{fieldId} {operator} {value}',
  fieldIds=[6983, 6986, 6987, 6985, 6984],
  dataFormat=DataFormat.Formatted.name,
)

response = client.QueryRecords(request)

print(f'Status Code: {response.statusCode}')
print(f'Page Size: {response.data.pageSize}')
print(f'Page Number: {response.data.pageNumber}')
print(f'Total Pages: {response.data.totalPages}')
print(f'Total Records: {response.data.totalRecords}')

for record in response.data.records:
  print(f'AppId: {record.appId}')
  print(f'RecordId: {record.recordId}')

  for field in record.fields:
    print(f'Type: {field.type}')
    print(f'FieldId: {field.fieldId}')
    print(f'Value: {field.GetResultValueString()}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "pageNumber": 1,
  "pageSize": 1,
  "totalPages": 1,
  "totalRecords": 1,
  "items": [
    {
      "appId": 195,
      "recordId": 5,
      "fieldData": [
        {
          "type": "String",
          "fieldId": 6983,
          "value": "Test Task 5"
        },
        {
          "type": "String",
          "fieldId": 6986,
          "value": "Complete"
        },
        {
          "type": "Integer",
          "fieldId": 6987,
          "value": 2
        },
        {
          "type": "String",
          "fieldId": 6985,
          "value": "12/31/2021 6:00 AM"
        },
        {
          "type": "String",
          "fieldId": 6984,
          "value": "This is a test!"
        }
      ]
    }
  ]
}
```

{% /code %}
