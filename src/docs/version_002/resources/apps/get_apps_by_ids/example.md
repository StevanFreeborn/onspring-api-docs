# Retrieve a batch of apps by ids

{% code method="POST" heading="/Apps/batch-get" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Apps/batch-get' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '[8,79,137,193,183]'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetAppsAsync(
  new List<int> { 8, 79, 137, 193, 183 }
);

foreach (var app in response.Value.Items)
{
  Console.WriteLine($"{app.Id}, {app.Name}");
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

const res = await client.getAppsByIds([130, 131]);
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
response = client.GetAppsByIds(appIds=[195, 240])

print(f'Status Code: {response.statusCode}')
print(f'Count: {response.data.count}')

for app in response.data.apps:
  print(f'Id: {app.id}')
  print(f'Name: {app.name}')
  print(f'href: {app.href}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "count": 5,
  "items": [
    {
      "href": "https://api.onspring.dev/apps/id/8",
      "id": 8,
      "name": "Activated BCDR Tasks"
    },
    {
      "href": "https://api.onspring.dev/apps/id/79",
      "id": 79,
      "name": "Application Assessments"
    },
    {
      "href": "https://api.onspring.dev/apps/id/137",
      "id": 137,
      "name": "Applications"
    },
    {
      "href": "https://api.onspring.dev/apps/id/193",
      "id": 193,
      "name": "Ascent Obligations"
    },
    {
      "href": "https://api.onspring.dev/apps/id/183",
      "id": 183,
      "name": "Asset Baseline Repository"
    }
  ]
}
```

{% /code %}
