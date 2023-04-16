# Checking for connection to the api

{% code method="GET" heading="/Ping" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Ping' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

bool canConnect = await onspringClient.CanConnectAsync();

if (canConnect == true)
{
  Console.WriteLine("Connected to Onspring API");
}
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.canConnect();

console.log(res);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)

canConnect = client.CanConnect()

if canConnect:
  print('Connected successfully')
else:
  print('Attempt to connect failed')
```

{% /code %}
