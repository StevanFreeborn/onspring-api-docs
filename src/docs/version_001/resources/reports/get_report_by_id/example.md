# Retrieving data from a report

{% code method="GET" heading="/Reports/{reportId}" defaultLanguage="bash" %}

```bash
curl --location 'https://api.onspring.com/Reports/613' \
--header 'X-ApiKey: 000000ffffff000000ffffff/00000000-ffff-0000-ffff-000000000000'
```

```csharp
using Onspring.API.SDK.Helpers;
using Onspring.API.SDK.Enums;

var httpHelper = new HttpHelper(
  config.baseUrl,
  config.apiKey
);

var reportData = httpHelper.GetReportData(
  reportId,
  ReportDataType.ChartData,
  DataFormat.Raw
);

Console.WriteLine(string.Join(", ", reportData.Columns));

foreach (var row in reportData.Rows)
{
  Console.WriteLine(string.Join(", ", row.Cells));
}
```

{% /code %}

{% code heading="RESPONSE" defaultLanguage="json" %}

```json
{
  "Columns": [
    "Name",
    "Owner",
    "Due Date",
    "Status",
    "Description"
  ],
  "Rows": [
    [
      "A New Test Task",
      null,
      null,
      null,
      "<p>This is a test task.</p>"
    ],
    [
      "A New Test Task",
      "Severus",
      "12/25/2021 12:00 AM",
      "In Progress",
      "<p>This is a test task.</p>"
    ]
  ]
}
```

{% /code %}
