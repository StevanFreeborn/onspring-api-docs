# Retrieve apps accessible to the API key

{% code method="GET" heading="/Apps" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Apps' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetAppsAsync();

foreach (var app in response.Value.Items)
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
