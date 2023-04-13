# Retrieving records for an app

{% code heading="GET /Records/appId/{appID}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Records/appId/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var apps = await onspringClient.GetAppsAsync();
foreach (App app in apps)
{
    Console.WriteLine($"{app.Id}, {app.Name}");
}
```

```javascript
import dotenv from 'dotenv';
import { OnspringClient } from 'onspring-api-sdk';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getApps();
const apps = res.data.items;

for (const app of apps) {
  console.log(app);
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
response = client.GetApps()

print(f'Status Code: {response.statusCode}')
print(f'Page Size: {response.data.pageSize}')
print(f'Page Number: {response.data.pageNumber}')
print(f'Total Pages: {response.data.totalPages}')
print(f'Total Records: {response.data.totalRecords}')

for app in response.data.apps:
  print(f'Id: {app.id}')
  print(f'Name: {app.name}')
  print(f'href: {app.href}')
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
      "recordId": 1,
      "fieldData": [
        {
          "type": "Integer",
          "fieldId": 6976,
          "value": 1
        }
      ]
    }
  ]
}
```

{% /code %}
