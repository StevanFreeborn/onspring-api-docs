# The Values in a Raw Response

{% code heading="RAW" defaultLanguage="json" %}

```json
{
  "Columns": [
    "attachment_field",
    "Record Id",
    "Created Date",
    "image_field",
    "multi_select_list_field",
    "matrix_survey_answer_field",
    "number_field",
    "multi_select_reference_field",
    "Survey Campaign",
    "Group Scoring",
    "multi_line_text_field",
    "time_span_field_with_recurrence"
  ],
  "Rows": [
    [
      "test-attachment.txt|odin-project-timestamps.txt|test-attachment.txt|test-attachment.txt|test-attachment.txt|test-attachment.txt|test-attachment.txt|test-attachment.txt|test-attachment.txt",
      1,
      "2/16/2023 5:14 AM",
      "test-image.png|test-image.jpg",
      "list_value_1|list_value_2",
      "thing_1 / no|thing_2 / no",
      100.0,
      "Changed|Test",
      "targeted_recipient_campaign",
      "scoring_group_list_1: 5|scoring_group_list_2: 3|scoring_group_list_3: 7",
      "<p>This is a test</p>",
      "Every 11 Second(s) End After 1 Occurrences"
    ]
  ]
}
```

{% /code %}

# The Values in a Formatted Response

{% code heading="FORMATTED" defaultLanguage="json" %}

```json
{
  "Columns": [
    "attachment_field",
    "Record Id",
    "Created Date",
    "image_field",
    "multi_select_list_field",
    "matrix_survey_answer_field",
    "number_field",
    "multi_select_reference_field",
    "Survey Campaign",
    "Group Scoring",
    "multi_line_text_field",
    "time_span_field_with_recurrence"
  ],
  "Rows": [
    [
      "test-attachment.txt\r\nodin-project-timestamps.txt\r\ntest-attachment.txt\r\ntest-attachment.txt\r\ntest-attachment.txt\r\ntest-attachment.txt\r\ntest-attachment.txt\r\ntest-attachment.txt\r\ntest-attachment.txt",
      "recordId-1",
      "2/16/2023 5:14 AM",
      "test-image.png\r\ntest-image.jpg",
      "list_value_1\r\nlist_value_2",
      "thing_1 / no\r\nthing_2 / no",
      "$100 dollars",
      "Changed\r\nTest",
      "targeted_recipient_campaign",
      "scoring_group_list_1: 5\r\nscoring_group_list_2: 3\r\nscoring_group_list_3: 7",
      "This is a test",
      "Every 11 Second(s) End After 1 Occurrences"
    ]
  ]
}
```

{% /code %}
