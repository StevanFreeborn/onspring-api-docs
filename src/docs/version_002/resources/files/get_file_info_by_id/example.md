# Retrieve a file's information by it's id

{% code method="GET" heading="/Files/recordId/{recordId}/fieldId/{fieldId}/fileId/{fileId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Files/recordId/1/fieldId/6989/fileId/89' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var response = await onspringClient.GetFileInfoAsync(1, 6989, 89);

Console.WriteLine($"{response.Value.Name}, {response.Value.ContentType}");
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getFileInfoById(1, 6989, 89);
const fileInfo = res.data;

console.log(fileInfo);
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.GetFileInfoById(recordId=1, fieldId=6989, fileId=89)

print(f'Name: {response.data.fileInfo.name}')
print(f'Content Type: {response.data.fileInfo.contentType}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "type": "Attachment",
  "contentType": "text/plain",
  "name": "Test Attachment.txt",
  "createdDate": "2021-12-13T21:34:14.519Z",
  "modifiedDate": "2021-12-13T21:34:19.236Z",
  "owner": "e7d20e9e-0bce-40e2-8fdb-f8c839a982cb",
  "notes": "",
  "fileHref": "https://api.onspring.dev/files/record/1/field/6989/file/89/file"
}
```

{% /code %}
