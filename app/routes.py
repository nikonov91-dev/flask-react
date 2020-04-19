from app import app
import os, signal

@app.route('/helloWorld', methods=['GET'])
def get_home():
    return {'payload': 'helloworld'}

@app.route('/login', methods=['POST'])
def get_auth():
    return {'payload': 'hello from authpage'}

@app.route('/stop-server', methods=['GET'])
def stopServer():
    os.kill(os.getpid(), signal.SIGINT)
    return { "success": True, "message": "Server is shutting down..." }