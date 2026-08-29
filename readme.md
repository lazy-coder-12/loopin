<div align="center">

# 📱 Loop'in
### Know what you're paying for — before it hits your account.

*An on-device subscription tracker built for India, designed to feel nothing like a banking app.*

</div>

---

## 💡 The Idea

Most of us are bleeding money to subscriptions we forgot we signed up for. Existing trackers either want your SMS, your inbox, or a bank-linked aggregator — handing over more access than the problem deserves.

**Loop'in takes a different route.** It reads the payment notifications already arriving on your phone, figures out which ones are recurring, and quietly builds a picture of your subscriptions — entirely on your device. No servers. No bank access. No inbox scraping.

> Think of it as: *"I already get the notification. I just want someone to actually pay attention to it."*

---

## 🇮🇳 Why This Works Especially Well in India

The RBI mandates a **24-hour pre-debit notification** for every recurring charge. That's not just a compliance rule — it's a gift for detection:

- 📲 Every recurring charge announces itself *before* it happens
- 🔍 Loop'in listens for that signal via Android's `NotificationListenerService`
- ⏱️ You find out about a renewal with a full day to cancel — not after your money's gone

No SMS permission headaches. No annual security audits for reading emails. No FIU partnership required. Just a signal that's already sitting on your lock screen, finally being put to work.

---

## ✨ What It Does

| | |
|---|---|
| 🕵️ **Detects subscriptions automatically** | Parses payment notifications and figures out what's recurring vs. one-off |
| 🧩 **Handles the messy middle** | Distinguishes real subscriptions from EMIs, SIPs, insurance premiums, and rent — all of which *look* recurring but aren't subscriptions |
| ✏️ **Learns from your corrections** | Mark something wrong, and that feedback flows back into the specific stage of detection that got it wrong — not a generic "retrain everything" loop |
| 🔒 **Never leaves your phone** | Fully local-first. Your financial data doesn't touch a server, ever |
| 🎨 **Doesn't look like a finance app** | Built to break away from the beige-and-navy fintech mold — closer to a well-designed consumer app than a bank statement |

---

## 🏗️ How It's Built

The detection pipeline runs in six stages:

```
Ingest → Normalize → Merchant Resolution → Recurrence Inference → Match & Merge → Score & State
```

Each subscription then moves through its own **lifecycle state machine** (active → due soon → failed → cancelled, etc.), so the app always knows not just *what* you're subscribed to, but *what state that subscription is in*.

**Core stack & principles:**
- 🤖 **Detection:** Android `NotificationListenerService`
- 🔐 **Architecture:** Local-first, on-device processing
- 🇮🇳 **Compliance mindset:** Designed with DPDP in mind from day one
- 🎨 **Design system:** Built from primitives up — semantic tokens, typography, and dark mode handled as first-class citizens, not an afterthought

---

## 🎨 Design Philosophy

Indian fintech has a look — and SubSense is deliberately trying not to have it. The goal is closer to what apps like **Jupiter** proved is possible: financial products can be expressive, warm, and modern without sacrificing trust or clarity.

Every color, spacing value, and type style in this project comes from a proper design token system — not hardcoded hex codes sprinkled through the UI.

---

## 🚧 Project Status

This is an active work in progress, built solo, in the open, as both a real product attempt and a portfolio piece.

- [x] Core detection architecture defined
- [x] Design system primitives & semantic tokens
- [x] Typography system
- [ ] Notification corpus & merchant catalogue
- [ ] False-positive handling for EMIs/SIPs/rent
- [ ] MVP build

*(This list will get more specific as things get built — check the commit history for the real-time picture.)*

---

## 🤝 Contributing

This is currently a solo project, but I'd genuinely love company.

If you're interested in:
- Android development (Kotlin, `NotificationListenerService` internals)
- On-device ML / heuristics for recurrence detection
- Fintech UX or design systems
- India-specific financial regulation (DPDP, RBI norms)

...feel free to open an issue, fork the repo, or just reach out. Even a "here's how I'd approach this differently" comment is welcome. PR guidelines and a proper contribution doc are coming as the codebase stabilizes — for now, opening an issue to discuss first is the best way in.

---

## 💬 Got an Idea? Tell Me.

Have a feature idea, a design nitpick, an interaction pattern you love in another app, or just a "this would annoy me as a user" observation? That's exactly the kind of input this project needs right now.

- 🐛 Found something that feels off? [Open an issue](../../issues)
- 💡 Have a feature or design suggestion? Open an issue and tag it `suggestion`
- 🗣️ Prefer a quick chat instead of writing it up? Reach out directly — details below

No idea is too small. Half of good product design is someone pointing out the obvious thing you stopped noticing.

---

<div align="center">

**Built solo, on-device, out of mild frustration with forgotten subscriptions.**

📩 *Feedback, suggestions, and collaborators are always welcome.*

</div>