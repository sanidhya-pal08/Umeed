# Umeed 🕊️

**Umeed** (Hindi: उम्मीद, meaning *Hope*) is a full-stack web application for filing and managing missing persons complaints — designed to assist families and authorities in the aftermath of disasters, accidents, or emergencies.

---

## 🌐 Overview

When disasters strike, families are separated and information is scattered. Umeed provides a centralized platform where:
- Families can **file missing persons complaints** with detailed information
- Authorities can **manage and track** reported cases
- Users can **search and browse** active missing persons reports

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Backend | FastAPI (Python) |
| Database | PostgreSQL |
| Auth | JWT + bcrypt |
| ORM | SQLAlchemy |

---

## 📁 Project Structure

```
Umeed/
├── frontend-umeed/     # React + Vite frontend
└── backend-umeed/      # FastAPI backend
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- Python 3.10+
- PostgreSQL

### Backend Setup

```bash
cd backend-umeed
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file in `backend-umeed/`:
```
DATABASE_URL=postgresql://umeed_user:yourpassword@localhost:5432/umeed
SECRET_KEY=your_secret_key
```

Run the server:
```bash
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend-umeed
npm install
npm run dev
```

---

## ✨ Features

- [ ] Project setup & authentication system
- [ ] PostgreSQL integration
- [ ] Missing persons complaint filing form
- [ ] Case management dashboard
- [ ] Search & filter reports
- [ ] Image upload support

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.



---

> *"As long as there is hope, there is a way."*
