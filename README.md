# Warhorn

Warhorn is a guild event scheduling app built for World of Warcraft and D&D players. Create raid events, track RSVPs by role, and keep your roster organized — all synced with Discord. Built with the MERN stack and Discord OAuth.

---

## Why Warhorn

There are addons out there that can help with raid scheduling, but nothing puts it all in one place. Most guilds end up cobbling together Discord channels, spreadsheets, and tools like Gargoil just to coordinate a single raid night — with the raid leader manually checking each one. PUG runners have it even worse. Warhorn fixes that. No new account to create, no addon to install, no channel to dig through. Just sign in with Discord and everything your guild needs to organize, schedule, and rally for raid night is right there.

---

## Status

Warhorn is actively in development, built in spare time around work and life. I'm carving out dedicated weekly time to push this forward and get the full vision realized. There's also another project quietly in the works — stay tuned.

---

## Tech Stack

| Layer     | Tech                              |
| --------- | --------------------------------- |
| Frontend  | React, TypeScript, Vite           |
| Backend   | Node.js, Express                  |
| Database  | MongoDB, Mongoose                 |
| Auth      | Discord OAuth 2.0, JWT            |
| Real-time | Socket.io                         |
| Styling   | CSS Modules, Cinzel + Crimson Pro |

---

## Features

- **Discord OAuth** — sign in with your existing Discord account, no new credentials needed
- **Event creation** — schedule raids, mythic+ runs, PvP nights, and social events with role caps for tanks, healers, and DPS
- **Live RSVP tracking** — real-time roster updates via WebSockets so everyone sees headcount as it changes
- **Role-based slots** — set caps per role so you never accidentally stack 10 DPS and no healer
- **Time polls** — let guild members vote on the best start time before the event is locked in
- **Discord bot** — automated announcements and DM reminders so the raid leader isn't pinging 40 people manually
- **Attendance insights** — track who shows up, spot trends, and plan around your most reliable raiders

---

## Roadmap

- [ ] Discord bot slash commands (`/rsvp`, `/events`, `/remind`)
- [ ] Attendance analytics dashboard
- [ ] CSV export for raid history
- [ ] Mobile responsive layout
- [ ] Custom guild branding
