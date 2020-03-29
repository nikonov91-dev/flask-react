from flask import Flask, request
import time, json, os, signal

app = Flask(__name__)

@app.route('/helloWorld', methods=['GET'])
def get_home():
    return {'payload': 'helloworld'}

@app.route('/login', methods=['GET', 'POST'])
def get_auth():
    return {'payload': 'hello from authpage'}

@app.route('/stopServer', methods=['GET'])
def stopServer():
    os.kill(os.getpid(), signal.SIGINT)
    return { "success": True, "message": "Server is shutting down..." }