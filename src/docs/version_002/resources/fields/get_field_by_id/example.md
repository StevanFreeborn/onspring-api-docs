# Retrieve a field by its id

{% code method="GET" heading="/Fields/id/{fieldId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Fields/id/6986' \
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

```javascript
import { OnspringClient } from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getFieldById(6986);
const field = res.data;

console.log(field);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.GetFieldById(fieldId=6986)

print(f'Status Code: {response.statusCode}')
print(f'Field Id: {response.data.id}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "multiplicity": "SingleSelect",
  "listId": 906,
  "values": [
    {
      "id": "4118d53a-9121-4345-8682-07f23d606daa",
      "name": "In Progress",
      "sortOrder": 1,
      "numericValue": 1.0,
      "color": "#db3e3e"
    },
    {
      "id": "1c1c5f7e-cd03-4b70-9790-0f83b24b5863",
      "name": "Complete",
      "sortOrder": 2,
      "numericValue": 2.0,
      "color": "#ffffff"
    },
    {
      "id": "42493542-f77c-4298-91a0-18455ba0c764",
      "name": "Not Started",
      "sortOrder": 3,
      "numericValue": 0.0,
      "color": "#ffffff"
    }
  ],
  "id": 6986,
  "appId": 195,
  "name": "Status",
  "type": "List",
  "status": "Enabled",
  "isRequired": false,
  "isUnique": false
}
```

{% /code %}
