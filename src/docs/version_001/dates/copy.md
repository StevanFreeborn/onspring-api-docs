# Dates and Times {% #dates %}

Onspring stores date/time information in UTC (Coordinated Universal Time), and the API expects to pass UTC data back and forth. The Onspring GUI converts the UTC value to the appropriate display value depending on your instance configuration and a user's profile settings. This means that when you are working with dates and times via the API, you need to be expecting to send and receive dates in UTC.
