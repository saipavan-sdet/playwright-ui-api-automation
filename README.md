# 📌 Playwright UI + API Automation Framework

This repository contains an end-to-end automation framework built using **Playwright (JavaScript)** for **UI and API testing**, following real-time industry practices.

---

## 🚀 Tech Stack
- Playwright
- JavaScript
- Node.js
- VS Code
- Git & GitHub

---

## 📂 Project Structure

Playwright/
│
├── tests/
│   ├── api.spec.js          # API test cases
│   ├── ui.spec.js           # UI test cases (SauceDemo)
│
├── playwright.config.js     # Playwright configuration
├── package.json             # Project dependencies & scripts
├── README.md                # Project documentation

---

## 🧪 Test Coverage

### API Automation
- Token generation
- Create resource (POST)
- Fetch resource (GET)
- Dynamic data handling
- Real-time API simulation

### UI Automation
- SauceDemo login validation
- Headless browser execution
- Assertion for successful login

---

## ▶️ How to Run Tests

Install dependencies:
npm install

Run all tests:
npx playwright test

Run only UI tests:
npx playwright test tests/ui.spec.js

Run only API tests:
npx playwright test tests/api.spec.js

---

## 🧠 Headless Mode

Default: Headless  
Headed mode:
npx playwright test --headed

---

## 📊 Test Report

npx playwright show-report

---

## 🔐 Authentication Handling
- API token generated dynamically
- Token reused across API test cases
- Simulates secured real-time APIs

---

## 🏗️ Framework Highlights
- Clean and simple structure
- Reusable automation logic
- Industry-standard Playwright setup
- Suitable for SDET / Automation Engineer roles
- Easy to extend for CI/CD

---

## 👤 Author
Emmadi Sai Pavan  
Software Development Engineer in Test (SDET)

---

## 📌 Purpose
- Learning Playwright
- Real-time UI + API automation
- Interview preparation
- GitHub portfolio
