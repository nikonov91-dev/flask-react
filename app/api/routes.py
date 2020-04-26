from app import app
import os, signal
from json import dumps
from app.models.models import User


@app.route('/helloWorld', methods=['GET'])
def get_home():
  return {'payload': 'helloworld'}


@app.route('/login', methods=['GET','POST'])
def get_auth():
  users = User.query.all()
  jsoned_users = [user.to_json() for user in users]
  test = 'var'
  return {
    'payload':
      {
        'users': jsoned_users,
        'hello': 'hello from authpage'
      }
  }


@app.route('/stop-server', methods=['GET'])
def stopServer():
  os.kill(os.getpid(), signal.SIGINT)
  return {"success": True, "message": "Server is shutting down..."}
