# Add a list value

{% code method="PUT" heading="/Lists/id/{listId}/items" defaultLanguage="bash" %}

```bash
curl --location --request PUT 'https://api.onspring.com/Lists/id/906/items' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000' \
--header 'Content-Type: application/json' \
--data '{
  "id": null,
  "name": "Not Started",
  "numericValue": 0,
  "color": "#ffffff",
}'
```

```csharp
using Onspring.API.SDK;
using Onspring.API.SDK.Models;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.SaveListItemAsync(
  new SaveListItemRequest
  {
    ListId = 906,
    Id = null,
    Name = "Not Started",
    NumericValue = 0,
    Color = "#ffffff",
  }
);

Console.WriteLine(response.Value.Id);
```

```javascript
import {
  OnspringClient,
  ListItemRequest,
} from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const request = new ListItemRequest(
  906,
  null,
  'Not Started',
  0,
  '#ffffff'
);
const res = await client.addOrUpdateListItem(request);
const itemId = res.data.id;

console.log(itemId);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from OnspringApiSdk.Models import ListItemRequest
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
request = ListItemRequest(
  listId=906,
  name='Not Started',
  id='',
  numericValue=0,
  color='#ffffff'
)

response = client.AddOrUpdateListItem(request)

print(f'Status Code: {response.statusCode}')
print(f'Id: {response.data.id}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "id": "4118d53a-9121-4345-8682-07f23d606daa"
}
```

{% /code %}
