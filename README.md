This is academic project based on Python Flask and JS React

##Backend

### deploy locally backend dependency-packages
Install python 3+, but it has been developed on 3.8 and works for sure
Go to **f-r** => **flask_modules** directory

Create venv: `flask_modules $ python3 -m venv venv`

activate venv: `flask_modules $ source venv/bin/activate`

run command: `(venv) pip3 install -r requirements.txt`

add global variable to PyCharm: https://stackoverflow.com/questions/42708389/how-to-set-environment-variables-in-pycharm
`FLASK_APP=__init__.py`

initiate db from the shell: 
`app $ flask db init`

upload developed models to DB with Migrate package:
move into 'app' directory and run
 `app $ flask db migrate -m 'initial migration'`

if the last command failed with
`ImportError: cannot import name 'Post' from 'app.models.models' (/Users/alex/Downloads/web-программирование/f-r/app/models/models.py)`
then comment all the models but User

then uncomment that and run `$ flask db upgrade`. Its needed to update DB after models updated. 

### Run 

The instruction (above) written to run project from PyCharm.

Run from the shell  follow the official instruction: https://flask.palletsprojects.com/en/1.1.x/cli/ 

##Frontend

### Install frontend dependency-packages

Run to install: `f-a $ npm install`

### Run 

Run the ReactApp from shell: `f-a $ npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will be reloaded if source code changed.<br />
You will also see any lint errors in the console.
