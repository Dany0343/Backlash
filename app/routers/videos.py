'''ROUTERS'''
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import session as db_session
from app.database import models
from app.schemas import videos as video_schemas
from typing import List
router = APIRouter()

@router.get("/videos/", response_model=List[video_schemas.Video])
def read_videos(skip: int = 0, limit: int = 10, db: Session = Depends(db_session.SessionLocal)):
    videos = db.query(models.Video).offset(skip).limit(limit).all()
    return videos

# Puedes agregar más endpoints según tus necesidades
