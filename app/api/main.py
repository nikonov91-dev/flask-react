from flask import jsonify, request, send_file
from blogapp import app
from werkzeug.http import HTTP_STATUS_CODES


from app.fake_it_all import posts as fake_posts
from app.fake_it_all import fake_post


@app.route("/api/posts/<id>", methods=['GET'])
def get_post(id):
  return jsonify({'payload': fake_post[id]})

@app.route("/api/posts", methods=['GET'])
def get_posts():
  return jsonify({'payload': fake_posts})

@app.route("/api/login", methods=['GET', 'POST'])
def login():
  return HTTP_STATUS_CODES[401]


@app.route("/api/signin", methods=['POST'])
def signin():
  return HTTP_STATUS_CODES[401]


@app.route('/api/image/<name>')
def get_image(name):
    if request.args.get('type') == '1':
       filename = './assets/imgs/' + name
    return send_file(filename, mimetype='image/gif')