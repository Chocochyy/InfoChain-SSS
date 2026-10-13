# 🎓 InfoChain - Smart Campus Information System
> Powered by the **SSS Concept** (*Somebody + Somewhere + Right Time = Knows Something*)

![InfoChain Banner](https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80)

---

## 📌 Executive Summary

Modern universities suffer from **scattered**, **unpersonalized**, and **delayed** information delivery:
1. **Scattered:** Announcements reside across disparate WhatsApp groups, LMS portals, bulletin boards, and email lists.
2. **Not Personalized:** Broad blast notices inundate users with irrelevant data (e.g., medical clinical rotation alerts sent to engineering students).
3. **Delivered Too Late:** Sudden classroom relocations or lab maintenance alerts arrive after students are already on site.

**InfoChain** solves this dilemma using the **SSS Formula**:
$$\text{Somebody (Role)} + \text{Somewhere (Context/Location)} + \text{Right Time (Academic Cycle)} = \text{Knows Something (Targeted Wisdom)}$$

Backed by a lightweight **blockchain cryptographic proof layer**, every announcement is verifiable, tamper-proof, and delivered with zero noise.

---

## 🚀 Key Features

### 1. 📱 Mobile-First Smartphone Container
- **iPhone / Android frame styling** with realistic Dynamic Island status bar, live clock, 5G & Wi-Fi indicators, and bottom home bar.
- **Modern 4-Tab Bottom Navigation Bar**:
  1. **Home:** Feed, Personalized Highlights, SSS Engine Controls, Blockchain Ledger banner.
  2. **Explore / Search:** AI Knowledge Query, Trending `#Tags`, and Role-specific Hubs.
  3. **Schedule / Events:** Interactive week-strip agenda, classes, exams, and deadlines.
  4. **Profile:** Digital Campus ID Card (DID), Token balance (CCP), and SSS sensitivity preferences.

### 2. ⚡ Main Dashboard (Home Tab)
- **Personalized Header:** Dynamic greeting (*"Good morning, Sheril 👋"*), student ID, role badge, and notification bell with unread badge counter.
- **Quick Search Bar:** *"Search for data, knowledge, or wisdom..."* with real-time query filtering.
- **"Important for You" Hero Card:** High-priority cards (e.g., *Registration Period for Next Semester* with countdown timer and cryptographic proof tag).
- **"When It's Needed" Category Chips:** Instant filtering by *Academic*, *Events*, *Announcements*, and *Personal*.
- **"Latest Information" Feed:** Rich cards displaying category badges, color-coded accents, timestamps, and verifiable transaction hashes.
- **"Powered by Blockchain" Banner:** Real-time data flow indicator, zero-noise trusted proof, and an interactive **On-Chain Explorer Modal**.

### 3. 🧠 Interactive SSS Engine
- Real-time dropdown controls directly on the dashboard:
  - **Somebody:** Select between *CS Student*, *Med Student*, *Lecturer*, or *Staff*.
  - **Somewhere:** Select between *Faculty CS*, *Library*, *Plaza*, or *All Campuses*.
  - **Right Time:** Select between *Midterm Week*, *Registration*, *Maintenance Window*, or *Regular*.
- Instantly evaluates and displays matching, relevant notices with an algorithmic rationale explanation (*"Why you received this notice"*).

### 4. 💡 About InfoChain & SSS Concept Modal
- Interactive visual breakdown of the Problem vs. Solution.
- Visual diagram of the SSS Formula.
- Explanation of the decentralized cryptographic audit trail.

---

## 📁 File Structure

```text
├── index.html      # Complete standalone, runnable mobile web application (React 18 + Tailwind CDN)
├── App.jsx         # Modular React single-file component for Next.js / Vite / CRA
└── README.md       # Comprehensive documentation & architecture guide
```

---

## 💻 How to Run

### Option A: Open Directly in Any Browser (Zero Install Required)
1. Double-click `index.html` in your file explorer, OR
2. Right-click `index.html` -> **Open with Google Chrome / Microsoft Edge / Firefox**.
3. Enjoy the full interactive mobile app!

### Option B: Use with a Local Web Server
If you have any web server tool (e.g., VS Code Live Server or python):
```bash
# Python (if installed)
python -m http.server 3000

# Or npx serve (if Node.js is installed)
npx serve .
```
Then navigate to `http://localhost:3000`.

### Option C: Integrate `App.jsx` into an Existing React App
Copy `App.jsx` into your `src/` folder of any Tailwind-enabled React or Next.js application:
```bash
npm install lucide-react # (Optional - App.jsx contains built-in SVGs as fallbacks)
```

---

## 🎨 Color Palette Reference

| Name | Hex Code | Purpose |
|---|---|---|
| Primary Royal Blue | `#1E40AF` | Main branding, primary buttons, dynamic gradients |
| Dark Blue | `#1E3A8A` / `#0F172A` | Backgrounds, header cards, dark framing |
| Soft Blue Tint | `#EFF6FF` / `#DBEAFE` | Selected pills, active badges, soft cards |
| Dark Text | `#1E293B` | High contrast, crisp readable typography |
| Emerald Green | `#10B981` | Cryptographic verification badges, active status |
| Amber / Orange | `#F59E0B` | Deadlines, maintenance warnings, urgent actions |
| Violet / Indigo | `#8B5CF6` | Events, hackathons, student organizations |

---

*InfoChain - Delivering the right information to the right person at the right time.*
