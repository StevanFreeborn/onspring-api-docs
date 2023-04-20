# Retrieve a file by it's id

{% code method="GET" heading="/Files/recordId/{recordId}/fieldId/{fieldId}/fileId/{fileId}/file" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Files/recordId/1/fieldId/6989/fileId/89/file' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK;

var onspringClient = new OnspringClient(
  config.BaseUrl,
  config.ApiKey
);

var getFileResponse = await onspringClient.GetFileAsync(1, 6989, 89);

using (var result = getFileResponse.Value)
{
  Console.WriteLine($"FileName is: {result.FileName}");
  Console.WriteLine($"ContentType: {result.ContentType}");
  Console.WriteLine($"ContentLength: {result.ContentLength}");

  using (var fileStream = new FileStream($"C:\Users\Public\Documents\{result.FileName}", FileMode.Create))
  {
    result.Stream.CopyTo(fileStream);
  }
}
```

```javascript
import { OnspringClient } from 'onspring-api-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const client = new OnspringClient(
  process.env.BASE_URL,
  process.env.API_KEY
);

const res = await client.getFileById(1, 6989, 89);
const file = res.data;

console.log(file.contentLength);
console.log(file.contentType);
console.log(file.fileName);
file.stream.pipe(fs.createWriteStream(file.fileName));
```

```python
from OnspringApiSdk.OnspringClient import OnspringClient
from configparser import ConfigParser

cfg = ConfigParser()
cfg.read('config.ini')

key = cfg['prod']['key']
url = cfg['prod']['url']

client = OnspringClient(url, key)
response = client.GetFileById(recordId=1, fieldId=6989, fileId=89)

print(f'Status Code: {response.statusCode}')
print(f'Name: {response.data.file.name}')
print(f'Content Type: {response.data.file.contentType}')
print(f'Content Length: {response.data.file.contentLength}')

filePath = f'C:\\Users\\sfree\\Documents\\Temp\\{response.data.file.name}'

with open(filePath, "wb") as file:
  file.write(response.data.file.content)

print(f'File Location: {filePath}')
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="text" %}

```text
this is only a test
```

{% /code %}
