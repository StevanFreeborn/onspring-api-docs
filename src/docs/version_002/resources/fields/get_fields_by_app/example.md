# Retrieve all fields for an app

{% code method="GET" heading="/Fields/appId/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Fields/appId/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetFieldsForAppAsync(195);

foreach (var field in response.Value.Items)
{
  Console.WriteLine($"{field.Id}, {field.AppId}, {field.Name}, {field.Type}, {field.Status}, {field.IsRequired}, {field.IsUnique}");
}
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getFieldsByAppId(195);
const fields = res.data.items;

for (const field of fields) {
  console.log(field);
}
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.GetFieldsByAppId(appId=195)

print(f'Status Code: {response.statusCode}')
print(f'Page Size: {response.data.pageSize}')
print(f'Page Number: {response.data.pageNumber}')
print(f'Total Pages: {response.data.totalPages}')
print(f'Total Records: {response.data.totalRecords}')

for field in response.data.fields:
  print(f'Field Id: {field.id}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "pageNumber": 1,
  "pageSize": 2,
  "totalPages": 1,
  "totalRecords": 2,
  "items": [
    {
      "id": 6989,
      "appId": 195,
      "name": "Attachments",
      "type": "Attachment",
      "status": "Enabled",
      "isRequired": false,
      "isUnique": false
    },
    {
      "multiplicity": "SingleSelect",
      "referencedAppId": 2,
      "id": 6980,
      "appId": 195,
      "name": "Created By",
      "type": "Reference",
      "status": "Enabled",
      "isRequired": false,
      "isUnique": false
    }
  ]
}
```

{% /code %}
