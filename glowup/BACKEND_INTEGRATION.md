# FastAPI Backend Integration Guide

This guide helps you integrate the GlowUp frontend with a FastAPI backend.

## 📦 Setup FastAPI Project

### 1. Create Backend Directory

```bash
mkdir backend
cd backend
```

### 2. Install Dependencies

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose passlib python-multipart
pip install pydantic[email] alembic
```

### 3. Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI app entry point
│   ├── config.py               # Configuration
│   ├── database.py             # Database setup
│   ├── models/                 # SQLAlchemy models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── artist.py
│   │   ├── booking.py
│   │   └── review.py
│   ├── schemas/                # Pydantic schemas
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── artist.py
│   │   ├── booking.py
│   │   └── review.py
│   ├── routers/                # API routes
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── artists.py
│   │   ├── bookings.py
│   │   ├── services.py
│   │   ├── reviews.py
│   │   └── admin.py
│   ├── services/               # Business logic
│   │   ├── __init__.py
│   │   ├── auth_service.py
│   │   ├── booking_service.py
│   │   └── payment_service.py
│   └── middleware/             # Custom middleware
│       ├── __init__.py
│       └── auth.py
├── alembic/                    # Database migrations
├── alembic.ini
├── requirements.txt
└── .env
```

## 🔧 Main Application Setup

### `app/main.py`

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, artists, bookings, services, reviews, admin

app = FastAPI(
    title="GlowUp API",
    description="Home Beauty Services Marketplace API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://glowup.pk"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(artists.router, prefix="/api/artists", tags=["Artists"])
app.include_router(bookings.router, prefix="/api/bookings", tags=["Bookings"])
app.include_router(services.router, prefix="/api/services", tags=["Services"])
app.include_router(reviews.router, prefix="/api/reviews", tags=["Reviews"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])

@app.get("/")
async def root():
    return {"message": "GlowUp API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
```

### `app/database.py`

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings

engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### `app/config.py`

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()
```

## 📊 Example Model

### `app/models/artist.py`

```python
from sqlalchemy import Column, Integer, String, Boolean, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

class Artist(Base):
    __tablename__ = "artists"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    bio = Column(String, nullable=True)
    location = Column(String, nullable=False)
    experience = Column(Integer, nullable=False)
    is_verified = Column(Boolean, default=False)
    rating = Column(Float, default=0.0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    user = relationship("User", back_populates="artist")
    services = relationship("ArtistService", back_populates="artist")
    portfolio = relationship("Portfolio", back_populates="artist")
    bookings = relationship("Booking", back_populates="artist")
    reviews = relationship("Review", back_populates="artist")
```

## 📝 Example Schema

### `app/schemas/artist.py`

```python
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ArtistBase(BaseModel):
    bio: Optional[str] = None
    location: str
    experience: int

class ArtistCreate(ArtistBase):
    user_id: int
    services: List[dict]
    portfolio_images: Optional[List[str]] = None

class ArtistResponse(ArtistBase):
    id: int
    is_verified: bool
    rating: float
    created_at: datetime
    
    class Config:
        from_attributes = True
```

## 🛣️ Example Router

### `app/routers/artists.py`

```python
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.schemas.artist import ArtistResponse
from app.models.artist import Artist

router = APIRouter()

@router.get("/", response_model=List[ArtistResponse])
async def get_artists(
    skip: int = 0,
    limit: int = 100,
    service: str = None,
    location: str = None,
    db: Session = Depends(get_db)
):
    query = db.query(Artist).filter(Artist.is_verified == True)
    
    if service:
        # Filter by service (join with artist_services table)
        pass
    
    if location:
        query = query.filter(Artist.location.ilike(f"%{location}%"))
    
    artists = query.offset(skip).limit(limit).all()
    return artists

@router.get("/{artist_id}", response_model=ArtistResponse)
async def get_artist(artist_id: int, db: Session = Depends(get_db)):
    artist = db.query(Artist).filter(Artist.id == artist_id).first()
    if not artist:
        raise HTTPException(status_code=404, detail="Artist not found")
    return artist
```

## 🔐 Authentication Middleware

### `app/middleware/auth.py`

```python
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt
from app.config import settings

security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
        return {"user_id": user_id}
    except JWTError:
        raise credentials_exception
```

## 🚀 Run the Backend

### `run.sh` or `run.bat`

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## 🔗 Connect Frontend to Backend

Update your frontend API calls to point to your FastAPI backend:

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchArtists(filters?: {
  service?: string;
  location?: string;
}) {
  const params = new URLSearchParams();
  if (filters?.service) params.append('service', filters.service);
  if (filters?.location) params.append('location', filters.location);
  
  const response = await fetch(`${API_BASE_URL}/api/artists?${params}`);
  return response.json();
}

export async function createBooking(bookingData: any) {
  const response = await fetch(`${API_BASE_URL}/api/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  return response.json();
}
```

## 📦 Environment Variables

Create `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/glowup
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## 🗄️ Database Migrations

```bash
# Initialize Alembic
alembic init alembic

# Create migration
alembic revision --autogenerate -m "Initial migration"

# Apply migration
alembic upgrade head
```

## 🧪 Testing

```bash
# Install test dependencies
pip install pytest httpx

# Run tests
pytest
```

## 📊 API Documentation

FastAPI automatically generates API documentation:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🔜 Next Steps

1. Set up PostgreSQL database
2. Run database migrations
3. Implement authentication
4. Add payment gateway integration
5. Set up email/SMS notifications
6. Deploy to production (Heroku, AWS, or DigitalOcean)

---

For more details, visit [FastAPI Documentation](https://fastapi.tiangolo.com/)
