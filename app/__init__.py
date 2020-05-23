from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app.models.models import User, Post
login = LoginManager(app)

# TO INITIATE DB FOR THE 1 TIME
# run `db init` this command as pycharm config
#  /\
#  |
# and comment all actions that perform on unexisting tables
#  |
# \/

# from app.fakeUsersAndPosts import users, add_admin
from app.fakeUsersAndPosts import users, posts, add_admin
add_admin()
users()
from . api import routes

@login.user_loader
def load_user(id):
    return User.query.get(int(id))
