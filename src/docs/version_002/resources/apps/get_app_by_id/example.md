# Retrieving an app by its id

{% code method="GET" heading="/Apps/id/{appId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Apps/id/195' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetAppAsync(195);

Console.WriteLine($"{response.Value.Id}, {response.Value.Name}");
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getAppById(195);
const app = res.data;

console.log(app);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)

response = client.GetAppById(appId=195)

print(f'Status Code: {response.statusCode}')
print(f'id: {response.data.app.id}')
print(f'Name: {response.data.app.name}')
print(f'href: {response.data.app.href}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "id": 195,
  "name": "Tasks",
  "href": "https://api.onspring.com/Apps/195"
}
```

{% /code %}
