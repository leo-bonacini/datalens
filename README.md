# DataLens · Browser Data Analysis

A fully client-side data analysis application that runs entirely in the browser, no backend, no build tools, no installation required.

---

## Features

### Import
- Drag-and-drop or file picker for CSV files
- Automatic delimiter detection via [Papa Parse](https://www.papaparse.com/)
- Three built-in sample datasets (Sales, Iris, Weather)

### Explore
- Interactive, paginated data table (10 / 25 / 50 / 100 rows per page)
- Click any column header to sort ascending or descending
- Global search filters all columns in real time
- Column info cards showing detected type, unique count, and missing values

### Analyze
- Overview cards: row count, column count, missing value percentage, duplicate count
- Per-column statistics: mean, median, mode, standard deviation, min, max, Q1, Q3
- Pearson correlation matrix (heatmap) for all numeric columns

### Visualize
- Six chart types: Bar, Line, Scatter, Histogram, Pie, Box
- Configurable X axis, Y axis, and color-by grouping
- Auto-generated charts based on detected column types
- One-click PNG download for any chart

### Process
- Remove duplicate rows
- Handle missing values (remove rows, fill with mean / median / mode / custom value)
- Rename columns
- Filter rows (equals, not equals, greater than, less than, contains)
- Add calculated columns using column names as variables (e.g. `revenue - cost`)
- Undo the last operation
- Export the processed dataset as CSV

### User Experience
- Light and dark themes — preference saved in the browser
- Fully responsive layout for desktop and mobile
- Keyboard shortcuts: `1–5` navigate sections, `T` toggle theme, `?` show shortcuts, `Esc` dismiss
- WCAG-friendly markup with proper ARIA roles and labels
- Toast notifications and loading indicator
- Language selector in the navbar with preference saved in the browser

---

## Supported Languages

| Flag | Language |
|------|----------|
| 🇺🇸 | English (default) |
| 🇧🇷 | Portuguese |
| 🇪🇸 | Spanish |

---

## Tech Stack

| Concern | Library / Approach |
|---|---|
| CSV parsing | [Papa Parse 5.4](https://www.papaparse.com/) via CDN |
| Charts | [Plotly.js 2.27](https://plotly.com/javascript/) via CDN |
| Styling | Plain CSS with custom properties for theming |
| Logic | Vanilla ES6+ JavaScript, no framework |
| Hosting | GitHub Pages (static files only) |

No Node.js, no npm, no build step — open `index.html` in a browser and it works.

---

## File Structure

```
datalens/
├── index.html   # App shell and all section markup
├── style.css    # Light/dark theme, responsive layout, components
├── script.js    # All logic: i18n, stats, charts, processing
└── README.md
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1` – `5` | Navigate to Import / Explore / Analyze / Visualize / Process |
| `T` | Toggle light / dark theme |
| `?` | Show keyboard shortcut help |
| `Esc` | Dismiss modals and toasts |

---

## Screenshots

> Import a CSV file or pick one of the three built-in datasets, then explore,
> analyze, visualize, and process — entirely in the browser.
