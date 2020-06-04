from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from config import Config

db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate.init_app(app, db)
login.init_app(app)

from app.models import models

from app.fake_it_all import posts as fake_posts
# from app.fake_it_all import add_admin

# add_admin()

from app.api import main

