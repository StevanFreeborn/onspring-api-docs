# Retrieving a batch of records

{% code heading="POST /Records/batch-get" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/batch-get' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'x-api-version: 2' \
--header 'Content-Type: application/json' \
--data '{
  "AppId": 195,
  "RecordIds": [1],
  "FieldIds": [6983,6986,6987,6985,6984],
  "DataFormat": "Raw"
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

var request = new GetRecordsRequest
{
  AppId = 195,
  RecordIds = new List<int> { 1, },
  FieldIds = new List<int> { 6983, 6986, 6987, 6985, 6984 },
  DataFormat = DataFormat.Raw,
};
var response = await onspringClient.GetRecordsAsync(request);

foreach (var record in response.Value.Items)
{
  Console.WriteLine($"{record.AppId}, {record.RecordId}");
}
```

```javascript
import {
  DataFormat,
  GetRecordsRequest,
  OnspringClient,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const request = new GetRecordsRequest(
  195,
  [1],
  [6983, 6986, 6987, 6985, 6984],
  DataFormat.Raw
);
const res = await client.getRecordsByIds(request);
const records = res.data.items;

for (const record of records) {
  console.log(record);
}
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import GetBatchRecordsRequest
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
request = GetBatchRecordsRequest(
  appId=195,
  recordIds=[1],
  fieldIds=[6983, 6986, 6987, 6985, 6984],
  dataFormat='Raw'
)
response = client.GetRecordsByIds(request)

print(f'Status Code: {response.statusCode}')
print(f'Count: {response.data.count}')

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
  "count": 1,
  "items": [
    {
      "appId": 195,
      "recordId": 1,
      "fieldData": [
        {
          "type": "String",
          "fieldId": 6983,
          "value": "Test Task 1"
        },
        {
          "type": "Guid",
          "fieldId": 6986,
          "value": "4118d53a-9121-4345-8682-07f23d606daa"
        },
        {
          "type": "Integer",
          "fieldId": 6987,
          "value": 2
        },
        {
          "type": "Date",
          "fieldId": 6985,
          "value": "2021-12-31T06:00:00Z"
        },
        {
          "type": "String",
          "fieldId": 6984,
          "value": "<p>This is a test!</p>"
        }
      ]
    }
  ]
}
```

{% /code %}
