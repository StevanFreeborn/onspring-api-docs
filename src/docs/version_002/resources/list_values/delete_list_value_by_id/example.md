# Delete a list value

{% code method="DELETE" heading="/Lists/id/{listId}/itemId/{itemId}" defaultLanguage="bash" %}

```bash
curl --location --request DELETE 'https://api.onspring.com/Lists/id/906/itemId/e3371dbf-b557-4a31-b32f-33c0265d2a59' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;
using System.Net;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.DeleteListItemAsync(
  906,
  Guid.Parse("e3371dbf-b557-4a31-b32f-33c0265d2a59")
);

if (response.StatusCode == HttpStatusCode.NoContent)
{
  Console.WriteLine("Deleted");
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

const res = await client.deleteListItemById(
  906,
  'e3371dbf-b557-4a31-b32f-33c0265d2a59'
);

res.statusCode === 204
  ? console.log('List item deleted')
  : console.log('Error deleting list item');
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.DeleteListItem(
  listId=906,
  itemId='36f94d8c-2b9d-465e-9ad1-ede04109efc9'
)

print(f'Status Code: {response.statusCode}')
print(f'Message: {response.message}')
```

{% /code %}
