from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
from app.models import models

migrate = Migrate(app, db)

login = LoginManager(app)

from app.fakeUsersAndPosts import users, add_admin
add_admin()
users()
from . api import routes


# @login.user_loader
# def load_user(id):
#     return User.query.get(int(id))
