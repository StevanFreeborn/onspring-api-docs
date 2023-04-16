# Deleting a record from an app

{% code method="DELETE" heading="/Records/appId/{appId}/recordId/{recordId}" defaultLanguage="bash" %}

```bash
curl --location --request DELETE 'https://api.onspring.com/Records/appId/195/recordId/140' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;
using System.Net;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var appId =195;
var recordId = 140;
var deleteResponse = await onspringClient.DeleteRecordAsync(appId, recordId);

if (deleteResponse.StatusCode == HttpStatusCode.NoContent)
{
  Console.WriteLine("Record deleted");
}
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.deleteRecordById(195, 140);

res.statusCode === 204
  ? console.log('Record deleted')
  : console.log('Error deleting record');
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.DeleteRecordById(appId=195, recordId=140)

print(f'Status Code: {response.statusCode}')
print(f'Message: {response.message}')
```

{% /code %}
