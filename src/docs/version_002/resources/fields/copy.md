# Fields {% #fields %}

These are objects representing a field in an app or survey in your instance. You can retrieve a list of fields in an app or survey or retrieve a specific field to see the properties of the field(s).

## Field Properties

{% table %}

- Property Name
- Data Type
- Description

---

- id
- `number`
- The id of the field.

---

- appId
- `number`
- The id of the app or survey.

---

- name
- `string`
- The name of the field.

---

- type
- `string`
- The type of the field. Possible values are: `Attachment`, `AutoNumber`, `Date`, `Formula`, `Image`, `List`, `Number`, `Reference`, `SurveyCampaign`, `SurveyGroupScoring`, `SurveyReference`, `SurveyUnifiedAnswer`,`Text`, or `TimeSpan`.

---

- status
- `string`
- The status of the field. Possible values are: `Enabled` or `Disabled`.

---

- isRequired
- `boolean`
- Indicates whether the field is configured to be required.

---

- isUnique
- `boolean`
- Indicates whether the field is configured to be unique.

{% /table %}
