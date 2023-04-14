# Retrieving a record from an app

{% code heading="GET /Records/appId/{appID}/recordId/{recordID}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/appId/195/recordId/1' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var getRequest = new GetRecordRequest
{
  AppId = 195,
  RecordId = 1,
};

var getResponse = await onspringClient.GetRecordAsync(getRequest);
var record = getResponse.Value;

foreach (var recordFieldValue in record.FieldData)
{
  Console.WriteLine($"FieldId: {recordFieldValue.FieldId}, Type: {recordFieldValue.Type}, Value: {recordFieldValue.Value}");
}
```

```javascript
import {
  GetRecordRequest,
  OnspringClient,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const request = new GetRecordRequest(195, 1);
const res = await client.getRecordById(request);
const record = res.data;

console.log(record);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import GetRecordByIdRequest
from configparser import ConfigParser

request = GetRecordByIdRequest(appId=195, recordId=1)

response = client.GetRecordById(request)

print(f'Status Code: {response.statusCode}')
print(f'AppId: {response.data.appId}')
print(f'RecordId: {response.data.recordId}')

for field in response.data.fields:
  print(f'Type: {field.type}')
  print(f'FieldId: {field.fieldId}')
  print(f'Value: {field.GetResultValueString()}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "appId": 195,
  "recordId": 1,
  "fieldData": [
    {
      "type": "Integer",
      "fieldId": 6976,
      "value": 1
    }
  ]
}
```

{% /code %}
