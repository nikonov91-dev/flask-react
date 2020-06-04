from blogapp import db
# from app import User, Post
# from app.models.models import User
from app.models.models import User, Post
from faker import Faker
from random import randint
from sqlalchemy.exc import IntegrityError


def add_admin():
  email = 'admin@admin.com'
  username = 'admin'
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


posts = [
  {
    'author': 'Corey Schafer',
    'title': 'Blog Post 1',
    'summary': 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
    'content': 'First post content',
    'date': 'April 20, 2018',
    'id': '1'
  },
  {
    'author': 'Jane Doe',
    'title': 'Blog Post 2',
    'summary': 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
    'content': 'Second post content',
    'date': 'April 21, 2018',
    'id': '2'
  }
]

fake_post = {
  '1': {
    'title': 'The Final Frontier',
    'image': 'space-photo.jpg',
    'body': 'The dreams of yesterday are the hopes of today and the reality of\
                tomorrow. Science has not yet mastered prophecy. \n We predict too much for the next year and yet far too\
                little for the next ten.Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to\
                explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has\
                gone before.\nSpaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a\
                historical process which mankind is carrying out in accordance with the natural laws of human\
                development.\nAs we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of\
                a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so\
                delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to\
                change a man.',
    'author': 'NASA on The Commons'
  },
  '2': {
    'title': 'COULD TRAVEL BUBBLES BOOST TOURISM?',
    'image': 'travel-photo.jpg',
    'body': 'Since 15 May, residents of the Baltic States (Estonia, Latvia, Lithuania) have been able to travel within the three countries as they wish. Without a fortnights quarantine or screening test at the borders, literally in a bubble. A travel bubble. A new concept designating a free movement agreement among several states which could, in the coming months, be extended to other countries is expected to boost tourism.\n \
Concerned by the revival of tourism in her country, New Zealand Prime Minister Jacinda Ardern said on 20 May that she was considering the introduction of a 4-day week to encourage her fellow citizens to go on extended weekends in the country.\n \
But an alternative route has been dug to revive this sector, which is essential to the economic health of New Zealand. For several weeks, the government held discussions with its Australian counterparts before reaching an agreement on May 5. The purpose of the agreement? A "travel bubble" between the two countries, a "COVID-free travel zone" that would allow citizens of both countries to fly or cross the Tasman Sea for holidays. Except that both countries preferred to delay and reach a more favourable health situation before officially opening their bubble.',
    'author': 'Pat Hyland '
  }}
