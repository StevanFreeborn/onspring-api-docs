# Deleting a file by it's id

{% code method="DELETE" heading="/Files/recordId/{recordId}/fieldId/{fieldId}/fileId/{fileId}/file" defaultLanguage="bash" %}

```bash
curl --location --request DELETE 'https://api.onspring.com/Files/recordId/140/fieldId/6989/fileId/1904' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;
using System.Net;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.DeleteFileAsync(140, 6989, 1904);

if (response.StatusCode == HttpStatusCode.NoContent)
{
  Console.WriteLine("File deleted successfully");
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

const res = await client.deleteFileById(140, 6989, 1904);

res.statusCode === 204
  ? console.log('File deleted')
  : console.log('Error deleting file');
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.DeleteFileById(recordId=140, fieldId=6989, fileId=1904)

if response.status_code == 204:
  print('File deleted')
else:
  print('Error deleting file')
```

{% /code %}
