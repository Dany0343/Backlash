from sqlalchemy import Column, Integer, String, Date, CHAR
from .session import Base

class Video(Base):
    __tablename__   =   "videos"
    
    title = Column(CHAR, index=True)
    description =   Column(CHAR)