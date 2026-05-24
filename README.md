# Dark Stores Capacity Model

A capacity planning tool for darkstores (FMCG / Q‑commerce fulfillment centers) with 5 asset types: **Freezer, Fridge, Shelf, Beauty, Water Pallets**.

It helps operations managers balance demand vs. capacity by calculating efficiency ratios and giving actionable recommendations, plus suggested unit changes.

🔗 **Live demo:** [https://script.google.com/macros/s/AKfycbzdipCnBTwuo1UF3nHffKjVuUmmH8-A0gV7VSJJrlR215hjUdoSJ-La33uBJXVbENjw/exec]

## Screenshots

### Data Entry Interface

<img width="1892" height="864" alt="Screenshot_4" src="https://github.com/user-attachments/assets/8b614465-9a42-4d32-ab75-3013324cea4f" />

### Table View with Recommendations
<img width="1893" height="868" alt="Screenshot_5" src="https://github.com/user-attachments/assets/8ba5efa7-1504-4984-807b-583f000dc81b" />

### Heatmap Overview
<img width="1905" height="866" alt="Screenshot_6" src="https://github.com/user-attachments/assets/7af97e87-1fa5-4a82-8e4c-b9797251455a" />

### Assets Summary Pivot Table
<img width="1907" height="498" alt="Screenshot_7" src="https://github.com/user-attachments/assets/36408aa3-fd46-4d22-84b0-26c1cee42138" />


## Features

- **CSV Import/Export** – Bulk upload/download data
- **Capacity Model** – Weighted demand share (40% sold + 40% orders + 20% basket size) vs capacity share → efficiency ratio → recommendation
- **Smart suggestions** – Shows exactly how many units to add (`+X`) or remove (`-X`) to reach balance
- **Grouped & sorted table** – Worst darkstores (Increase first) at the top, assets sorted within each darkstore
- **Heatmap view** – Colour‑coded grid of all darkstore‑asset pairs, click to filter
- **Assets Summary** – Pivot table with totals, capacity, average utilisation, and action counts per asset type
- **No backend maintenance** – Runs on Google Apps Script (free, serverless)

## Recommendations Legend

| Pill | Meaning |
|------|---------|
| ↑ Increase | Need more capacity (shortage) |
| ↓ Decrease | Too much capacity (over‑provisioned) |
| ⚠ Review | High utilisation but low demand share – check stock policy |
| → Hold | Well balanced – no action needed |
| 🔍 Check data | Unusual pattern – verify input numbers |

## Sample CSV Format

| Column | Description |
|--------|-------------|
| Darkstore Name | Name of the fulfillment location |
| Asset Name | freezer / fridge / shelf / beauty / water |
| Asset Count | Number of units |
| Max Capacity / asset | Capacity per unit |
| Utilization % | Current usage percentage |
| Sold Quantities | Units sold |
| Orders | Number of orders |
| Basket Size | Average items per order |

A `sample-data.csv` file is included in this repository.

## Deployment Instructions

1. Create a new [Google Apps Script](https://script.google.com/) project
2. Copy `Code.gs` and `index.html` into the project
3. Deploy as a web app:
   - Execute as: **Me**
   - Who has access: **Anyone** (or restrict as needed)
4. Copy the generated URL – that's your live tool

## Tech Stack

- **Backend** – Google Apps Script (serves HTML, generates CSV)
- **Frontend** – HTML5, CSS3, vanilla JavaScript
- **Data processing** – Client‑side calculations, CSV as data store

## License

MIT – free to use and modify.

## Author

[Khaled Mohey Elden] – [[GitHub Profile URL](https://github.com/khaledmoheyd)]
