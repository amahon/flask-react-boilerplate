FROM python:3.6

RUN mkdir -p /app
WORKDIR /app

EXPOSE 5000

CMD FLASK_APP=app/app.py FLASK_DEBUG=1 flask run --host=0.0.0.0
