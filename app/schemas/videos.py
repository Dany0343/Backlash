'''MODELOS DE BD'''
from pydantic import BaseModel
from datetime import date

class VideoBase(BaseModel):
    title:str
    description:str
    upload_date:date
    director:str

class VideoCreate(VideoBase):
    pass    

class Video(VideoBase):
    id:int
    
    class Config:
        orm_mode=True