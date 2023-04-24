# Get Report by Id {% #get-report-by-id %}

This endpoint returns the [Report Data](#report-data) for the given report.

## Path Parameters

{% table %}

- Property Name
- Data Type
- Description

---

- reportId
- `number`
- The id of the report.

{% /table %}

## Query Parameters

{% table %}

- Property Name
- Data Type
- Description

---

- apiDataFormat
- `string`
- The [format](#report-data-format) of the field data in the response. Valid values are `Raw` and `Formatted`. If not specified, `Raw` will be used.

---

- dataType
- `string`
- Indicate whether you want the report's report data or its chart data returned. Valid values are `ReportData` and `ChartData`. If not specified, `ReportData` will be used.

{% /table %}
