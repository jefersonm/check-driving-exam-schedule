# check-driving-exam-times

A simple script to check available times for theoretical and practical exams on https://fp.trafikverket.se

The script compare available times with a specific range and if found, print and sends message to Telegram chat that you configure.

## Setup

Set this environment variables:

* SOCIAL_SECURITY_NUMBER
* TELEGRAM_TOKEN
* TELEGRAM_CHAT_ID

Change parameters inside [check-time.js](check-time.js) script.

Install using this command:

```bash
npm i
```

## Run

Run only one time:

```bash
node check-time.js
```

Run forever:

```bash
bash run.sh
```
