# Retrieve a batch of fields by ids

{% code method="POST" heading="/Fields/batch-get" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Fields/batch-get' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '[6983,6986,6987,6985,6984]'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = onspringClient.GetFieldsAsync(new List<int> { 6983, 6986, 6987, 6985, 6984 });

foreach (var field in response.Value.Items)
{
  Console.WriteLine($"{field.Id}");
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

const res = await client.getFieldsByIds([4793, 4801]);
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
response = client.GetFieldsByIds(fieldIds=[6983, 6986, 6987, 6985, 6984])

print(f'Status Code: {response.statusCode}')
print(f'Count: {response.data.count}')

for field in response.data.fields:
  print(f'Field Id: {field.id}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "count": 1,
  "items": [
    {
      "id": 6983,
      "appId": 195,
      "name": "Name",
      "type": "Text",
      "status": "Enabled",
      "isRequired": false,
      "isUnique": false
    }
  ]
}
```

{% /code %}
