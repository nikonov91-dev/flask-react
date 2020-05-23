import os, signal
from app.models.models import User
from flask_api import status
from flask_login import current_user, login_user
from flask import request
from app import app

HOME_ROUTE = '/'


@app.route('/api/login', methods=['GET', 'POST'])
def login():
  if not current_user.is_authenticated and request.method == 'GET':
    return {'message': 'User is not authenticated'}, status.HTTP_401_UNAUTHORIZED

  #@TODO add email/password validtion
  form_valid_on_submit = True
  if form_valid_on_submit:
    user = User.query.filter_by(email=request.get_json()['email']).first()
    # if user is None or not user.check_password(request.get_json['password']):
    if user is None:
      return {'message': 'Wrong user or password'}, status.HTTP_401_UNAUTHORIZED

    next_page = request.get_json()['next']
    login_user(user, remember=True)
    return {'path': next_page if next_page else HOME_ROUTE}


@app.route('/stop-server', methods=['GET'])
def stopServer():
  os.kill(os.getpid(), signal.SIGINT)
  return {"success": True, "message": "Server is shutting down..."}
