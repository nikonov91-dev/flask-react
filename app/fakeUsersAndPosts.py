from . import db
# from app import User, Post
# from app.models.models import User
from app.models.models import User, Post
from faker import Faker
from random import randint
from sqlalchemy.exc import IntegrityError


def add_admin():
    email = 'admin@com'
    username='admin'
    user = User.query.filter_by(username=username).first()
    if user is None:
        user = User(email=email, username=username)
        db.session.add(user)
        try:
            db.session.commit()
        except IntegrityError:
            db.session.rollback()


def users(count=100):
    fake = Faker()
    i = 0
    allreadyCreated_100_users = len(list(User.query.all())) < 100
    while i < count and allreadyCreated_100_users:
        u = User(email=fake.email(),
                 username=fake.user_name())
        db.session.add(u)
        try:
            db.session.commit()
            i += 1
        except IntegrityError:
            db.session.rollback()


def posts(count=100):
    fake = Faker()
    user_count = User.query.count()
    for i in range(count):
        u = User.query.offset(randint(0, user_count - 1)).first()
        p = Post(body=fake.text(),
                 timestamp=fake.past_date(),
                 author=u)
        db.session.add(p)
    db.session.commit()