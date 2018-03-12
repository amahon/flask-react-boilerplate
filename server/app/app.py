"""Boilerplate application

Attributes:
    APP (TYPE): Flask application
"""
from flask import Flask, jsonify

APP = Flask(__name__)


@APP.route("/api/home")
def hello():
    """
    Returns:
        json: message for display on homepage
    """
    return jsonify({
        'message': "Hello from the Server!"
    })
